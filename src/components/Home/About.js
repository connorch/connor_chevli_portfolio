import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import PortraitImage from '../../assets/portrait_circle.png';


const About = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.about}>
      <Grid item>
        <img className={classes.img} src={PortraitImage} />
      </Grid>
      <Grid item>
        <Typography className={classes.text} variant="h4">I’m a full-stack web developer based in Boston, MA. I love bringing ideas to life, manipulating complex data sets, and creating beatiful user experiences.</Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  about: {
    width: '100%',
    minHeight: 800,
    backgroundColor: theme.palette.grey[900],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  img: {
    width: '100%',
    maxWidth: 500,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 300
    },
    padding: 30,
  },
  text: {
    color: theme.palette.text.primary,
    width: '100%',
    textAlign: 'center',
    maxWidth: 500,
    minWidth: 300,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 300
    },
    padding: 30
  }
}));

export default About;