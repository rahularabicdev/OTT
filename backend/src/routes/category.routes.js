import { Router } from "express";
import {
  fetchCategoriesController,
  fetchSingleCategoryController,
} from "../controllers/category.controllers.js";
import { isAdmin, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/").get(fetchSingleCategoryController);
router.route("/all").get(fetchCategoriesController);

export default router;
