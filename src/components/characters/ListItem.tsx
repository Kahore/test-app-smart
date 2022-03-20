import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Character } from "../../model/character";
import { NavLink } from "react-router-dom";

const CharactersListItem: React.FC<{ character: Character }> = ({
  character,
}) => {
  return (
    <NavLink to={`/character/${character.id}`}>
      <Card sx={{ maxWidth: 345, height: "100%" }}>
        <CardHeader
          title={character.name}
          subheader={`${character.series.available} series, ${character.comics.available} comics, ${character.stories.available} stories`}
        />
        <CardMedia
          component="img"
          height="194"
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {character.description === ""
              ? `The character's description should be there. But our data provider is too lazy to write something here.`
              : character.description}
          </Typography>
        </CardContent>
      </Card>
    </NavLink>
  );
};
export default CharactersListItem;
