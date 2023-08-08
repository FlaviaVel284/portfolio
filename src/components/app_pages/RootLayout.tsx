import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const RootLayout: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
