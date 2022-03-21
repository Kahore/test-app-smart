import { Components } from "@mui/material/styles/components";

export const MuiTab: Components["MuiTab"] = {
  styleOverrides: {
    root: {
      padding: "16px 0",
      fontWeight: 500,
      fontSize: "20px",
      minWidth: "unset",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "190px",
      alignItems: "baseline",
      lineHeight: "40px",
      marginRight: "36px",
      textTransform: "inherit",
      whiteSpace: "nowrap",
      //zIndex: 50,
      "&.Mui-selected": {
        color: "#332B15",
      },
    },
  },
};
