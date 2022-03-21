import React from "react";
import { Grid, Skeleton } from "@mui/material";

const ContentLoader = () => {
  return (
    <Grid item xs={12} sm={3} md={4}>
      <Skeleton variant="rectangular" width={216} height={140} />
      <Skeleton variant="text" />
    </Grid>
  );
};
export default ContentLoader;
