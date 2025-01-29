import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import {
  emailValidation,
  notEmptyValidation,
  passwordValidation,
  phoneNumberValidation,
  compareFieldValidaton,
} from "../utils/validators.js";
import {
  generateAccessRefreshToken,
  generateVerificationToken,
  options,
  generate20CharToken,
  generatePasswordResetToken,
} from "../utils/generateToken.js";

// Register Controller
export const registerController = asyncHandler(async (req, res) => {
  // Get Data From Frontend
  const { email, firstName, lastName, phoneNumber, password, password2 } =
    req.body;

  // Validation Check
  notEmptyValidation([email, firstName, password]);
  emailValidation(email);
  phoneNumberValidation(phoneNumber);
  passwordValidation(password);
  compareFieldValidaton(password, password2, "Passwords does not match");

  // Check If user Exists
  const emailExist = await User.findOne({ email });
  const phoneExist = await User.findOne({ phoneNumber });
  if (emailExist) {
    throw new ApiError(409, "User with email already exists");
  }
  if (phoneExist) {
    throw new ApiError(409, "User with phone already exists");
  }

  // Create New User
  const createdUser = await User.create({
    email,
    firstName,
    lastName,
    phoneNumber,
    password,
  });

  // Check if user is created
  const user = await User.findById(createdUser._id).select(
    "-password -refreshToken"
  );
  if (!user) {
    throw new ApiError(500, "Error creating user, Please try again!");
  }

  // Save Verification Code
  const token = generate20CharToken();
  generateVerificationToken(user._id, token);
  //   sendVerificationCodeEmail(user.email, token);

  // Sending RESPONSE
  return res.status(201).json(new ApiResponse(200, user, "User registered!"));
});
