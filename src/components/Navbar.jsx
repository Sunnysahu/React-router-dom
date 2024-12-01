import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center">
      <div className=" inline-flex justify-center mx-auto  ">
        <nav className="flex text-xl mt-12 gap-2">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${isActive ? "bg-gray-400" : ""} rounded-lg p-2`
            }
          >
            <li className="rounded-lg list-none hover:text-blue-600 ">Home</li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${isActive ? "bg-gray-400" : ""} rounded-lg p-2`
            }
          >
            <li className="rounded-lg list-none hover:text-blue-600">
              Profile
            </li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "bg-gray-400" : ""} rounded-lg p-2`
            }
          >
            <li className="rounded-lg list-none hover:text-blue-600">
              Contact
            </li>
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `${isActive ? "bg-gray-400" : ""} rounded-lg p-2`
            }
          >
            <li className="rounded-lg list-none hover:text-blue-600">
              About Us
            </li>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
