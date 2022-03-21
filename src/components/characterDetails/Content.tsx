import React from "react";

import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const CharacterDetailsContent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <Grid item xs={12} sm={3} md={4}>
      <Card sx={{ maxWidth: 345, height: "100%" }}>
        <CardContent>
          <CardMedia
            component="img"
            height="140"
            image={`${content.thumbnail.path}.${content.thumbnail.extension}`}
            alt="comics img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {content.title}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CharacterDetailsContent;
