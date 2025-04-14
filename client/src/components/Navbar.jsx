import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: 280, height: "100vh" }} // Full height
    >
      <Link
        to="/container/all_blogs"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-1">BlogAPp</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto flex-grow-1">
        <li className="nav-item">
          <Link
            to="/container/all_blogs"
            className={`nav-link ${
              activeTab === "/container/all_blogs" ? "active" : ""
            }`}
            onClick={() => handleTabClick("/container/all_blogs")}
            aria-current={
              activeTab === "/container/all_blogs" ? "page" : undefined
            }
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#home" />
            </svg>
            <span className="text-white">ALL BLOGS</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/container/my_blogs"
            className={`nav-link ${
              activeTab === "/container/my_blogs" ? "active" : ""
            }`}
            onClick={() => handleTabClick("/container/my_blogs")}
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            <span className="text-white">MY BLOGS</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/container/categories"
            className={`nav-link ${
              activeTab === "/container/categories" ? "active" : ""
            }`}
            onClick={() => handleTabClick("/container/categories")}
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#table" />
            </svg>
            <span className="text-white">CATEGORIES</span>
          </Link>
        </li>
      </ul>
      <hr />
      <div className="d-flex justify-content-end">
        <button className="btn btn-info">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
