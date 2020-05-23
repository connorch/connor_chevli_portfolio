import React from 'react';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';


const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>

    </div>
  );
};

const useStyles = makeStyles(theme => ({
  about: {
    width: '100%',
    height: 800,
    backgroundColor: grey[800]
  }
}));

export default About;