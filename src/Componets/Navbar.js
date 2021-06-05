import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container_fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="navbar-brand" to="#">
                Appliance Screw
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">[]</span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div className="dropdown">
                      <a
                        activeClassName="menu_active "
                        className="nav-link dropbtn"
                      >
                        Services
                      </a>
                      <div class="dropdown-content">
                        <a href="#">Air Conditioner</a>
                        <a href="#">Freez</a>
                        <a href="#">Television</a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <form>
        <input
          type="text"
          title="search"
          className="Search"
          placeholder="type location or appliance name"
         
        />
        <button type="submit" value=""  className="SearchIcon">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </>
  );
};
export default Navbar;
