import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div className="d-flex">
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
