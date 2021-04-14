import React from "react";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import Typography from "@material-ui/core/Typography";

export const Logo = () => (
  <>
    <MenuBookTwoToneIcon fontSize="large" />
    <Typography variant="h4" component="h3">
      Books read in 2021
    </Typography>
  </>
);
