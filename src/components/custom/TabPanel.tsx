import React from "react";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      component={"div"}
      hidden={value !== index}
      id={`tabpanel-${index}`}
      sx={{ height: "100%" }}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component={"div"} sx={{ height: "100%" }}>
          {children}
        </Box>
      )}
    </Box>
  );
};
export default TabPanel;
