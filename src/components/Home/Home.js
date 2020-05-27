import React from 'react'
import { lightBlue } from '@material-ui/core/colors'
import LandingBackground from '../../assets/landing_background.jpeg';
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import About from './About';
import Skills from './Skills';
import NavigationMenu from '../Nav/NavigationMenu';


const Home = () => {
  const classes = useStyles();
  return (
    <>
      <NavigationMenu />
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
    backgroundPosition: 'bottom',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'space-between',
    overflow: 'hidden',
  },
  primaryText: {
    paddingLeft: 15,
    paddingTop: 15,
    color: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5rem'
    },
    mixBlendMode: 'difference'
  },
  secondaryText: {
    paddingLeft: 15,
    color: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    }
  },
  skillsContainer: {
    display: 'flex-column',
    alignItems: 'flex-end'
  }
}));

export default Home;
