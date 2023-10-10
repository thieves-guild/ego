import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Wraper from "./wraper";

const Root = () => {
  return (
    <div className="bg-neutral-300">
      <div className="drop-shadow-xl flex min-h-screen mx-auto max-w-7xl container">
        <Sidebar />
        <div className="w-full bg-white">
          <Wraper>
            <Outlet />
          </Wraper>
        </div>
      </div>
    </div>
  );
};

export default Root;
