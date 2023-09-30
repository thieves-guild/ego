import MenuLink from "./links";
import UserInfo from "./user";

const Sidebar = () => {
  return (
    <div className="py-8 px-2 text-lg w-60 bg-neutral-100">
      <h1 className="text-3xl ">Measurify</h1>
      <UserInfo />
      <div className="flex flex-col gap-2 mt-12">
        <MenuLink to="/" name={"Home"} />
        <MenuLink to="/elements" name={"Elements"} />
        <MenuLink to="/streak" name={"Streak"} />
      </div>
    </div>
  );
};

export default Sidebar;
