import { Router } from "express";
import {
  forgotPasswordController,
  loginController,
  logoutController,
  refreshAccessTokenController,
  registerController,
} from "../controllers/user.controllers.js";
import uploadMiddleware from "../middlewares/multer.middlewares.js";
import { isUserVerified, verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// Upload folders
// const avatarUpload = uploadMiddleware("avatar");
// const coverImageUpload = uploadMiddleware("cover-image");

// Routes
router.route("/register").post(registerController);
router.route("/login").post(loginController);
router.route("/logout").post(verifyJWT, logoutController);

router.route("/refresh-access-token").post(refreshAccessTokenController);

router.route("/forgot-password").post(forgotPasswordController);

export default router;
