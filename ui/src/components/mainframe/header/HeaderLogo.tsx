import React from "react";
import { LabelTagIcon } from "../../icons/Icons";

export const HeaderLogo = () => {
  return (
    <div className="col-2 bg-primary logo align-items-center text-white">
      <div className="row h-100 pl-2">
        <div className="col-4 p-0 mr-1">
          <h1>Pricer</h1>
        </div>
        <div className="col-2 p-0 d-flex align-items-center">
          <LabelTagIcon />
        </div>
      </div>
    </div>
  );
};
