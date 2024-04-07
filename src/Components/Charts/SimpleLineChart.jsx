import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 100, 908, 2800, 1800, 4100];
const yData = [400, 398, 800, 3108, 4100, 3800, 5300];
const xLabels = [
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];

export default function SimpleLineChart() {
  return (
    <LineChart
      width={600}
      height={400}
      series={[
        { data: pData, label: "men" ,},
        { data: uData, label: "women" },
        { data: yData, label: "kids" },
      ]}
      
      xAxis={[{ scaleType: "point", data: xLabels  }]}
    
    />
  );
}
