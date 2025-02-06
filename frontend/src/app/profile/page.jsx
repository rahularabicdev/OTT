"use client";

import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { ProfileCard } from "@/sections/profile";

const ProfilePage = () => {
  const auth = useSelector((state) => state.auth);
  if (!auth.isAuthenticated) return redirect("/login");

  return (
    <>
      <ProfileCard user={auth.user} />
    </>
  );
};

export default ProfilePage;
