import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import AboutSectionOne from './AboutSectionOne';
import AboutSectionTwo from './AboutSectionTwo';
import portrait from '../assets/portrait_circle.png';


const About = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AboutSectionOne />
      <AboutSectionTwo />
    </Fragment >
  );
}

export default About;

const useStyles = makeStyles(theme => ({
  sectionOne: {
    backgroundColor: theme.palette.lightBlueGrey,
    paddingTop: 100,
    width: '100%',
  },
  landingText: {
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  mountainImage: {
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  sectionTwo: {
    paddingTop: 100,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 10
    },
    paddingBottom: 100,
    backgroundColor: theme.palette.primary.main,
  },
  portraitContainer: {
    padding: 20
  },
  portrait: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '50%'
    }
  },
  aboutText: {
    textAlign: "center",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 50,
      paddingRight: 50
    }
  }
}));