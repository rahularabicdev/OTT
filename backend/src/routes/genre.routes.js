import { Router } from "express";
import {
  fetchGenreController,
  fetchGenresDetailController,
} from "../controllers/genre.controllers.js";
import { isAdmin, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/all").get(fetchGenreController);
router.route("/:id").get(fetchGenresDetailController);

export default router;
