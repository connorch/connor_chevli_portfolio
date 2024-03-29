import React from "react";
import LandingBackground from "../assets/landing_background.jpg";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import About from "./About";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-between"
        className={classes.landing}
      >
        <Grid item>
          <Typography variant="h1" className={classes.primaryText}>
            I'm Connor,
          </Typography>
          <Typography variant="h4" className={classes.secondaryText}>
            a software engineer bringing life to the web.
          </Typography>
        </Grid>
        <Grid item>
          <Skills />
        </Grid>
      </Grid>
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  landing: {
    padding: 10,
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 108px)",
    },
    backgroundColor: "black",
    backgroundImage: `url(${LandingBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundAttachment: "fixed",
    display: "flex",
    alignItems: "space-between",
    overflow: "hidden",
  },
  primaryText: {
    paddingLeft: 15,
    paddingTop: 15,
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5rem",
    },
    mixBlendMode: "difference",
  },
  secondaryText: {
    paddingLeft: 15,
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  skillsContainer: {
    display: "flex-column",
    alignItems: "flex-end",
  },
}));

export default Home;
