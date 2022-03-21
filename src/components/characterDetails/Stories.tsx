import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import CharacterService from "../../services/character";
import { Grid } from "@mui/material";
import CharacterDetailsContent from "./Content";
import ContentLoader from "./ContentLoader";
import { useIsLoading } from "../../utils/hooks/useIsLoading";

const CharacterDetailsStories = () => {
  const { id } = useParams();
  const { isLoading, loadingHandler } = useIsLoading();

  const [stories, setStories] = React.useState<any[]>([]);

  const getCharacterStories = async () => {
    if (id) {
      try {
        loadingHandler(true);
        const data = await CharacterService.getCharacterSeries({ id });
        setStories(data);
        loadingHandler(false);
      } catch (e) {
        loadingHandler(false);
        console.log("getCharacterStories -> e", e);
      }
    }
  };

  useEffect(() => {
    getCharacterStories();
  }, []);
  return (
    <Grid container spacing={2}>
      {stories.map((story, index) => (
        <CharacterDetailsContent content={story} key={index + "_story_item"} />
      ))}
      {isLoading ? <ContentLoader /> : null}
    </Grid>
  );
};
export default CharacterDetailsStories;
