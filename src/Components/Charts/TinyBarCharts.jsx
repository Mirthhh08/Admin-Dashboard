import * as React from "react";
import { ChartContainer, BarPlot } from "@mui/x-charts";
import { useContext } from "react";
import { StateContext } from "../../Context/StateContext";
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function TinyBarChart() {
  const { currentColor } = useContext(StateContext);
  return (
    <ChartContainer
      width={300}
      height={200}
      series={[{ data: uData, label: "uv", type: "bar", color: `#ffffff` }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
      
    >
      <BarPlot />
    </ChartContainer>
  );
}
