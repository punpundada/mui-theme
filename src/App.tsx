import React, { Suspense } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Loader from "./components/Loader";
import NotFound from "./pages/error-pages/NotFound";
// import Login from "./pages/Login";
const About = React.lazy(() => import("./pages/About"));
const ContactUs = React.lazy(() => import("@/pages/ContactUs"));

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Login />,
  //   // index:true
  // },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "/about/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<Loader />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
