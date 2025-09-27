import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx"; // Import About component
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
// import TemporaryDrawer from "./components/Admin/TemporaryDrawer.jsx";
import AdminHome from "./components/Admin/AdminHome.jsx";
import UpdateBlog from "./components/Admin/UpdateBlog.jsx";
import DeleteBlog from "./components/Admin/DeleteBlog.jsx";
import AddBlog from "./components/Admin/AddBlog.jsx";
// import MainLayout from "./pages/MainLayout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> }, // Add About route
      { path: "/sign_in", element: <SignIn /> },
      { path: "/sign_up", element: <SignUp /> },
      {path:"/admin_home",element:<AdminHome/>},
      {path:"/update_blog",element:<UpdateBlog/>},
      {path:"/delete_blog",element:<DeleteBlog/>},
      {path:"/add_blog",element:<AddBlog/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
