import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NotFoundView = () => {
  return (
    <Container className={"Root__top-container"}>
      <Box component="main" sx={{ flexGrow: 1 }} className={"Root__main-view"}>
        <Typography variant={"h5"}>
          Oops! Nothing, except a bad news for you.
        </Typography>
        <Typography variant={"subtitle2"}>
          The page you are looking for does not exist
        </Typography>
        <NavLink to={"/"}>
          <Button variant={"contained"} color={"primary"}>
            Back
          </Button>
        </NavLink>
      </Box>
    </Container>
  );
};
export default NotFoundView;
