import React, { useState } from "react";
import {
  Typography,
  BottomNavigationAction,
  BottomNavigation,
  Container,
  Link,
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
    <Container className={classes.footerWrapper}>
      <Typography variant="h5" className={classes.footerText}>
        © Aleksandr Hrytsenko
      </Typography>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.footerNavigation}
      >
        <Link
          className={classes.links}
          href="https://www.facebook.com/grytsalex"
        >
          <BottomNavigationAction
            value="facebook"
            icon={<FacebookIcon fontSize="large" />}
            className={classes.aboutIcons}
          />
        </Link>
        <Link
          className={classes.links}
          href="https://www.linkedin.com/in/aleksandrgrytsenko1996/"
        >
          <BottomNavigationAction
            value="linkedin"
            icon={<LinkedInIcon fontSize="large" />}
            className={classes.aboutIcons}
          />
        </Link>
        <Link
          className={classes.links}
          href="https://github.com/grytsalex"
        >
          <BottomNavigationAction
            value="github"
            icon={<GitHubIcon fontSize="large" />}
            className={classes.aboutIcons}
          />
        </Link>
        <Link
          className={classes.links}
          href="https://twitter.com/alkatras0704"
        >
          <BottomNavigationAction
            value="twitter"
            icon={<TwitterIcon fontSize="large" />}
            className={classes.aboutIcons}
          />
        </Link>
      </BottomNavigation>
    </Container>
  );
};
