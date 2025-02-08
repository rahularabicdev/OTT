import { Router } from "express";
import { fetchGenreController } from "../controllers/genre.controllers.js";
import { isAdmin, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/all").get(fetchGenreController);

export default router;
