import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const NavBar = ({ toggleContactModal }) => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} color="transparent" position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolBar} >
        <Button onClick={() => { }}>About</Button>
        <Button onClick={() => { }}>Work</Button>
        <Button onClick={toggleContactModal}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: 0
  },
  toolBar: {
    justifyContent: "center",
  },
  barItem: {
    // flexGrow: 1,
  },
}));

export default NavBar;
