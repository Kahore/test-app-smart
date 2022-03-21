import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { CharacterSubDetail } from "../../model/character";

const CounterCard: React.FC<{ details: CharacterSubDetail; text: string }> = ({
  details,
  text,
}) => {
  return (
    <>
      {details.returned === 0 ? null : (
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ display: "flex", height: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {details.available}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {text}
                </Typography>
                <Typography
                  variant={"subtitle2"}
                  color="text.secondary"
                  component="div"
                >
                  {details.items[0].name +
                    (details.items.length !== 1 ? " and other..." : "")}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      )}
    </>
  );
};
export default CounterCard;
