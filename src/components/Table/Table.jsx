import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { useStyles } from "../../styles";

export const Table = ({ books }) => {
  const classes = useStyles();

  return (
    <Container className={classes.cards} maxWidth="md">
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardName}
                image="https://source.unsplash.com/random"
                title="Image Title"
              ></CardMedia>
              <CardContent>
                  
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
