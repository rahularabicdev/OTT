import { Router } from "express";
import { fetchAllVideosController } from "../controllers/video.controllers.js";
import uploadMiddleware from "../middlewares/multer.middlewares.js";
import { verifyUser, isAdmin } from "../middlewares/auth.middlewares.js";

const router = Router();

// Upload folders
const videoUpload = uploadMiddleware("video");

// Routes
router.route("/").get(fetchAllVideosController);

export default router;
