import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Modal, Grid, IconButton, Fade } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const EmailCaptureModal = ({ isOpen, toggleModal }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    debugger;
    console.log('testing123');
    console.log(e);
  }

  return (
    <Modal open={isOpen} onClose={toggleModal}>
      <Fade in={isOpen} className={classes.modal}>
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
                id="name"
                label="Name"
                onChange={e => setName(e.target.value)}
                value={name}
                className={classes.formField}
                autofocus
              />
            </Grid>
            <Grid item xs={12}
            >
              <TextField
                variant="outlined"
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
      </Fade>
    </Modal >
  )
}

const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outlineWidth: 0
  },
  formField: {
    width: '100%'
  },
  sendButton: {
    float: 'right'
  }
}));

export default EmailCaptureModal;