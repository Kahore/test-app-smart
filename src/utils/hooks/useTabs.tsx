import React from "react";

const useTabs = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleValue = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return {
    value,
    handleValue,
  };
};
export default useTabs;
