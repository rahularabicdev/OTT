"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DashboardAuthGuard = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth.isAuthenticated === undefined) {
      return;
    }

    if (!auth.isAuthenticated || !auth.isAdmin) {
      router.replace("/dashboard/login");
    } else {
      setLoading(false);
    }
  }, [auth, router]);

  if (loading) return null;

  return <>{children}</>;
};

export default DashboardAuthGuard;
