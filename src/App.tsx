import "./App.css";
import Home from "./components/app_pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/app_pages/Contact";
import About from "./components/app_pages/About";
import Portfolio from "./components/app_pages/Portfolio";
import RootLayout from "./components/app_pages/RootLayout";
import ScrollToTop from "./components/utils/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <RootLayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
