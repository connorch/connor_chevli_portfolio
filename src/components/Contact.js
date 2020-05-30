import React, { Fragment } from 'react';
import { Grid, TextField, makeStyles, IconButton, Paper, Box, Typography, withStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#81d4fa',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fafafa',
      },
      '&:hover fieldset': {
        borderColor: '#81d4fa',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#81d4fa',
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.container}>
        <Typography variant="h2" color="secondary" align="center" gutterBottom>Let's connect.</Typography>
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
                <CssTextField
                  variant="outlined"
                  label="Name"
                  id="name"
                  name="name"
                  type="text"
                  inputProps={{
                    className: classes.input,
                    classes: { focused: classes.CsstextFieldFocused }
                  }}
                  className={classes.formField}
                />
              </Grid>
              <Grid item xs={12}
              >
                <CssTextField
                  variant="outlined"
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  inputProps={{
                    className: classes.input
                  }}
                  className={classes.formField}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  variant="outlined"
                  label="Message"
                  id="message"
                  name="message"
                  type="text"
                  multiline
                  rows={6}
                  rowsMax={16}
                  inputProps={{
                    className: classes.input
                  }}
                  className={classes.formField}
                />
              </Grid>
              <Grid item xs={12}>
                <IconButton
                  aria-label="send"
                  type="submit"
                  color="secondary"
                  className={classes.sendButton}
                >
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: 50
  },
  paper: {
    maxWidth: 500,
    backgroundColor: theme.palette.grey[800],
    margin: '0 auto',
    padding: 20
  },
  formField: {
    width: '100%',
  },
  textFieldFocused: {
    borderColor: theme.palette.grey[50]
  },
  input: {
    color: theme.palette.grey[50]
  },
  sendButton: {
    float: 'right',
  }
}));

export default Contact;