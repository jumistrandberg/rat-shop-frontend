import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="fixed top-0 left-0 w-full bg-stone-950 text-white shadow-md z-50">
      <div className="container mx-auto py-2 flex items-center justify-between">
        <div className="nav-logo font-bold text-lg">Logo</div>

        <ul className="nav-links-menu flex space-x-8">
          <li
            onClick={() => setMenu("home")}
            className={`cursor-pointer ${menu === "home" ? "text-blue-400" : ""}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setMenu("rats")}
            className={`cursor-pointer ${menu === "rats" ? "text-blue-400" : ""}`}
          >
            Rats
          </li>
          <li
            onClick={() => setMenu("maybe")}
            className={`cursor-pointer ${menu === "maybe" ? "text-blue-400" : ""}`}
          >
            <Link to="/maybe">Maybe Rats</Link>
          </li>
        </ul>

        <div className="nav-login-cart flex space-x-6">
          <Link to="/cart">Cart placeholder</Link>
          <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
