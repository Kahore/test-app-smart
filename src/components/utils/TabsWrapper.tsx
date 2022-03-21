import React from "react";
import Box from "@mui/material/Box";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  test: {
    padding: "0 !important",
  },
}));

const TabsWrapper: React.FC = ({ children }) => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("lg"));
  const classes = useStyles();
  return (
    <Container className={matchesXs ? classes.test : ""}>
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
