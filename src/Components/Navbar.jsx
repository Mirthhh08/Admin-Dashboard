import React, { useEffect } from "react";
import { useContext } from "react";
import { StateContext } from "../Context/StateContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import Language from "./Langauge";
import { useTranslation } from "react-i18next";
// import UserProfile from "./UserProfile";
// import Notification from "./Notification";
import home_image_2 from "../assets/home_image_2.jpeg";
const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    setDisplay,
    setScreenSize,
    screenSize,
    isClicked,
    handleClick,
  } = useContext(StateContext);

  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const Navbutton = ({ title, customfunc, icon, color, dotcolor }) => {
    return (
      <div>
        <button
          type="button"
          onClick={customfunc}
          style={{ color }}
          className="relative text-2xl rounded-full hover:bg-gray-200"
        >
          <span
            style={{ background: dotcolor }}
            className="absolute inline-flex top-1 right-1 h-2 w-2 rounded-full"
          />
          {icon}
        </button>
      </div>
    );
  };
  return (
    <div className="flex flex-row py-2 px-4 items-center mt-2 w-[100%]  relative">
      <div className=" ml-2">
        {!activeMenu && (
          <Navbutton
            title="Menu"
            customfunc={() => setActiveMenu((prev) => !prev)}
            icon={<RxHamburgerMenu />}
            color={currentColor}
          />
        )}
      </div>

      <div className="flex flex-row ml-auto gap-2 mr-4">
        <Navbutton
          title="Menu"
          customfunc={() => handleClick("language")}
          icon={<CiGlobe />}
          color={currentColor}
        />
        <Navbutton
          title="Menu"
          // customfunc={() => handleClick("notification")}
          icon={<IoMdNotificationsOutline />}
          color={currentColor}
          dotcolor="#03c9d7"
        />

        <div
          className="flex gap-2  justify-start hover:cursor-pointer"
          // onClick={() => {
          //   localStorage.removeItem("auth-token");
          //   setDisplay(false);
          // }}
        >
          <img
            src={home_image_2}
            alt="profile"
            className="h-6 w-6  rounded-full"
          />
          <p>
            <span className="text-gray-400 text-sm">
              {t("Hi", { appName: "App for Translations" })},
            </span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-sm">Admin</span>
          </p>
          <MdOutlineKeyboardArrowDown className="text-sm text-gray-400 mt-1" />
        </div>
      </div>

      {isClicked.language && <Language />}
    </div>
  );
};

export default Navbar;
