import { Router } from "express";
import {
  createCategoryController,
  fetchCategoriesController,
  fetchCategoryDetailController,
} from "../controllers/category.controllers.js";
import { isAdmin, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/").get(fetchCategoryDetailController);
router.route("/").post(verifyUser, isAdmin, createCategoryController);
router.route("/all").get(fetchCategoriesController);

export default router;
