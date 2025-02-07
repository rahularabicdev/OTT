import Category from "../models/category.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

// Fetch All Categories Controller
export const fetchCategoriesController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get All Categories
   * TODO: Send Response
   * **/

  // * Get All Categories
  const categories = await Category.find();

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, categories, "Fetched Categories Successfully!"));
});

// Fetch Single Category Controller
export const fetchSingleCategoryController = asyncHandler(async (req, res) => {
  const { _id } = req.params;

  /**
   * TODO: Get Single Category
   * TODO: Send Response
   * **/

  // * Get Single Category
  const category = await Category.findById(_id);

  // * Check if Category exists
  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, category, "Fetched Category Successfully!"));
});
