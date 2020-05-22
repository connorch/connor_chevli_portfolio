import React from 'react';
import { makeStyles } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const FloatingItem = ({ children, className }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 10,
      tension: 500,
      friction: 50
    }
  }));


  const getElementCenter = ({ x, y, width, height }) => {
    return {
      x: x + width / 2,
      y: y + height / 2
    }
  }

  // Calculate how to rotate element based on the mouse position relative to the element.
  const calcRotation = (clientX, clientY, elemCenterCoords) => ([
    -(clientY - elemCenterCoords.y) / 2,
    (clientX - elemCenterCoords.x) / 30,
    1.1
  ]);

  // When the mouse moves over element, set new rotation values for element.
  const setRotation = ({ clientX, clientY, target }) => {
    return set({ xys: calcRotation(clientX, clientY, getElementCenter(target.getBoundingClientRect())) });
  };

  return (
    <animated.div
      className={className}
      onMouseMove={setRotation}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans), width: '100%' }}
    >
      {children}
    </animated.div >
  )
}

export default FloatingItem;