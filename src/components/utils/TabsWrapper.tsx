import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const TabsWrapper: React.FC = ({ children }) => {
  return (
    <Container>
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}
          style={{ height: "72px" }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  );
};
export default TabsWrapper;
