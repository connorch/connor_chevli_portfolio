import React, { Fragment } from 'react';
import { Grid, TextField, makeStyles, IconButton, Paper, Box, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Footer from './Footer';
import NavBar from './NavBar';

const Contact = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <NavBar />
      <Box className={classes.container}>
        <Typography variant="h1" color="textPrimary" align="center" gutterBottom>Say hi!</Typography>
        <Paper className={classes.paper}>
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12}
              >
                <TextField
                  variant="outlined"
                  color="secondary"
                  label="Name"
                  id="name"
                  name="name"
                  type="text"
                  className={classes.formField}
                />
              </Grid>
              <Grid item xs={12}
              >
                <TextField
                  variant="outlined"
                  color="secondary"
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  className={classes.formField}
                  autofocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  label="Message"
                  id="message"
                  name="message"
                  type="text"
                  multiline
                  rows={6}
                  rowsMax={16}
                  className={classes.formField}
                />
              </Grid>
              <Grid item xs={12}>
                <IconButton
                  aria-label="send"
                  className={classes.sendButton}
                  type="submit"
                >
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
      <Footer />
    </Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 100,
    paddingBottom: 100
  },
  paper: {
    maxWidth: 500,
    margin: '0 auto',
    padding: 20
  },
  formField: {
    width: '100%'
  },
  sendButton: {
    float: 'right'
  }
}));

export default Contact;