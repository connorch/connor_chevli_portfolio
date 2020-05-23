import React from 'react'
import { lightBlue } from '@material-ui/core/colors'
import LandingBackground from '../../assets/landing_background_2.jpg';
import { Box, makeStyles, Typography } from '@material-ui/core';


const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.landing}>
        <Typography variant="h1" align="center">I'm Connor.</Typography>
      </Box>
      <div style={{ width: '100%', height: '1000px' }}></div>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  landing: {
    width: '100%',
    height: '100vh',
    backgroundColor: "#CCC",
    backgroundImage: `url(${LandingBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('sm')]: {
      // backgroundAttachment: 'fixed'
    }
  },
}));

export default Home;
