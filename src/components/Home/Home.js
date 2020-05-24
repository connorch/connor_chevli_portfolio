import React from 'react'
import { lightBlue } from '@material-ui/core/colors'
import LandingBackground from '../../assets/landing_background_3.jpg';
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import About from './About';
import Skills from './Skills';


const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" justify="space-between" className={classes.landing}>
        <Grid item>
          <Typography variant="h1" className={classes.primaryText}>I'm Connor,</Typography>
          <Typography variant="h4" className={classes.secondaryText}>a full-stack engineer.</Typography>
        </Grid>
        <Grid item>
          <Skills />
        </Grid>
      </Grid>
      <About />
    </>
  )
}

const useStyles = makeStyles(theme => ({
  landing: {
    padding: 10,
    minHeight: '100vh',
    backgroundColor: "black",
    backgroundImage: `url(${LandingBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'space-between'
  },
  primaryText: {
    paddingLeft: 15,
    paddingTop: 15,
    color: lightBlue[200],
    textShadow: "2px 2px 8px #000"
  },
  secondaryText: {
    paddingLeft: 15,
    color: lightBlue[200],
    textShadow: "2px 2px 8px #000"
  },
  skillsContainer: {
    display: 'flex-column',
    alignItems: 'flex-end'
  }
}));

export default Home;
