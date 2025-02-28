import { Router } from "express";
import {
  createVideoController,
  fetchAllVideosController,
} from "../controllers/video.controllers.js";
import uploadMiddleware from "../middlewares/multer.middlewares.js";
import { verifyUser, isAdmin } from "../middlewares/auth.middlewares.js";

const router = Router();

// Upload folders
const videoUpload = uploadMiddleware([{ name: "video", maxCount: 1 }]);
const thumbnailUpload = uploadMiddleware([{ name: "thumbnail", maxCount: 1 }]);

// Routes
router.route("/").get(fetchAllVideosController);
router.route("/").post(verifyUser, isAdmin, createVideoController);

export default router;
