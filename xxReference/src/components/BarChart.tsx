import React from "react";
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar"; // Correct import path
import { tokens } from "../Page/theme";
import { Bar } from "react-chartjs-2";

interface BarChartProps {
  isDashboard?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Sample data
  const data = [
    { country: "USA", "hot dog": 25, burger: 30, sandwich: 45, kebab: 20, fries: 35, donut: 15 },
    { country: "UK", "hot dog": 20, burger: 25, sandwich: 35, kebab: 15, fries: 30, donut: 10 },
    { country: "France", "hot dog": 15, burger: 20, sandwich: 25, kebab: 10, fries: 20, donut: 5 },
    // Add more data entries as needed
  ];

  return (
    <ResponsiveBar
      data={data} // Pass the data array here
      theme={{
        // Theme settings
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        // Defs settings
      ]}
      borderColor={{
        from: "color",
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        // Legends settings
      ]}
      role="application"
      barAriaLabel={(e: any) => {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
