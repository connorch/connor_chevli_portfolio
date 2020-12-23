import React from "react";
import {
  makeStyles,
  ButtonBase,
  Typography,
  useTheme,
} from "@material-ui/core";
import FloatingItem from "../UtilityComponents/FloatingItem";
import { useSpring } from "react-spring";

const NavItem = ({ children, id, isSelected, selectNavItem, href }) => {
  const classes = useStyles();
  const theme = useTheme();

  const { color } = useSpring({
    color: isSelected
      ? theme.palette.secondary.main
      : theme.palette.text.primary,
  });

  return (
    <>
      <FloatingItem className={classes.menuItem} color={color}>
        <ButtonBase
          className={classes.button}
          onClick={() => selectNavItem(id)}
        >
          <Typography className={classes.text} variant="h2">
            {children}
          </Typography>
        </ButtonBase>
      </FloatingItem>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  menuItem: {
    width: "fit-content",
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontFamily: "Megrim",
    mixBlendMode: "difference",
    textShadow: "10px 10px 10px #000",
  },
}));

export default NavItem;
