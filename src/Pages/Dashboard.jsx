import React from "react";
import Dashboard_Cards from "../Components/Dashboard_Cards";
import RevenueUpdates from "../Components/RevenueUpdates";
import { GoDotFill } from "react-icons/go";
import TinyLineChart from "../Components/Charts/TinyLineChart";
import { useContext } from "react";
import { StateContext } from "../Context/StateContext";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import BasicSparkLineCustomization from "../Components/Charts/TinyLineChart";
import StackedBarChart from "../Components/Charts/StackedBarChart";
import TinyBarChart from "../Components/Charts/TinyBarCharts";
import BasicPieChart from "../Components/Charts/BasicPieChart";
import { IoIosMore } from "react-icons/io";
import SimpleLineChart from "../Components/Charts/SimpleLineChart";
import Banner from "../Components/Dashboard_Components/Banner";
import Revenue from "../Components/Dashboard_Components/Revenue";
import Earnings from "../Components/Dashboard_Components/Earnings";

import { useTranslation } from "react-i18next";
const Dashboard = () => {
  const { t } = useTranslation();
  const recentTransactions = [
    {
      customerName: "Mohit Rawal",
      transactionId: "jdsfjsd324234_dfdf1",
      amount: 4000,
    },
    {
      customerName: "Alice Johnson",
      transactionId: "asdjf8934234_dfdf2",
      amount: 2500,
    },
    {
      customerName: "John Doe",
      transactionId: "qweoir234234_dfdf3",
      amount: 6000,
    },
    {
      customerName: "Emily Smith",
      transactionId: "sdfjksdfj324234_dfdf4",
      amount: 3500,
    },
    {
      customerName: "David Brown",
      transactionId: "sdflkjsdf9324234_dfdf5",
      amount: 8000,
    },
    {
      customerName: "Sophia Lee",
      transactionId: "dfjksdfksd324234_dfdf6",
      amount: 7000,
    },
  ];

  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    screenSize,
  } = useContext(StateContext);

  return (
    <div
      className={` flex flex-col mt-24 ${activeMenu ? "pl-[22.2vh]" : "pl-0"}`}
    >
      <Banner />

      <div>
        <Dashboard_Cards />
      </div>

      <div className={` flex flex-wrap justify-center items-center `}>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl   ">
          <div className="flex  justify-evenly">
            <p className="font-semibold text-xl">
              {t("Revenue Updates", { appName: "App for Translations" })}
            </p>
            <div className="flex  items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>{t("Expense", { appName: "App for Translations" })}</span>
              </p>
              <p className="flex items-center gap-2  text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>{t("Budget", { appName: "App for Translations" })}</span>
              </p>
            </div>
          </div>

          <Revenue />
        </div>

        <div className="flex flex-col ">
          <Earnings />
        </div>
      </div>

      <div className="flex gap-6  md:ml-12 md:mb-12 flex-wrap items-center justify-center pt-3 lg:pt-0 ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl shadow-lg">
          <p className="text-xl font-semibold">
            {t("Recent Transactions", { appName: "App for Translations" })}
          </p>
          <div className="mt-10 w-72 md:w-[400px]">
            {recentTransactions.map((item) => {
              return (
                <div key={item.title} className="flex justify-between mt-4">
                  <div className="flex gap-4">
                    <div>
                      <p className="text-md font-semibold">
                        {item.customerName}
                      </p>
                      <p className="text-sm text-gray-400">
                        {item.transactionId}
                      </p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{"₹" + item.amount}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <button
              style={{ backgroundColor: currentColor }}
              className="p-2 rounded-lg"
            >
              <p className="text-white text-sm">
                {t("View All Transactions", {
                  appName: "App for Translations",
                })}
              </p>
            </button>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-[700px] lg:mr-8">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">
              {t("Sales Overview", { appName: "App for Translations" })}
            </p>
          </div>
          <div className="md:w-full overflow-auto">
            <SimpleLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
