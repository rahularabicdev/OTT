import { Router } from "express";
import { fetchCastsController } from "../controllers/cast.controllers.js";
import { isAdmin, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/all").get(fetchCastsController);

export default router;
