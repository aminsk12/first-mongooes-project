import express from "express";
import validateRequest from "../../middlwares/validateRequest";
import { AuthValidation } from "./auth.validation";


const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  
);

export const AuthRoutes = router;
