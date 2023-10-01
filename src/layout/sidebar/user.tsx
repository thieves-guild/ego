import { UserButton, useUser } from "@clerk/clerk-react";

const UserInfo = () => {
  const { user } = useUser();
  return (
    <div
      onClick={() => {}}
      className="flex items-center gap-4 p-2 my-4 bg-neutral-200 cursor-pointer"
    >
      <UserButton />
      <h1>{user?.fullName}</h1>
    </div>
  );
};

export default UserInfo;
