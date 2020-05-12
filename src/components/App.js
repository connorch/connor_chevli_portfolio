import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { green } from '@material-ui/core/colors';


import EmailCaptureModal from './EmailCaptureModal';

const App = () => {
  const classes = useStyles();

  const [isContactModalOpen, setIsContactModalOpen] = useState(true)

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit" onClick={toggleContactModal}>Contact</Button>
        </Toolbar>
      </AppBar>
      <EmailCaptureModal
        isOpen={isContactModalOpen}
        toggleModal={toggleContactModal}
      />
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: green
  },
}));

export default App;
