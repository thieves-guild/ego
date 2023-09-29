import { useState } from "react";
import MenuLink from "./links";
import {
  ArrowLeft,
  ArrowRight,
  Component,
  Flame,
  Home,
  User2Icon,
} from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`text-gray-200 duration-300 py-8 px-2 text-lg bg-slate-600 ${
        open ? "w-60" : "w-fit"
      }`}
    >
      <div className="text-white text-3xl flex justify-between items-center">
        {open && <h1>Measurify</h1>}
        <p onClick={() => setOpen(!open)}>
          {open ? <ArrowLeft /> : <ArrowRight />}
        </p>
      </div>
      <div className="flex gap-4 bg-slate-700 p-2 my-4">
        <User2Icon />
        {open && <h1>Username</h1>}
      </div>
      <div className="flex flex-col">
        <MenuLink to="/" name={open ? "Home" : <Home />} />
        <MenuLink to="/elements" name={open ? "Elements" : <Component />} />
        <MenuLink to="/streak" name={open ? "Streak" : <Flame />} />
      </div>
    </div>
  );
};

export default Sidebar;
