import React from 'react'
import { lightBlue } from '@material-ui/core/colors'
import LandingBackground from '../../assets/landing_background_3.jpg';
import { Box, makeStyles, Typography } from '@material-ui/core';
import About from './About';
import Skills from './Skills';


const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.landing}>
        <Typography variant="h1" gutterBottom className={classes.primaryText}>I'm Connor.</Typography>
        <Typography variant="h3" className={classes.secondaryText}>
          I love building <br />
          <span style={{ fontWeight: 800 }}>immersive</span> and <span style={{ fontStyle: 'italic' }}>beautiful</span> <br />
          webapps
        </Typography>
      </Box>
      <Skills />
      <About />
    </>
  )
}

const useStyles = makeStyles(theme => ({
  landing: {
    width: '100%',
    height: '100vh',
    backgroundColor: "black",
    backgroundImage: `url(${LandingBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  primaryText: {
    textAlign: "center",
    paddingTop: 275,
    color: lightBlue[200],
    textShadow: "2px 2px 8px #000"
  },
  secondaryText: {
    margin: "0 auto",
    textAlign: "center",
    width: 1000,
    maxWidth: "100%",
    color: lightBlue[200],
    textShadow: "2px 2px 8px #000"
  }
}));

export default Home;
