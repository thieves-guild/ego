import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  name: string | ReactNode;
  to: string;
};

const MenuLink: React.FC<Props> = ({ name, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "cursor-pointer p-2 w-full transition duration-200 rounded bg-slate-500"
          : "cursor-pointer p-2 w-full transition duration-200 rounded hover:bg-slate-500"
      }
      to={to}
    >
      {name}
    </NavLink>
  );
};

export default MenuLink;
