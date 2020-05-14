import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Collapse } from '@material-ui/core';
import mountainImage from '../assets/mountain.svg';
import landingText from '../assets/landing_text.svg';
import { blueGrey, red } from '@material-ui/core/colors';


const AboutSectionOne = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.sectionOne}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <img src={landingText} className={classes.landingText} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" overflow="hidden" >
          <img src={mountainImage} className={classes.mountainImage} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default AboutSectionOne;

const useStyles = makeStyles(theme => ({
  sectionOne: {
    background: `radial-gradient(ellipse at top, ${blueGrey[100]}, transparent), radial-gradient(ellipse at bottom, ${red[300]}, transparent)`,
    paddingTop: 80,
    width: '100%',
  },
  landingText: {
    width: 600,
    maxWidth: '100%'
  },
  mountainImage: {
    marginTop: 50,
    width: 1000,
    // height: 30,
    maxWidth: '100%'
  },
}));