import express from "express";
import {
  getAllUsers,
  google,
  loginUser,
  registerUser,
  updateDetails,
  verifyUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/sign-in", loginUser);
router.post("/sign-up", registerUser);
router.post("/google", google);
router.post("/update/:id", updateDetails);

router.post("/verifyUser", verifyUser);
router.get("/all", getAllUsers)

export default router;
