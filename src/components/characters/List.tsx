import React, { useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import CharactersListItem from "./ListItem";
import CharactersService from "../../services/characters";
import { Character } from "../../model/character";
import { useIsLoading } from "../../utils/hooks/useIsLoading";
import CharactersListItemLoader from "./Loader";
import usePagination from "../../utils/hooks/usePagination";

const CharactersList = () => {
  const { isLoading, loadingHandler } = useIsLoading();
  const { page, totalPages, handlePagination, handleTotal } =
    usePagination();

  const [characters, setCharacters] = React.useState<Character[]>([]);

  const getCharacters = async () => {
    try {
      loadingHandler(true);
      const data = await CharactersService.getCharacters({ page });
      setCharacters(data.items);
      handleTotal(data);
      loadingHandler(false);
    } catch (e) {
      loadingHandler(false);
      console.log("getCharacters -> e", e);
    }
  };
  useEffect(() => {
    getCharacters();
  }, [page]);
  return (
    <Grid container spacing={2}>
      {characters.map((character, index) => (
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          key={index + "_characters_list"}
        >
          {isLoading ? (
            <CharactersListItemLoader />
          ) : (
            <CharactersListItem character={character} />
          )}
        </Grid>
      ))}
      {totalPages === 1 ? null : (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePagination}
          shape="rounded"
        />
      )}
    </Grid>
  );
};

export default CharactersList;
