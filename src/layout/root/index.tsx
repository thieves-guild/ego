import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Wraper from "./wraper";

const Root = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full">
        <Wraper>
          <Outlet />
        </Wraper>
      </div>
    </div>
  );
};

export default Root;
