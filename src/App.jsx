import Spline from "@splinetool/react-spline";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
