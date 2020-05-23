import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { grey, red, lightBlue } from '@material-ui/core/colors';
import { useSpring, animated, config } from 'react-spring';
import FloatingItem from '../UtilityComponents/FloatingItem';


const Skill = ({ children }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false)

  const { color } = useSpring({
    color: isHovered ? red["A200"] : lightBlue[200],
    config: config.stiff
  });

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FloatingItem className={classes.floatingItem} color={color}>
        <Typography variant="h3">
          {children}
        </Typography>
      </FloatingItem>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  floatingItem: {
    paddingLeft: 10,
    paddingRight: 10
  },
  skill: {
  }
}));

export default Skill;