"use client";

import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  return (
    <header className="border-b border-solid border-darkAlt py-4">
      <div className="container">
        <div className="flex items-center justify-between gap-10">
          <h4>Welcome {user.firstName}</h4>

          <button className="button button-sm button-primary">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
