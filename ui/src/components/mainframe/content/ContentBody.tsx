import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const ContentBody = ({ children }: Props) => {
  return <div className="col-10 h-100 content-body">{children}</div>;
};
