import express from "express";
import { initiatePayment, updatePayment, velidatePayment } from "../controller/subscription.controller.js";

const router = express.Router();

//post initiat payment
router.post("/createOrder", initiatePayment);

//validate-payment
router.post("/validate-payment", velidatePayment);

router.put("/:id", updatePayment);

export default router;
