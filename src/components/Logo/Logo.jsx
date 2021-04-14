import React from "react";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import { Typography, Box } from "@material-ui/core";
import { useStyles } from "../../styles"

export const Logo = () => {
  const classes = useStyles();

  return (
    <>
      <Box mr={2}>
        <MenuBookTwoToneIcon className={classes.logos}/>
      </Box>
      <Typography variant="h3" className={classes.title}>Books read in 2021</Typography>
    </>
  );
};
