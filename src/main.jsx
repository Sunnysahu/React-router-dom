import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NotFound from "./components/NotFound.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import UserProfile from "./components/UserProfile.jsx";
import UserAbout from "./components/UserAbout.jsx";
import Contact from "./components/Contact.jsx";
import WebsiteAboutUs from "./components/WebsiteAboutUs.jsx";
import Navbar from "./components/Navbar.jsx";

//   / - home
//   /profile
//   /profile/:id
//   /profile/:id/about
//   /setting
//   /abc
//   /klmdsakmds = Catch all route
// /aboutus
//
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "home",
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
        // children: [
        //   {
        //     path: ":userId",
        //     element: <UserProfile />,
        //     // loader: userProfileLoader,
        //     errorElement: <NotFound />,
        //     children: [
        //       {
        //         path: "about",
        //         element: <UserAbout />,
        //       },
        //     ],
        //   },
        // ],
      },
      {
        path: "/profile/:userId",
        element: <UserProfile />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/aboutus",
    element: <WebsiteAboutUs />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
