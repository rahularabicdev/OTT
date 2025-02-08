import mongoose from "mongoose";

import Genre from "../models/genre.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { notEmptyValidation } from "../utils/validators.js";

// Fetch All Genres Controller
export const fetchGenreController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get All Genres
   * TODO: Sending Response
   * **/

  // * Get All Genres
  const genres = await Genre.find();

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, genres, "Fetched Genres Successfully!"));
});

// Fetch Genres Detail Controller
export const fetchGenresDetailController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get Id from Params
   * TODO: Fetch Detail
   * TODO: Sending Response
   * **/

  // * Get Id from Params
  const { id } = req.params;

  // * Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid Genre ID");
  }

  // * Get Single Genre
  const genre = await Genre.findById(id);

  // * Check if Genre exists
  if (!genre) throw new ApiError(404, "Genre not found");

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, genre, "Fetched Genre Details Successfully!"));
});
