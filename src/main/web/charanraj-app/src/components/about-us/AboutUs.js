import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import FacebookIcon from "../../icons/FacebookIcon";
import GithubIcon from "../../icons/GithubIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import "./../../MiniDrawer.css";
import "./about-us.css";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Typography paragraph>About Us</Typography>
        <Paper className="about-us-comp">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <img
                className="round-image"
                src="https://lh3.googleusercontent.com/a-/AAuE7mBI4JEaaw4_y19Hz5mbJhDOnn4wmVLknGEsRXM3=s96-c"
                alt="img"
              />
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
                  <Typography variant="subtitle1" className="details">
                    The Creator
                    <br />
                    Toronto, CA
                    <br />
                    <a
                      href="mailto:95dharmesh@gmail.com"
                      className="link"
                    >
                      95dharmesh@gmail.com
                    </a>
                  </Typography>
                  <IconButton
                    target="_blank"
                    href="https://www.linkedin.com/in/95dharmesh/"
                  >
                    <LinkedinIcon className="icons" />
                  </IconButton>
                  <IconButton
                    target="_blank"
                    href="https://github.com/dharmesh95"
                  >
                    <GithubIcon className="icons" />
                  </IconButton>
                  <IconButton
                    target="_blank"
                    href="https://www.facebook.com/ddp95"
                  >
                    <FacebookIcon className="icons" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
