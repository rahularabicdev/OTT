import { FormInput } from "@/components";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <section className="section"></section>
      <section className="section-lg">
        <div className="container">
          <div className="w-4/12 mx-auto">
            <h3 className="heading mb-10">Sign In</h3>
            <form method="post">
              <FormInput
                label="Email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <FormInput
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button className="button w-full">Login</button>
              <p className="mt-5">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary">
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
