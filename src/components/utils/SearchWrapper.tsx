import React from "react";
import { Box } from "@mui/material";

const SearchWrapper: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        minWidth: "240px",
      }}
    >
      {children}
    </Box>
  );
};
export default SearchWrapper;
