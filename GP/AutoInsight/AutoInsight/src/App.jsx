import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import HomePage from "./components/HomePage/HomePage";
import Authentication from "./components/Authentication/Authentication.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("App isLoggedIn:", isLoggedIn); // Debugging

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "home", element: <HomePage /> }, 
      ],
    },
    {
      path: "/login",
      element: <Authentication setIsLoggedIn={setIsLoggedIn} />, 
    },
    {
      path: "/signup",
      element: <Authentication />, 
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;