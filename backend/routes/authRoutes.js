import express from "express";
import { requestPasswordReset, resetPassword} from "../controllers/authController.js";

const router = express.Router();

router.post("/request-password-reset", requestPasswordReset);
router.post("/reset-password/:token", resetPassword); // New route to handle password reset


export default router;
