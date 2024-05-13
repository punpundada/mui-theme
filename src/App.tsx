import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Loader from "./components/Loader";

const About = React.lazy(() => import("./pages/About"));
const ContactUs = React.lazy(() => import("@/pages/ContactUs"));
const NotFound = React.lazy(() => import("./pages/error-pages/NotFound"));
const Settings = React.lazy(() => import("./pages/profile/Settings"));


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
        path: "/profile",
        children: [
          {
            path: "/profile/settings",
            element: (
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            ),
          },
        ],
      },
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
        path: "*",
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
