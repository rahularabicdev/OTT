import { Router } from "express";
import {
  createGenreController,
  fetchGenreController,
  fetchGenresDetailController,
  updateGenreController,
} from "../controllers/genre.controllers.js";
import { isAdmin, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/all").get(fetchGenreController);
router.route("/:id").get(fetchGenresDetailController);

router.route("/").post(verifyUser, isAdmin, createGenreController);
router.route("/:id").patch(verifyUser, isAdmin, updateGenreController);

export default router;
