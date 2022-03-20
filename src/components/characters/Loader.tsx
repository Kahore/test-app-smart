import { Skeleton } from "@mui/material";
import React from "react";

const CharactersListItemLoader = () => {
  return (
    <>
      <Skeleton variant="text" sx={{ pt: "30px" }} />
      <Skeleton variant="text" sx={{ mb: "15px" }} />
      <Skeleton variant="rectangular" width={216} height={194} />
      <Skeleton variant="rectangular" width={216} height={194} />
    </>
  );
};
export default CharactersListItemLoader;
