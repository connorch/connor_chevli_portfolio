import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const FloatingItem = ({ children, className }) => {
  const classes = useStyles();

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 10,
      tension: 500,
      friction: 50
    }
  }));

  return (
    <animated.div
      className={className}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {children}
    </animated.div >
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    // width: '50%',
    // margin: '0 auto',
  }
}));

export default FloatingItem;