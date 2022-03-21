import React from "react";
import TabsWrapper from "../utils/TabsWrapper";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchWrapper from "../utils/SearchWrapper";
import Search from "../search/Search";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const TabsGeneric: React.FC<{
  value: number;
  tabs: any[];
  onSearch?(query: string): void;
  onClearSearch?(query: undefined): void;
  onSetValue(event: React.SyntheticEvent, newValue: number): void;
}> = ({ value, tabs, onSetValue, onSearch, onClearSearch }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMobileTab = (e: any, index: number) => {
    onSetValue(e, index);
    handleCloseNavMenu();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <TabsWrapper>
      <>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="mobile menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            textAlign="center"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {tabs[0].label}
          </Typography>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {tabs.map((tab, index) => (
              <MenuItem
                key={index + "_mobile_tab"}
                onClick={(e) => handleMobileTab(e, index)}
              >
                <Typography textAlign="center">{tab.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Tabs
          value={value}
          onChange={onSetValue}
          aria-label="tabs"
          sx={{
            height: "72px",
            width: "100%",
            display: { xs: "none", md: "flex" },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              label={tab.label}
              {...a11yProps(index)}
              key={index + "_tab_" + tab.label}
            />
          ))}
        </Tabs>
        {typeof onSearch !== "undefined" ? (
          <SearchWrapper>
            {typeof onSearch !== "undefined" ? (
              <Search onSearch={onSearch} onClearSearch={onClearSearch} />
            ) : null}
          </SearchWrapper>
        ) : null}
      </>
    </TabsWrapper>
  );
};
export default TabsGeneric;
