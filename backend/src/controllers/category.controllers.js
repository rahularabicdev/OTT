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
