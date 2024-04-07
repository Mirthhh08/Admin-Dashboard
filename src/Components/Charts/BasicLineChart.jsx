import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          curve: "natural",
          data: [2, 1.5, 2, 3.5, 7.5, 4],
          label: "men",
        },
        {
          curve: "natural",
          data: [1, 2.5, 4, 3.5, 2.5, 9],
          label: "woman",
        },
        {
          curve: "natural",
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          label: "kids",
        },
      ]}
      width={500}
      height={300}
    />
  );
}
