import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import portrait from '../assets/portrait_circle.png';
import resumePDF from '../assets/connor_chevli_resume.pdf';

const AboutSectionTwo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <Box display="flex" justifyContent="center" className={classes.portraitContainer} >
        <img src={portrait} className={classes.portrait} />
      </Box>
      <Box className={classes.aboutTextContainer}>
        <Typography variant="h4" color="textSecondary" className={classes.aboutText}>
          I’m a full-stack web developer based in Boston, MA.  I love bringing ideas to life and creating beatiful and intuitive user experiences.
        </Typography>
      </Box>
      <Box className={classes.downloadResumeButton}>
        <Button variant="contained" color="primary" href={resumePDF}>View My Resume</Button>
      </Box>
    </Box>
  );
}

export default AboutSectionTwo;

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: 65,
    paddingBottom: 65,
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: theme.palette.secondary.main,
  },
  portraitContainer: {
    marginBottom: 20,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 60
    }
  },
  portrait: {
    maxWidth: 400,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  aboutTextContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  aboutText: {
    margin: '0 auto',
    maxWidth: 650,
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightLight
  },
  downloadResumeButton: {
    marginTop: 20,
    textAlign: 'center',
  }
}));