import { FormInput } from "@/components";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <>
      <section className="section"></section>
      <section className="section-lg">
        <div className="container">
          <div className="w-8/12 mx-auto">
            <h3 className="heading mb-10">Create An Account</h3>
            <form method="post">
              <div className="flex gap-7">
                <div className="w-1/2">
                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <FormInput
                    label="First name"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                  <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <FormInput
                    label="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    required
                  />
                  <FormInput
                    label="Last name"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                  />
                  <FormInput
                    label="Confirm Password"
                    type="password"
                    name="password2"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>
              <button className="button w-full">Register</button>
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
