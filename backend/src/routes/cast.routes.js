import { Router } from "express";
import {
  createCastController,
  fetchCastDetailController,
  fetchCastsController,
} from "../controllers/cast.controllers.js";
import uploadMiddleware from "../middlewares/multer.middlewares.js";
import { isAdmin, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Upload folders
const avatarUpload = uploadMiddleware("cast_avatar");

// Routes
router.route("/all").get(fetchCastsController);
router.route("/:id").get(fetchCastDetailController);

router.route("/").post(verifyUser, isAdmin, avatarUpload, createCastController);

export default router;
