import React, { Suspense } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import Loader from "./components/Loader";
import NotFound from "./pages/error-pages/NotFound";
const About = React.lazy(() => import("./pages/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Layout />
    ),
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
        element: <ContactUs />,
      },
      {
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
