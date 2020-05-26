import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { grey, red, lightBlue } from '@material-ui/core/colors';
import { useSpring, config } from 'react-spring';
import FloatingItem from '../UtilityComponents/FloatingItem';


const Skill = ({ children, shouldHighlight }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false)

  const { color } = useSpring({
    color: isHovered ? red['A200'] : shouldHighlight ? lightBlue[200] : grey[900],
    config: config.stiff
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

const useStyles = makeStyles(theme => ({
  floatingItem: {
    paddingLeft: 15,
    paddingRight: 15
  },
  text: {
    fontSize: 60
  }
}));

export default Skill;