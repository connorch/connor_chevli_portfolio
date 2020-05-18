import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, IconButton, Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import resumePDF from '../assets/connor_chevli_resume.pdf';

const Footer = ({ dark = false }) => {
  const classes = useStyles();

  const footerTextColor = dark ? "primary" : "secondary";

  return (
    <Grid container className={`${classes.footerContainer} ${dark ? classes.darkFooter : classes.lightFooter}`} justify="center">
      <Grid item>
        <Box className={classes.downloadResumeButton}>
          <Button variant="contained" size="large" color={footerTextColor} disableElevation href={resumePDF} target="_blank">View My Resume</Button>
        </Box>
      </Grid>
      <Grid item container justify="center">
        <Grid item>
          <IconButton color={footerTextColor} href="https://www.linkedin.com/in/connorch/" target="_blank">
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color={footerTextColor} href="https://github.com/connorch" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color={footerTextColor} href="mailto:connorchev@gmail.com" target="_blank">
            <EmailIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  footerContainer: {
    paddingBottom: 10
  },
  lightFooter: {
    backgroundColor: theme.palette.primary.main,
  },
  darkFooter: {
    backgroundColor: theme.palette.secondary.main,
  },
  downloadResumeButton: {
    marginTop: 10,
    marginBottom: 10
  }
}));

export default Footer;
