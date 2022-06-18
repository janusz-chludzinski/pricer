import React from "react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <div className="row">
      <HeaderLogo />
      <HeaderNav />
    </div>
  );
};
