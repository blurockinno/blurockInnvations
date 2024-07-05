import express from "express";
import {
  getAllUsers,
  google,
  loginUser,
  registerUser,
  removeUser,
  updateUser,
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

export default router;
