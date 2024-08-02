import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../Page/theme";

interface ProgressCircleProps {
  progress?: number; // Change to number type
  size?: number; // Change to number type
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress = 0.75, // Set default value to number
  size = 40, // Set default value to number
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
