import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// Minimum 6, 1 uppercase, 1 lowercase, 1 numeric digit

// Register Schema Validation
export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Please enter Full Name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter Email Address"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please enter a valid password" })
    .required("Please enter Password"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null, "Password must match"]),
});
