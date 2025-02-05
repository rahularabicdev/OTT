"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useSelector } from "react-redux";

import { DummyUser } from "@/static/images";

const HeaderAuthentication = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const auth = useSelector((state) => state.auth);

  return (
    <>
      {/* Link */}
      <div className="relative">
        <button
          className="text-xl text-primary hover:text-light transition duration-500"
          onClick={() => setDropdownActive(!dropdownActive)}
        >
          <FiUser />
        </button>

        {/* Dropdown */}
        {!auth.isAuthenticated && dropdownActive && (
          <div className="absolute right-0 w-64 max-w-2/3 bg-darkAlt p-4 top-9 rounded shadow-md">
            <ul className="flex gap-1">
              <li className="w-1/2">
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 bg-dark text-light transition duration-500 hover:bg-primary hover:text-dark p-3 rounded-s-full"
                >
                  <CiLogin className="text-xl" />
                  <span className="text-sm font-medium">Login</span>
                </Link>
              </li>
              <li className="w-1/2">
                <Link
                  href="/register"
                  className="flex items-center justify-center gap-2 bg-dark text-light transition duration-500 hover:bg-primary hover:text-dark p-3 rounded-e-full"
                >
                  <FiUserPlus className="text-xl" />
                  <span className="text-sm font-medium">Register</span>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Dropdown */}
        {auth.isAuthenticated && dropdownActive && (
          <div className="absolute right-0 w-64 max-w-2/3 bg-darkAlt p-4 top-9 rounded shadow-md">
            <p className="text-center mb-4">
              <Link href={auth.user.email} className="text-sm">
                {auth.user.email}
              </Link>
            </p>
            <div className="text-center mb-4">
              <Image
                src={auth.user.avatar || DummyUser}
                alt={auth.user.firstName}
                className="w-14 h-14 rounded-full overflow-hidden mx-auto"
              />
              <h6 className="text-primary text-sm font-semibold mt-4">
                Hi, {auth.user.firstName}!
              </h6>
            </div>
            <ul className="flex gap-1">
              <li className="w-1/2">
                <Link
                  href="/profile"
                  className="flex items-center justify-center gap-2 bg-dark text-light transition duration-500 hover:bg-primary hover:text-dark p-3 rounded-s-full"
                >
                  <FiUser className="text-xl" />
                  <span className="text-sm font-medium">Profile</span>
                </Link>
              </li>
              <li className="w-1/2">
                <Link
                  href="/logout"
                  className="flex items-center justify-center gap-2 bg-dark text-light transition duration-500 hover:bg-primary hover:text-dark p-3 rounded-e-full"
                >
                  <CiLogout className="text-xl" />
                  <span className="text-sm font-medium">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderAuthentication;
