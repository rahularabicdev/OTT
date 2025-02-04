import * as yup from "yup";

// Minimum 6, 1 uppercase, 1 lowercase, 1 numeric digit
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

// Register Schema Validation
export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Please enter First Name"),
  lastName: yup.string().nullable(),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter Email Address"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number")
    .required("Please enter Phone Number"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please enter a valid password" })
    .required("Please enter Password"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your Password"),
});
