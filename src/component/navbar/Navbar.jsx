import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import logo from "../../assets/logo.png"
export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-md gray500-bg py-3 fixed-top">
        <div className="container-fluid container-xl ">
          <NavLink
            className="d-flex justify-content-between align-items-center gap-3"
            to="/"
          >
            <div className="navbar-brand h-48 w-48">
              <img
                src={logo}
                alt="adasa logo"
                className="w-100 h-100 "
              />
            </div>

            <div>
              <span className="navbar-brand " to="/">
                عدسة
              </span>
              <span className="d-none fw-normal text-xs orange200-text md-d-block">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </NavLink>

          {/* links in web view*/}

          <div className="navbar-nav d-none d-md-flex align-items-center gap-3">
            <NavLink className="nav-link web" to="/">
              الرئيسية
            </NavLink>
            <NavLink className="nav-link web" to="blog">
              المدونة
            </NavLink>
            <NavLink className="nav-link web" to="about">
              من نحن
            </NavLink>
          </div>

          <div className="d-none d-md-flex gap-4 justify-content-between align-items-center">
            <i className="fa-solid fa-magnifying-glass"></i>
            <Button
              direct={"blog"}
              text={"ابدأ القراءة"}
              shape={"pill"}
              size={"md"}
              color={"orangeGradient4"}
            />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* links in mobile view */}
        </div>
        <div className=" collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav mobile md-d-none">
            <NavLink className="nav-link " aria-current="page" to="/">
              الرئيسية
            </NavLink>
            <NavLink className="nav-link " aria-current="page" to="blog">
              المدونة
            </NavLink>
            <NavLink className="nav-link " aria-current="page" to="about">
              من نحن
            </NavLink>
            <Button
              direct={"blog"}
              text={"ابدأ القراءة"}
              shape={"pill"}
              size={"md"}
              color={"orangeGradient4"}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
