import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
