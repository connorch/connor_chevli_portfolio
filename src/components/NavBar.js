import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, ButtonGroup } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import { blueGrey } from '@material-ui/core/colors';

const NavBar = ({ toggleContactModal }) => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} color="transparent" position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolBar} >
        <ButtonGroup variant="text">
          <Button component={RouterLink} to="/" exact activeClassName={classes.active}>About</Button>
          <Button component={RouterLink} to="/work" activeClassName={classes.active} >Work</Button>
          <Button onClick={toggleContactModal}>Contact</Button>
        </ButtonGroup>
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
  active: {
    color: theme.palette.secondary.light
  }
}));

export default NavBar;
