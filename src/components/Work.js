import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const experience = {
  professional: [
    {
      companyName: 'Acornpack',
      title: 'Principal Software Engineer',
      team: 'B2B Initiative',
      startDate: new Date("February 2020"),
    }
  ]

}
const Work = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.sectionOne}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <Typography className={classes.test}>Testing123</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
const useStyles = makeStyles(theme => ({
  test: { color: green[400] }
}));

export default Work;