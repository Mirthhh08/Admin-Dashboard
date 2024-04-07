import React from "react";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StateContext } from "../../Context/StateContext";
import BasicPieChart from "../Charts/BasicPieChart";
import TinyBarChart from "../Charts/TinyBarCharts";
const Earnings = () => {
  const { currentColor } = useContext(StateContext);
  const { t } = useTranslation();
  return (
    <>
      <div
        className=" rounded-2xl md:w-400 p-4 shadow-lg   dark:bg-main-dark-bg"
        style={{ backgroundColor: currentColor }}
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center gap-4">
            <p className="font-semibold text-white text-2xl">{t("Earnings", { appName: "App for Translations" })}</p>
            <div>
              <p className="text-2xl text-white font-semibold mt-8">
                ₹63,448.78
              </p>
              <p className="text-gray-200">{t("Monthly Revenue", { appName: "App for Translations" })}</p>
            </div>
          </div>

          <div className="mt-4">
            <TinyBarChart />
          </div>
        </div>
      </div>
      <div
        className=" rounded-2xl md:w-400 p-4  mt-4 dark:bg-main-dark-bg"
        style={{ backgroundColor: currentColor }}
      >
        <div className="flex ">
          <div
            className="flex flex-col justify-center items-center Yearly Sales

"
          >
            <p className="text-2xl text-white font-bold">₹43,246</p>
            <p className="text-white">{t("Yearly Sales", { appName: "App for Translations" })}</p>
          </div>
          <div className="mb-2 w-[175px] overflow-hidden">
            <BasicPieChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Earnings;
