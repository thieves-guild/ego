import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  name: string;
  to: string;
};

const MenuLink: React.FC<Props> = ({ name, to }) => {
  return (
    <NavLink to={to}>
      <p className="hover:bg-slate-500 cursor-pointer p-2 w-full transition duration-200 rounded">
        {name}
      </p>
    </NavLink>
  );
};

export default MenuLink;
