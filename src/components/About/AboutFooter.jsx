import React, { useState } from "react";
import {
  Typography,
  BottomNavigationAction,
  BottomNavigation,
  Container,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
  import LinkedInIcon from "@material-ui/icons/LinkedIn";
  import FacebookIcon from "@material-ui/icons/Facebook";
import { useStyles } from "../../styles";

export const AboutFooter = () => {
  const [value, setValue] = useState(null);
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h5">Text here...</Typography>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels={false}
        className={classes.footer}
      >
        <BottomNavigationAction
          value="facebook"
          label="Facebook"
          icon={<FacebookIcon />}
        />
        <BottomNavigationAction
          value="linkedin"
          label="LinkedIn"
          icon={<LinkedInIcon />}
        />
        <BottomNavigationAction
          value="github"
          label="GitHub"
          icon={<GitHubIcon />}
        />
        <BottomNavigationAction
          value="twitter"
          label="Twitter"
          icon={<TwitterIcon />}
        />
      </BottomNavigation>
    </Container>
  );
};
