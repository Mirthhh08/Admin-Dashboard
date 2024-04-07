import React from "react";
import BasicLineChart from "./Charts/BasicLineChart";
import BasicPieChart from "./Charts/BasicPieChart";

const RevenueUpdates = () => {
  return (
    <div className="flex justify-center gap-10  md:flex-nowrap flex-wrap n mt-10">
      <div className="bg-white gap-4 rounded-2xl flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition duration-300">
        <p className="font-medium  ">Category Wise Sales</p>
        <BasicLineChart />
      </div>
      <div className="bg-white gap-4 rounded-2xl flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition duration-300">
        <p className="font-medium">Most sold Category</p>
        <BasicPieChart />
      </div>
    </div>
  );
};

export default RevenueUpdates;
