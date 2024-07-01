import { v4 as uuidv4 } from "uuid";
import { AuthUser } from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/cookie.js";
//registration
export const registration = async (req, res) => {
    // Fetch data from request body
    const { companyName, fullName, email, isAgreed, mobileNumber, industrySize } = req.body;

    console.log(req.body)
  
    try {
      // Validation
      if (!companyName) {
        return res.status(400).json({
          success: false,
          message: "Please enter company name",
        });
      }
      if (!fullName) {
        return res.status(400).json({
          success: false,
          message: "Please enter full name",
        });
      }
      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Please enter email",
        });
      }
      if (!mobileNumber) {
        return res.status(400).json({
          success: false,
          message: "Please enter mobile number",
        });
      }
      if (!isAgreed) {
        return res.status(400).json({
          success: false,
          message: "Please accept terms and conditions of company",
        });
      }
  
      // Check if email already exists
      const isEmailExist = await AuthUser.findOne({ email });
      if (isEmailExist) {
        return res.status(400).json({
          success: false,
          message: "Email already exists",
        });
      }
  
      // Generate unique company ID and temporary password
      let companyId = companyName.slice(0, 5) + uuidv4();
      let password = companyName.slice(0, 5) + "7823";
  
      // Encrypt password
      const hashPassword = await bcrypt.hash(password, 10);
  
      // Generate verification token
      const verificationToken = uuidv4();

  
      // Create user in the database
      const user = await AuthUser.create({
        companyId,
        companyName,
        fullName,
        email,
        password: hashPassword,
        industrySize,
        verificationToken,
        temPassword: password,
      });
  
      // Send cookie and response
      sendCookie(user, res, "Account created successfully.", 201);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
//login
export const login = async (req, res) => {
  // Fetch all the data from request body
  const { email, password } = req.body;

  try {
    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter email and password!",
      });
    }

    // Check if email exists
    const user = await AuthUser.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email does not exist! Please register!",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Please enter the correct password!",
      });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET || "your_jwt_secret",
      {
        expiresIn: "3d",
      }
    );

    // Set cookie for token and return success response
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
      httpOnly: true,
      sameSite: "None",
      secure: true,
    };

    return res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      user,
      message: "Login successful!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "An error occurred during login",
    });
  }
};
