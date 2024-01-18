import { SignOutButton } from "@clerk/clerk-react";
import MenuLink from "./links";
import UserInfo from "./user";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="py-8 px-2 text-lg w-60 bg-neutral-100">
      <h1 className="text-3xl ">Measurify</h1>
      <UserInfo />
      <div className="flex flex-col gap-2 mt-12">
        <MenuLink to="/" name={"Dashboard"} />
        <MenuLink to="/elements" name={"Elements"} />
        <MenuLink to="/streak" name={"Streak"} />
      </div>
      <SignOutButton signOutCallback={() => navigate("/")} />
    </div>
  );
};

export default Sidebar;
