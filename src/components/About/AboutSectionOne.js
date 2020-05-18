import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import mountainImage from '../../assets/mountain.svg';
import landingText from '../../assets/landing_text.png';
import { blueGrey, red } from '@material-ui/core/colors';


const AboutSectionOne = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sectionOne}>
      <Box display="flex" justifyContent="center" className={classes.textContainer}>
        <img alt="landing_text" src={landingText} className={classes.landingText} />
      </Box>
      <Box display="flex" justifyContent="center">
        <img alt="landing_mountain" src={mountainImage} className={classes.mountainImage} />
      </Box>
    </Box>
  );
}

export default AboutSectionOne;

const useStyles = makeStyles(theme => ({
  sectionOne: {
    background: `radial-gradient(ellipse at top, ${blueGrey[100]}, transparent), radial-gradient(ellipse at bottom, ${red[300]}, transparent)`,
    paddingTop: 80,
  },
  landingText: {
    width: 600,
    maxWidth: '90%',
    objectFit: 'contain',
  },
  mountainImage: {
    marginTop: 50,
    width: 1000,
    maxWidth: '100%',
    alignSelf: 'flex-start'
  },
}));