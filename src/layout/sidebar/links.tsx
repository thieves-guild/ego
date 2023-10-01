import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  name: string;
  to: string;
};

const MenuLink: React.FC<Props> = ({ name, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "cursor-pointer p-2 w-full rounded bg-neutral-300"
          : "cursor-pointer p-2 w-full rounded hover:bg-neutral-300 duration-100 "
      }
      to={to}
    >
      {name}
    </NavLink>
  );
};

export default MenuLink;
