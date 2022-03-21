import React from "react";
import TabsWrapper from "../utils/TabsWrapper";
import { Tab, Tabs } from "@mui/material";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const TabsGeneric: React.FC<{
  value: number;
  tabs: any[];
  onSetValue(event: React.SyntheticEvent, newValue: number): void;
}> = ({ value, onSetValue, tabs }) => {
  return (
    <TabsWrapper>
      <Tabs
        value={value}
        onChange={onSetValue}
        aria-label="tabs"
        style={{ height: "72px", width: "100%" }}
      >
        {tabs.map((tab, index) => (
          <Tab
            label={tab.label}
            {...a11yProps(index)}
            key={index + "_tab_" + tab.label}
          />
        ))}
      </Tabs>
    </TabsWrapper>
  );
};
export default TabsGeneric;
