import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Root = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
