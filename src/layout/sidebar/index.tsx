import { useState } from "react";
import MenuLink from "./links";
import { ArrowLeft, Component, Flame, Home, User2Icon } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-slate-600 py-8 px-2 text-white text-lg duration-150 ${
        open ? "w-60" : "w-14"
      }`}
    >
      <div className="text-white text-3xl flex justify-between items-center">
        {open && <h1>Measurify</h1>}
        <ArrowLeft
          onClick={() => setOpen(!open)}
          className={`duration-300 cursor-pointer ${open ? "" : "-rotate-180"}`}
        />
      </div>
      <div className="flex gap-4 bg-slate-700 p-2 my-4">
        <User2Icon />
        {open && <h1>Username</h1>}
      </div>
      <div className="flex flex-col gap-2 mt-12">
        <MenuLink to="/" name={open ? "Home" : <Home />} />
        <MenuLink to="/elements" name={open ? "Elements" : <Component />} />
        <MenuLink to="/streak" name={open ? "Streak" : <Flame />} />
      </div>
    </div>
  );
};

export default Sidebar;
