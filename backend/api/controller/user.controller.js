import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import { AuthUser } from "../models/auth.model.js";
import crypto from "crypto";
import mongoose from "mongoose";

// //sign in
// export const signIn = async (req, res, next) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);

//     if (!isPasswordCorrect)
//       return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign(
//       { email: user.email, id: user._id },
//       "dfahdirieirhfdajf",
//       {
//         expiresIn: "1h",
//       }
//     );

//     res.status(200).json({ user: user, token });
//   } catch (error) {
//     next(errorHandler(500, "Something went wrong"));
//   }
// };

// //sign up
// export const signUp = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });

//     if (existingUser)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const result = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     const token = jwt.sign(
//       { email: result.email, id: result._id },
//       "dfahdirieirhfdajf",
//       { expiresIn: "1h" }
//     );

//     res.status(201).json({ result, token });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

//google mail authentication
export const google = async (req, res, next) => {
  const { name, email, photo } = req.body;

  try {
    let user = await User.findOne({ email: email });

    if (user) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        "dfahdirieirhfdajf", // Consider using environment variables for secrets
        { expiresIn: "1h" }
      );

      res.status(200).json({
        success: true,
        message: "Logged in successfully!",
        user,
        token,
      });
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);

      const hashedPassword = await bcrypt.hash(generatedPassword, 12);

      user = await User.create({
        username: name.split(" ").join("").toLowerCase(),
        email,
        profilePicture: photo,
        password: hashedPassword,
      });

      const token = jwt.sign(
        { email: user.email, id: user._id },
        "dfahdirieirhfdajf", // Consider using environment variables for secrets
        { expiresIn: "1h" }
      );

      res.status(200).json({
        success: true,
        message: "Login successfully",
        user,
        token,
      });
    }
  } catch (error) {
    next(errorHandler(500, "Something went wrong"));
  }
};


// User Registration Controller
export const registerUser = async (req, res) => {
  const { fullName, companyId, email, role, status, softwareName, companyName } = req.body;

  try {
    // Validate input
    if (!fullName || typeof fullName !== "string") {
      return res.status(400).json({ message: "Invalid full name." });
    }
    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "Invalid email." });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // Create a verification token
    const verificationToken = crypto.randomBytes(20).toString("hex");

    const modifiedPassword = fullName.slice(0, 4) + "3223";

    const hashPassword = await bcrypt.hash(modifiedPassword, 12);

    // Create a new user
    const newUser = new User({
      fullName,
      companyId,
      email,
      password: hashPassword,
      tempPassword: modifiedPassword,
      verificationToken,
      role,
      status,
      softwareName,
      companyName
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({
      success: true,
      newUser,
      message: "User registered successfully. Please verify your email.",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// User Login Controller
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Check if the user's email is verified
    if (!user.isVerified) {
      return res.status(401).json({ message: "Email not verified." });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ token, message: "Login successful." });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

//verify user
export const verifyUser = async (req, res) => {
  try {
    console.log("working");
    // extract token from cookie
    const { token } = req.cookies;

    //check token exist or not
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Please Login!",
      });
    }

    //verify token
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    // check user exist or not
    req.user = await AuthUser.findById(decode._id);

    res.status(200).json({
      success: true,
      message: "Verified",
      token,
      user: req.user,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all user
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const removeUser = async (req, res) => {
  const { id } = req.params;
  try {
    // Find and delete user
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "User removed successfully",
    });
  } catch (error) {
    console.error("Error removing user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// update user details and change the access right
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { userData } = req.body;
  console.log(id);

  try {
    // Validate input
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID." });
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      success: true,
      updatedUser,
      message: "User updated successfully.",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

//verify owner
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    console.log(token)

    const user = await User.findOne({ verificationToken: token });

    if (user) {
      // Mark the user as verified and clear the verification token
      user.isVerified = true;
      user.verificationToken = null;
      await user.save();

      res.send("Email verified successfully!");
    } else {
      res.status(404).send("Invalid verification token.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};