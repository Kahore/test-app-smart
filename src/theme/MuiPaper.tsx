import { Components } from "@mui/material/styles/components";

export const MuiPaper: Components["MuiPaper"] = {
  styleOverrides: {
    root: {
      "&.MuiCard-root": {
        "&:hover": {
          backgroundColor: "#F4F3F0",
        },
      },
    },
  },
};
