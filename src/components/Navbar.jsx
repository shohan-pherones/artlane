import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getTransition } from "../utils/getTransition";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);

  const linkItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/arts">Browse Arts</Link>
      </li>
    </>
  );

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={getTransition()}
      className="navbar bg-base-100/75 backdrop-blur-xl border-b h-16 fixed top-0 left-0 right-0 z-[100]"
    >
      <nav className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {linkItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Artlane
        </Link>
      </nav>
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{linkItems}</ul>
      </nav>
      <nav className="navbar-end gap-5">
        {/* CART ICON */}
        <Link to="/cart" className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {/* CART QUANTITY */}
          <span className="badge badge-sm indicator-item badge-secondary">
            {items.length}
          </span>
        </Link>
        {/* LOGIN BUTTON */}
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </nav>
    </motion.header>
  );
};

export default Navbar;
