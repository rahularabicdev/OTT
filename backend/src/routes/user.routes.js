import { Router } from "express";
import {
  forgotPasswordController,
  forgotPasswordRequestController,
  loginController,
  logoutController,
  refreshAccessTokenController,
  registerController,
  resetPasswordController,
} from "../controllers/user.controllers.js";
import uploadMiddleware from "../middlewares/multer.middlewares.js";
import { isUserVerified, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Upload folders
// const avatarUpload = uploadMiddleware("avatar");
// const coverImageUpload = uploadMiddleware("cover-image");

// Routes
router.route("/register").post(registerController);
router.route("/login").post(loginController);
router.route("/logout").post(verifyUser, logoutController);

router.route("/refresh-access-token").post(refreshAccessTokenController);

router.route("/forgot-password").post(forgotPasswordController);
router.route("/forgot-password-request").patch(forgotPasswordRequestController);
router.route("/reset-password").patch(verifyUser, resetPasswordController);

export default router;
