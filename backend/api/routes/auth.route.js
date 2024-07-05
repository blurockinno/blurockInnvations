import express from "express";

import { login, registration, updateDetails } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/sign-in", login);
router.post("/sign-up", registration);
// router.post("/google", google);
router.put("/:id",  updateDetails);

export default router;
