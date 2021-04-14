import React from "react";
import { useStyles } from "../../styles";
import { Paper, InputBase, Divider, IconButton }   from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const SearchField = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Book"
        type="text"
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
