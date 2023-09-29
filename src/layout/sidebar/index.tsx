import { useState } from "react";
import MenuLink from "./links";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col text-gray-200 py-8 w-60 px-2 text-lg bg-slate-600">
      <MenuLink to="/" name="Home" />
      <MenuLink to="/elements" name="Elements" />
      <MenuLink to="/streak" name="Streak" />
    </div>
  );
};

export default Sidebar;
