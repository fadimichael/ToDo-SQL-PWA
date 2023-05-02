import "./NavbarBottom.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../navbar-icons/HomeIcon";
import CalendarIcon from "../navbar-icons/CalendarIcon";
import AddIcon from "../navbar-icons/AddIcon";
import SettingsIcon from "../navbar-icons/SettingsIcon";
import ProfileIcon from "../navbar-icons/ProfileIcons";
const NavbarBottom = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const tabBar = document.querySelector(".tab-bar");
    const tabItems = document.querySelectorAll(".tab-bar .tab-item");
    const tabIndicator = document.querySelector(".tab-indicator");

    const distance = Math.floor(
      tabBar.querySelector(".active").offsetLeft - 30
    );
    tabIndicator.style.transform = `translateX(${distance}px)`;

    tabItems.forEach((item, index) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const distance = Math.floor(item.offsetLeft - 36.11);
        tabIndicator.style.transform = `translateX(${distance}px)`;
        setActiveTab(index);
      });
    });
  }, []);

  return (
    <div claclassNamess="phone-screen">
      <div className="view">
        <div className="tab-bar">
          <div className="tab-indicator">
            <div className="tab-indicator-left"></div>
            <div className="tab-indicator-right"></div>
          </div>
          <div className={`tab-item ${activeTab === 0 ? "active" : ""}`}>
            <NavLink to="/home" className="tab-item-inner">
              <HomeIcon />
            </NavLink>
          </div>
          <div className={`tab-item ${activeTab === 1 ? "active" : ""}`}>
            <NavLink to="/calendar" className="tab-item-inner">
              <CalendarIcon />
            </NavLink>
          </div>
          <div className={`tab-item ${activeTab === 2 ? "active" : ""}`}>
            <NavLink to="/add" className="tab-item-inner">
              <AddIcon />
            </NavLink>
          </div>
          <div className={`tab-item ${activeTab === 3 ? "active" : ""}`}>
            <NavLink to="/settings" className="tab-item-inner">
              <SettingsIcon />
            </NavLink>
          </div>
          <div className={`tab-item ${activeTab === 4 ? "active" : ""}`}>
            <NavLink to="/profile" className="tab-item-inner">
              <ProfileIcon />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
