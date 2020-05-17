import React, { useState } from 'react';
import { Grid, TextField, makeStyles, IconButton, Paper, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const Contact = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    debugger;
  }

  return (
    <Box className={classes.container}>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit}>
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
                id="name"
                label="Name"
                onChange={e => setName(e.target.value)}
                value={name}
                className={classes.formField}
              />
            </Grid>
            <Grid item xs={12}
            >
              <TextField
                variant="outlined"
                color="secondary"
                id="email"
                label="Email"
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                className={classes.formField}
                autofocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                color="secondary"
                label="Message"
                type="text"
                multiline
                rows={6}
                rowsMax={16}
                onChange={e => setMessage(e.target.value)}
                value={message}
                className={classes.formField}
              />
            </Grid>
            <Grid item xs={12}>
              <IconButton
                aria-label="send"
                className={classes.sendButton}
                onClick={handleSubmit}
              >
                <SendIcon />
              </IconButton>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    paddingTop: 100
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