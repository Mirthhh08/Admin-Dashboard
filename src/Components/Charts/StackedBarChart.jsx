import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTranslation } from "react-i18next";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
];

export default function StackedBarChart() {
  const { t } = useTranslation();
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        {
          data: pData,
          label: `${t("Revenue", { appName: "App for Translations" })}`,
          id: "pvId",
          stack: "total",
        },
        { data: uData, label: `${t("Expense", { appName: "App for Translations" })}`, id: "uvId", stack: "total" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
