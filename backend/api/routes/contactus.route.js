import express from "express";
import { newContactUsData } from "../controller/contactus.controller.js";

const router = express.Router(
)

router.post(
    "/contactus",newContactUsData
)

export default router;