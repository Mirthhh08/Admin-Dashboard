import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import { GoHome, GoGraph } from "react-icons/go";
// import { IoMdSettings, IoCartOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdInsights } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { StateContext } from "../Context/StateContext";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect } from "react";
import { CiShop } from "react-icons/ci";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useContext(StateContext);

  const { t } = useTranslation();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const shop = {
    title: "Visit Store",
    logo: <CiShop />,
    link: "http://localhost:5174/",
  };
  const sidebaritems = [
    {
      title: "Dashboard",
      logo: <GoHome />,
      link: "/dashboard",
    },
    {
      title: "Add Product",
      logo: <IoCartOutline />,
      link: "/addproduct",
    },
    {
      title: "People & Teams",
      logo: <BsMicrosoftTeams />,
      link: "/teams",
    },
    {
      title: "Product Insights",
      logo: <MdInsights />,
      link: "/productlist",
    },
    {
      title: "Insights",
      logo: <GoGraph />,
      link: "/insights",
    },
  ];

  return (
    <div className="w-[280px] shadow-xl h-screen overflow-hidden =md:hover:overflow-auto   ">
      <div className="mt-8 pl-[36px] flex gap-8 items-center">
        <p className="text-lg font-extrabold font-Montserrat dark:text-white tracking-wider">
          RetialRealm
        </p>

        <button
          type="button"
          onClick={() => setActiveMenu(!activeMenu)}
          style={{ color: currentColor }}
          className="text-xl rounded-full hover:bg-light-gray block "
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <a href={shop.link} target="_blank">
          <div className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2">
            <div className="text-2xl pl-[36px]">{shop.logo}</div>
            <p className=" capitalize">
              {t(shop.title, { appName: "App for Translations" })}
            </p>
          </div>
        </a>
        {sidebaritems.map((item, id) => {
          return (
            <NavLink
              to={item.link}
              key={item.title}
              onClick={handleCloseSideBar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="text-2xl pl-[36px]">{item.logo}</div>
              <p className=" capitalize">
                {t(item.title, { appName: "App for Translations" })}
              </p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
