import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wraper: React.FC<Props> = ({ children }) => {
  return <div className="p-12 border-2">{children}</div>;
};

export default Wraper;
