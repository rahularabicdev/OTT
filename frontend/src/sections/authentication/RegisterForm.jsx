"use client";

import Link from "next/link";
import axios from "axios";
import { useFormik } from "formik";

import { registerSchema } from "@/schemas";
import { FormInput } from "@/components";

const RegisterForm = () => {
  const onSubmit = async (values, { setErrors, setSubmitting }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(response);
    } catch (error) {
      setSubmitting(false);
      if (error.response) {
        const apiError = error.response.data.message || "An error occurred";
        setErrors({ apiError });
      } else if (error.request) {
        const apiError = "No response from server";
        setErrors({ apiError });
      } else {
        const apiError = "An error occurred while making the request";
        setErrors({ apiError });
      }
    }
  };

  // Formik
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      password2: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <>
      <section className="section"></section>
      <section className="section-lg">
        <div className="container">
          <div className="w-8/12 mx-auto">
            <h3 className="heading mb-10">Create An Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="gap-7 mb-7 grid grid-cols-2">
                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                />
                <FormInput
                  label="Phone Number"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phoneNumber && touched.phoneNumber}
                />
                <FormInput
                  label="First name"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.firstName && touched.firstName}
                />
                <FormInput
                  label="Last name"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                />
                <FormInput
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                />
                <FormInput
                  label="Confirm Password"
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  value={values.password2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password2 && touched.password2}
                />
              </div>
              <button
                type="submit"
                className="button w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting" : "Register"}
              </button>
              <p className="mt-5">
                Already have an account?{" "}
                <Link href="/login" className="text-primary">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
