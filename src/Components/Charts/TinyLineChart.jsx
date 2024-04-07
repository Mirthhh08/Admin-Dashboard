import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

export default function TinyLineChart() {
  const [showHighlight, setShowHighlight] = React.useState(true);
  const [showTooltip, setShowTooltip] = React.useState(true);

  const handleHighlightChange = (event) => {
    setShowHighlight(event.target.checked);
  };

  const handleTooltipChange = (event) => {
    setShowTooltip(event.target.checked);
  };

  return (
    <Stack direction="column" sx={{ width: "100%" }}>
      
      <Stack direction="row" sx={{ width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <SparkLineChart
            data={[1, 3, 3, 5, 4, 6]}
            height={200}
            width={200}
            showHighlight={showHighlight}
            showTooltip={showTooltip}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
