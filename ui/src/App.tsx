import React from "react";
import "./App.css";
import { ProductTable } from "./components/ProductTable";

function App() {
  return (
    <div className="App container-fluid h-100">
      <div className="row">
        <div className="col-2 bg-primary logo align-items-center text-white">
          <div className="row">
            <div className="col-6 p-0">
              <h1>Pricer</h1>
            </div>
            <div className="col-2 p-0 align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-tags wobble-ver-left"
                viewBox="0 0 16 16"
              >
                <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
              </svg>
            </div>
          </div>
        </div>
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
      </div>
      <div className="row d-flex h-100">
        <div className="col-2 bg-light">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
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
        </div>
        <div className="col-10 h-100">
          <ProductTable />
        </div>
      </div>
    </div>
  );
}

export default App;
