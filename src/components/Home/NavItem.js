import React from 'react';
import { makeStyles, ButtonBase, Typography } from '@material-ui/core';
import FloatingItem from './FloatingItem';
import { lightBlue } from '@material-ui/core/colors';

const NavItem = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <FloatingItem className={classes.menuItem}>
        <ButtonBase className={classes.button}>
          <Typography className={classes.text} variant="h1">{children}</Typography>
        </ButtonBase>
      </FloatingItem>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  menuItem: {
    margin: '0 auto',
    width: 'fit-content'
  },
  button: {
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    fontFamily: "Megrim",
    color: lightBlue[200],
    textShadow: "5px 0px 20px #000"
  }
}))

export default NavItem;