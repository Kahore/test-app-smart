import React from "react";
import CharactersList from "../components/characters/List";
import { AppBar, Toolbar } from "@mui/material";
import TabsGeneric from "../components/custom/TabsGeneric";
import useTabs from "../utils/hooks/useTabs";
import useQuery from "../utils/hooks/useQuery";

const CharactersView = () => {
  const { value, handleValue } = useTabs();
  const { query, handleQuery } = useQuery();

  return (
    <>
      <AppBar
        position="relative"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        className={"Root__top-bar "}
      >
        <Toolbar sx={{ ml: 2 }}>
          <TabsGeneric
            value={value}
            onSearch={handleQuery}
            onClearSearch={handleQuery}
            onSetValue={handleValue}
            tabs={[{ label: "Сharacters" }]}
          />
        </Toolbar>
      </AppBar>
      <CharactersList query={query} />
    </>
  );
};
export default CharactersView;
