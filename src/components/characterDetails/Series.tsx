import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import CharacterService from "../../services/character";
import { Grid } from "@mui/material";
import CharacterDetailsContent from "./Content";
import ContentLoader from "./ContentLoader";
import { useIsLoading } from "../../utils/hooks/useIsLoading";

const CharacterDetailsSeries = () => {
  const { id } = useParams();
  const { isLoading, loadingHandler } = useIsLoading();

  const [series, setSeries] = React.useState<any[]>([]);

  const getCharacterSeries = async () => {
    if (id) {
      try {
        loadingHandler(true);
        const data = await CharacterService.getCharacterSeries({ id });
        setSeries(data);
        loadingHandler(false);
      } catch (e) {
        loadingHandler(false);
        console.log("getCharacterSeries -> e", e);
      }
    }
  };

  useEffect(() => {
    getCharacterSeries();
  }, []);
  return (
    <Grid container spacing={2}>
      {series.map((item, index) => (
        <CharacterDetailsContent content={item} key={index + "_series_item"} />
      ))}
      {isLoading ? <ContentLoader /> : null}
    </Grid>
  );
};
export default CharacterDetailsSeries;
