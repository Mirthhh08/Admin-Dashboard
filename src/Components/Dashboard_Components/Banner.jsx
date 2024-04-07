import React from "react";
import { useEffect, useContext } from "react";
import { StateContext } from "../../Context/StateContext";
import { useTranslation } from "react-i18next";
const Banner = () => {
  const { t } = useTranslation();
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    screenSize,
    user,
  } = useContext(StateContext);

  return (
    <div
      style={{ backgroundColor: currentColor }}
      className={` p-2 overflow-hidden flex  justify-start items-center md:h-[250px] h-[200px] w-full md:p-[10vh]`}
    >
      <div className="p-4 md:pl-[15vh] text-white flex flex-col Md:pt-10 ">
        <div className="flex flex-col gap-3 tracking-wide">
          <p className="text-lg font-medium">
            <span className="font-semibold">{t("Dashboard", { appName: "App for Translations" })}</span> / {t("Overview", { appName: "App for Translations" })}
          </p>
          <p className="text-xl font-semibold break-words uppercase">
            {t("Welcome back,", { appName: "App for Translations" })}{" "}
            <span>Admin</span>
          </p>
          <p className="text-sm">
            {t("Banner Desc", { appName: "App for Translations" })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
