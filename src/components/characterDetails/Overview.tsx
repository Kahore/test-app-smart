import React from "react";
import { Character } from "../../model/character";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import CounterCard from "./CounterCard";

const CharacterDetailsOverview: React.FC<{ character: Character }> = ({
  character,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ display: "flex", height: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component={"div"} variant={"h5"}>
                {character.name}
              </Typography>
              <Box component={"div"} sx={{ display: "grid" }}>
                {character.urls.map((url, index) => (
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    key={index + "_character_details_url"}
                  >
                    <a
                      href={url.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="marvel"
                    >
                      {url.type}
                    </a>
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt="Char img"
          />
        </Card>
      </Grid>
      {character.description !== "" ? (
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {character.description}
          </Typography>
        </Grid>
      ) : null}
      <Grid container item xs={12} spacing={3}>
        <CounterCard details={character.comics} text={"Comics"} />
        <CounterCard details={character.stories} text={"Stories"} />
        <CounterCard details={character.events} text={"Events"} />
        <CounterCard details={character.series} text={"Series"} />
      </Grid>
    </Grid>
  );
};
export default CharacterDetailsOverview;
