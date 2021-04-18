import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../../styles";
import { StarRatings } from "./StarRatings";

export const Table = ({ books }) => {
  const classes = useStyles();

  return (
    <Container className={classes.cards}>
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image Title"
              ></CardMedia>
              <CardContent className={classes.cardContent}>
                <Typography variant="h5">
                  {book.name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {book.author}
                </Typography>
                <Typography>
                  Text
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                  View
                </Button>
              <StarRatings/>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
