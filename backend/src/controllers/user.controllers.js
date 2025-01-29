import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import UserRole from "../models/user-role.model.js";
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
  /**
   * TODO: Get data from frontend
   * TODO: Validate Data
   * TODO: Check if user exist
   * TODO: Create new user
   * TODO: Sending Response
   * **/

  // * Get Data From Frontend
  const { email, firstName, lastName, phoneNumber, password, password2 } =
    req.body;

  // * Validation Check
  notEmptyValidation([email, firstName, password]);
  emailValidation(email);
  phoneNumberValidation(phoneNumber);
  passwordValidation(password);
  compareFieldValidaton(password, password2, "Passwords does not match");

  // * Check If user Exists
  const emailExist = await User.findOne({ email });
  const phoneExist = await User.findOne({ phoneNumber });
  if (emailExist) {
    throw new ApiError(409, "User with email already exists");
  }
  if (phoneExist) {
    throw new ApiError(409, "User with phone already exists");
  }

  // * Adding Role
  const userRole = await UserRole.findOne({ name: "user" });
  if (!userRole) {
    throw new ApiError(
      500,
      "Default role not found, please setup UserRole collection"
    );
  }

  // * Create New User
  const createdUser = await User.create({
    email,
    firstName,
    lastName,
    phoneNumber,
    password,
    role: userRole._id,
    lastLogin: new Date(),
  });

  // * Check if user is created
  const user = await User.findById(createdUser._id).select(
    "-password -refreshToken"
  );
  if (!user) {
    throw new ApiError(500, "Error creating user, Please try again!");
  }

  // * Save Verification Code
  const token = generate20CharToken();
  generateVerificationToken(user._id, token);
  //   sendVerificationCodeEmail(user.email, token);

  // * Sending Response
  return res.status(201).json(new ApiResponse(200, user, "User registered!"));
});

// Login Controller
export const loginController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get data from user
   * TODO: Validate data
   * TODO: Check if user exists
   * TODO: Check Password
   * TODO: Generate Token
   * TODO: Sending Response
   * **/

  // * Get data from user
  const { email, phoneNumber, password } = req.body;

  // * Validate data
  notEmptyValidation([password]);
  if (!email && !phoneNumber) {
    throw new ApiError(400, "Please enter your email or phone number.");
  }
  if (email) emailValidation(email);
  if (phoneNumber) phoneNumberValidation(phoneNumber);
  passwordValidation(password);

  // * Check if user exists
  const user = await User.findOne({ $or: [{ email }, { phoneNumber }] })
    .select("password role")
    .populate("role", "name");
  if (!user) {
    throw new ApiError(400, "Invalid email or password");
  }

  // * Check if role is "user"
  if (!user.role || user.role.name !== "user") {
    throw new ApiError(403, "Access Denied: Only users can log in.");
  }

  // * Check Password
  const passwordCheck = await user.isPasswordCorrect(password);
  if (!passwordCheck) {
    throw new ApiError(401, "Invalid password");
  }

  // * Generate Token
  const { accessToken, refreshToken } = await generateAccessRefreshToken(
    user._id
  );
  const loggedInUser = await User.findById(user._id);

  // * Update Last Login
  user.lastLogin = new Date();
  await user.save();

  // * Sending Response
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully!"
      )
    );
});

// Logout Controller
export const logoutController = asyncHandler(async (req, res) => {
  /**
   * TODO: Update token in backend
   * TODO: Delete cookie from frontend
   * TODO: Sending Response
   * **/

  // * Update token in backend
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    { new: true }
  );

  // * Sending Response & Delete cookie from frontend
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out!"));
});
