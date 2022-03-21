import React, { useEffect } from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import TabPanel from "../components/custom/TabPanel";
import useTabs from "../utils/hooks/useTabs";
import CharacterDetailsOverview from "../components/characterDetails/Overview";
import { Character } from "../model/character";
import CharacterService from "../services/character";
import { useParams } from "react-router-dom";
import CharacterDetailsComics from "../components/characterDetails/Comics";
import CharacterDetailsEvents from "../components/characterDetails/Events";
import CharacterDetailsStories from "../components/characterDetails/Stories";
import CharacterDetailsSeries from "../components/characterDetails/Series";
import TabLoader from "../components/utils/TabLoader";
import { useIsLoading } from "../utils/hooks/useIsLoading";
import TabsGeneric from "../components/custom/TabsGeneric";

const CharacterDetailsView = () => {
  const [character, setCharacter] = React.useState<Character | null>(null);
  const { value, handleValue } = useTabs();
  const { isLoading, loadingHandler } = useIsLoading();
  const { id } = useParams();

  const getCharacter = async () => {
    if (id) {
      try {
        loadingHandler(true);
        const data = await CharacterService.getCharacter({ id });
        setCharacter(data);
        loadingHandler(false);
        console.log("getCharacter -> data", data);
      } catch (e) {
        console.log("getCharacter -> e", e);
        loadingHandler(false);
      }
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <>
      <AppBar
        position="relative"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        className={"Root__top-bar "}
      >
        <Toolbar sx={{ ml: 2 }}>
          {isLoading ? (
            <TabLoader />
          ) : (
            <TabsGeneric
              value={value}
              onSetValue={handleValue}
              tabs={[
                { label: character ? character.name : "" },
                {
                  label: character ? `Comics ${character.comics.returned}` : "",
                },
                {
                  label: character
                    ? `Stories ${character.stories.returned}`
                    : "",
                },
                {
                  label: character ? `Events ${character.events.returned}` : "",
                },
                {
                  label: character ? `Series ${character.series.returned}` : "",
                },
              ]}
            />
          )}
        </Toolbar>
      </AppBar>
      <Container className={"Root__top-container"}>
        <Box
          component="main"
          sx={{ flexGrow: 1 }}
          className={"Root__main-view"}
        >
          <TabPanel value={value} index={0}>
            {character ? (
              <CharacterDetailsOverview character={character} />
            ) : null}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CharacterDetailsComics />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CharacterDetailsStories />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <CharacterDetailsEvents />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <CharacterDetailsSeries />
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};
export default CharacterDetailsView;
