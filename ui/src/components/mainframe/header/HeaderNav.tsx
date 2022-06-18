import React from "react";

export const HeaderNav = () => {
  return (
    <div className="col-10 navbar-wrap">
      <nav className="navbar navbar-light navbar-expand">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
