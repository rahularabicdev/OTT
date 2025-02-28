import { Router } from "express";
import {
  createVideoController,
  fetchAllVideosController,
  uploadVideoThumbnailController,
} from "../controllers/video.controllers.js";
import uploadMiddleware from "../middlewares/multer.middlewares.js";
import { verifyUser, isAdmin } from "../middlewares/auth.middlewares.js";

const router = Router();

// Upload folders
const videoUpload = uploadMiddleware("video");
const thumbnailUpload = uploadMiddleware("thumbnail");

// Routes
router.route("/").get(fetchAllVideosController);
router.route("/").post(verifyUser, isAdmin, createVideoController);
router
  .route("/:id")
  .patch(verifyUser, isAdmin, thumbnailUpload, uploadVideoThumbnailController);

export default router;
