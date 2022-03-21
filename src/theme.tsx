import { createTheme } from "@mui/material";
import { MuiContainer } from "./theme/MuiContainer";
import { MuiPagination } from "./theme/MuiPagination";
import { MuiTab } from "./theme/MuiTab";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#F5DA6D",
    },
    secondary: {
      main: "#E6E6E6",
    },
    success: {
      main: "#449327",
    },
    error: {
      main: "#E04D36",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiContainer,
    MuiTab,
    MuiPagination,
  },
});
export default appTheme;
