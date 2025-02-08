import { Router } from "express";
import {
  fetchCastDetailController,
  fetchCastsController,
} from "../controllers/cast.controllers.js";
import { isAdmin, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/all").get(fetchCastsController);
router.route("/:id").get(fetchCastDetailController);

export default router;
