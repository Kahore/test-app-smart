import { Skeleton, Tab, Tabs } from "@mui/material";
import React from "react";
import TabsWrapper from "./TabsWrapper";

const TabLoader = () => {
  return (
    <TabsWrapper>
      <Tabs value={0} aria-label="tabs" sx={{ height: "72px", width: "100%" }}>
        <Tab
          disabled
          label={
            <Skeleton
              sx={{
                backgroundColor: "rgba(137, 139, 143, 0.72)",
                borderRadius: "10px",
                mt: 2,
              }}
              variant={"rectangular"}
              height={14}
              width={142}
            />
          }
        />
      </Tabs>
    </TabsWrapper>
  );
};
export default TabLoader;
