import React from "react";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StateContext } from "../../Context/StateContext";
import StackedBarChart from "../Charts/StackedBarChart";
import TinyLineChart from "../Charts/TinyLineChart";
const Revenue = () => {
  const { currentColor } = useContext(StateContext);
  const { t } = useTranslation();
  return (
    <div className="mt-10 flex flex-row gap-10 flex-wrap justify-center">
      <div className=" border-r-1 border-color pl-4 pr-10">
        <div>
          <p>
            <span className="text-3xl font-semibold">₹93,438</span>
            <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
              23%
            </span>
          </p>
          <p className="text-gray-500 mt-1">{t("Budget", { appName: "App for Translations" })}</p>
        </div>
        <div className="mt-8">
          <p className="text-3xl font-semibold">₹48,487</p>

          <p className="text-gray-500 mt-1">{t("Expense", { appName: "App for Translations" })}</p>
        </div>

        <div className="mt-5">
          <TinyLineChart />
        </div>
        <div className="mt-10">
          <button
            style={{ backgroundColor: currentColor }}
            className="text-white rounded-md p-2"
          >
            {t("Download Report", { appName: "App for Translations" })}
          </button>
        </div>
      </div>
      <div>
        <StackedBarChart />
      </div>
    </div>
  );
};

export default Revenue;
