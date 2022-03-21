import React from "react";
import Box from "@mui/material/Box";

const TabsWrapper: React.FC = ({ children }) => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}
        style={{ height: "72px" }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default TabsWrapper;
