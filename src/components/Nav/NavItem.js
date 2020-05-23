import React from 'react';
import { makeStyles, ButtonBase, Typography } from '@material-ui/core';
import FloatingItem from '../UtilityComponents/FloatingItem';
import { lightBlue, red } from '@material-ui/core/colors';
import { useSpring } from 'react-spring';

const NavItem = ({ children, id, isSelected, selectNavItem, href }) => {
  const classes = useStyles();

  const { color } = useSpring({ color: isSelected ? red["A200"] : lightBlue[200] });

  return (
    <>
      <FloatingItem className={classes.menuItem} color={color}>
        <ButtonBase className={classes.button} onClick={() => selectNavItem(id)}>
          <Typography className={classes.text} variant="h2" >{children}</Typography>
        </ButtonBase>
      </FloatingItem>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  menuItem: {
    width: 'fit-content',
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontFamily: "Megrim",
    textShadow: "5px 0px 20px #000",
  }
}))

export default NavItem;