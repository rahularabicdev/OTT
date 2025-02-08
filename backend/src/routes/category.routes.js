import { Router } from "express";
import {
  createCategoryController,
  fetchCategoriesController,
  fetchCategoryDetailController,
  updateCategoryController,
} from "../controllers/category.controllers.js";
import { isAdmin, verifyUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/").post(verifyUser, isAdmin, createCategoryController);
router.route("/all").get(fetchCategoriesController);
router.route("/:id").get(fetchCategoryDetailController);

router.route("/:id").patch(verifyUser, isAdmin, updateCategoryController);

export default router;
