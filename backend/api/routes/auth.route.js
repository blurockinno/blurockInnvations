import express from "express";

import { login, registration } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/sign-in", login);
router.post("/sign-up", registration);
// router.post("/google", google);
// router.post("/update/:id",  updateDetails);

export default router;
