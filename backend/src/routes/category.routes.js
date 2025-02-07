import { Router } from "express";
import { fetchCategoriesController } from "../controllers/category.controllers.js";
import { isAdmin, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/").get(verifyUser, isAdmin, fetchCategoriesController);

export default router;
