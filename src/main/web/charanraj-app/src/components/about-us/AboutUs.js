import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "../../icons/ContactIcons";
import { ContactIconButton } from "../common/IconButtonWrapper";
import { AboutUsPaper, LinkA } from "./about-us.styles";
import { DeveloperImage } from "./DeveloperImage";

export const AboutUs = () => (
  <div>
    <Typography paragraph>About Us</Typography>
    <AboutUsPaper>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <DeveloperImage />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="h6">Dharmesh Patel</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                The Creator
                <br />
                Toronto, CA
                <br />
                <LinkA href="mailto:95dharmesh@gmail.com">
                  95dharmesh@gmail.com
                </LinkA>
              </Typography>
              <ContactIconButton href="https://www.linkedin.com/in/95dharmesh/">
                <LinkedinIcon />
              </ContactIconButton>
              <ContactIconButton href="https://github.com/dharmesh95">
                <GithubIcon />
              </ContactIconButton>
              <ContactIconButton href="https://www.facebook.com/ddp95">
                <FacebookIcon />
              </ContactIconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AboutUsPaper>
  </div>
);
