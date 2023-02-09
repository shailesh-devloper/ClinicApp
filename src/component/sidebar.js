import React from "react";
import { MdDashboard, MdAdminPanelSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsFillFileLock2Fill } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <aside>
        <div className="sidebar-container">
          <img src="./img/home-img.png" alt="" />
          <nav>
            <ul>
              <li>
                <NavLink to="/dashboard">
                  <span>
                    <MdDashboard />
                  </span>
                  DashBoard
                </NavLink>
              </li>
              <li>
                <NavLink to="/appoinment">
                  <span>
                    <RiContactsBook2Fill />
                  </span>
                  Appoinment
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <span>
                    <CgProfile />
                  </span>
                  Doctor
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile">
                  <span>
                    <MdAdminPanelSettings />
                  </span>
                  Profile Setting
                </NavLink>
              </li>
              <li>
                <NavLink to="/password">
                  <span>
                    <BsFillFileLock2Fill />
                  </span>
                  Password Change
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
