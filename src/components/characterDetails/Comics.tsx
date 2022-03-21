import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import CharacterService from "../../services/character";
import { Grid } from "@mui/material";
import CharacterDetailsContent from "./Content";
import ContentLoader from "./ContentLoader";
import { useIsLoading } from "../../utils/hooks/useIsLoading";

const CharacterDetailsComics = () => {
  const { id } = useParams();
  const { isLoading, loadingHandler } = useIsLoading();

  const [comics, setComics] = React.useState<any[]>([]);

  const getCharacterComics = async () => {
    if (id) {
      try {
        loadingHandler(true);
        const data = await CharacterService.getCharacterComics({ id });
        setComics(data);
        loadingHandler(false);
      } catch (e) {
        console.log("getCharacterComics -> e", e);
        loadingHandler(false);
      }
    }
  };

  useEffect(() => {
    getCharacterComics();
  }, []);
  return (
    <Grid container spacing={2}>
      {comics.map((com, index) => (
        <CharacterDetailsContent content={com} key={index + "_comics_item"} />
      ))}
      {isLoading ? <ContentLoader /> : null}
    </Grid>
  );
};
export default CharacterDetailsComics;
