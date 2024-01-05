import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center p-1 bg-blue-600">
      <div className="text-white text-md ml-5 mr-5">
        <NavLink
          to="/"
          activeclassname="text-yellow-300 font-bold"
          className="hover:text-yellow-300"
        >
          Home
        </NavLink>
      </div>
      <div className="text-white text-md mr-4">
        <NavLink
          to="/cart"
          activeclassname="text-yellow-300 font-bold"
          className="hover:text-yellow-300"
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
