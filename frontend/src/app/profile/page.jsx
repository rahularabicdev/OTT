"use client";

import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const auth = useSelector((state) => state.auth);
  if (!auth.isAuthenticated) return redirect("/login");

  return (
    <>
      <section className="section"></section>
      <section className="section">
        <div className="container">
          <h1 className="heading">{auth.user.firstName}</h1>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
