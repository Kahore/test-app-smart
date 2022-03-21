import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import CharacterService from "../../services/character";
import { Grid } from "@mui/material";
import CharacterDetailsContent from "./Content";
import ContentLoader from "./ContentLoader";
import { useIsLoading } from "../../utils/hooks/useIsLoading";

const CharacterDetailsEvents = () => {
  const { id } = useParams();
  const { isLoading, loadingHandler } = useIsLoading();

  const [events, setEvents] = React.useState<any[]>([]);

  const getCharacterEvents = async () => {
    if (id) {
      try {
        loadingHandler(true);
        const data = await CharacterService.getCharacterEvents({ id });
        setEvents(data);
        loadingHandler(false);
      } catch (e) {
        console.log("getCharacterEvents -> e", e);
        loadingHandler(false);
      }
    }
  };

  useEffect(() => {
    getCharacterEvents();
  }, []);
  return (
    <Grid container spacing={2}>
      {events.map((event, index) => (
        <CharacterDetailsContent content={event} key={index + "_event_item"} />
      ))}
      {isLoading ? <ContentLoader /> : null}
    </Grid>
  );
};
export default CharacterDetailsEvents;
