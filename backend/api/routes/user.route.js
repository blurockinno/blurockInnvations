import express from "express";
import {
  google,
  loginUser,
  registerUser,
  updateDetails,
  verifyUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/sign-in", registerUser);
router.post("/sign-up", loginUser);
router.post("/google", google);
router.post("/update/:id", updateDetails);

router.post("/verifyUser", verifyUser);

export default router;
