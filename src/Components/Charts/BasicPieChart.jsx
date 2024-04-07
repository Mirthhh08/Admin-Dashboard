import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPieChart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "men" },
            { id: 1, value: 15, label: "women" },
            { id: 2, value: 20, label: "kids" },
          ],

          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      width={300}
      height={150}
    />
  );
}
