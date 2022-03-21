import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Input } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Search: React.FC<{
  onSearch(query: string): void;
  onClearSearch?(query: undefined): void;
  dialog?: boolean;
}> = ({ onSearch, onClearSearch, dialog }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [query, setQuery] = React.useState<string>("");

  const handleSearch = () => {
    onSearch(query);
  };

  const toggleOpen = () => {
    if (typeof onClearSearch !== "undefined") {
      onClearSearch(undefined);
    }

    setIsOpen(!isOpen);
  };
  const handlePress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Box
        sx={dialog ? { pt: "10px" } : undefined}
        style={{
          paddingRight: "12px",
        }}
      >
        <SearchIcon onClick={toggleOpen} />
      </Box>
      {isOpen ? (
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            top: 0,
            zIndex: 100,
            left: 0,
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              height: "72px",
              display: "flex",
              alignItems: "center",
              background: "#F5DA6D",
              padding: "0 12px",
            }}
          >
            <SearchIcon />
            <Input
              autoFocus
              onKeyPress={handlePress}
              placeholder={"Search"}
              fullWidth
              onChange={(event) => setQuery(event.target.value)}
              style={{ border: "none", background: "transparent" }}
            />
            <IconButton
              aria-label="close"
              onClick={toggleOpen}
              style={{
                background: "#A9A9A0",
                width: "24px",
                height: " 24px",
                margin: "8px 12px 24px 12px",
                color: "white",
              }}
              sx={{
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon style={{ width: " 0.8em" }} />
            </IconButton>
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Box>
      ) : null}
    </>
  );
};
export default Search;
