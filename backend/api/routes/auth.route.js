import express from "express";

import { login, registration, updateDetails, verifyEmail } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/sign-in", login);
router.post("/sign-up", registration);  
// router.post("/google", google);
router.put("/:id",  updateDetails);
//verify email
router.get("/verify-email", verifyEmail)

export default router;
