import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Wraper from "./wraper";

const Root = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div>
        <Wraper>
          <Outlet />
        </Wraper>
      </div>
    </div>
  );
};

export default Root;
