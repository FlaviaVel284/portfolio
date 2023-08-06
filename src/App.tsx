import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/app_pages/Intro";
import Home from "./components/app_pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/app_pages/Contact";
import About from "./components/app_pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Intro />
        <Home />
      </>
    ),
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
