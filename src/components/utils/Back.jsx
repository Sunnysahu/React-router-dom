import Navbar from "../Navbar";

import { NavLink, Link, useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className=" m-4  px-2  h-8 hover:bg-gray-400 hover:text-blue-700 rounded-lg border border-black"
        onClick={() => {
          navigate("/home");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Back;
