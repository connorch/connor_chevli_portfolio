import React, { useState } from "react";
import { makeStyles, Typography, useTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useSpring, config } from "react-spring";
import FloatingItem from "../UtilityComponents/FloatingItem";

const Skill = ({ children, shouldHighlight }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  const { color } = useSpring({
    color: isHovered
      ? theme.palette.secondary.main
      : shouldHighlight
      ? grey[50]
      : grey[900],
    config: config.stiff,
  });

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FloatingItem className={classes.floatingItem} color={color}>
        <Typography variant="h3" className={classes.text}>
          {children}
        </Typography>
      </FloatingItem>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  floatingItem: {
    paddingLeft: 15,
    paddingRight: 15,
    mixBlendMode: "difference",
  },
  text: {
    fontSize: 60,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
}));

export default Skill;
