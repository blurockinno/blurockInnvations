import express from "express";
import {
  getAllUsers,
  google,
  loginUser,
  registerUser,
  removeUser,
  updateUser,
  verifyEmail,
  verifyUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/sign-in", loginUser);
router.post("/sign-up", registerUser);
router.post("/google", google);

router.post("/verifyUser", verifyUser);
router.get("/all", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", removeUser);

//router for verify email
router.get("/verify-email", verifyEmail)

export default router;
