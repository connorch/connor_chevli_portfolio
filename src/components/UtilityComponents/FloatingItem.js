import React from 'react';
import { animated, useSpring } from 'react-spring';

const X_AXIS_MAX_DEGREES_ROTATION = 20;
const Y_AXIS_MAX_DEGREES_ROTATION = 20;

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const FloatingItem = ({ children, className, color }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 10,
      tension: 500,
      friction: 50
    }
  }));

  const calculateRotation = ({ clientX, clientY, target }) => {
    // Get element dimensions and position
    const {
      x: elemX,
      y: elemY,
      width: elemWidth,
      height: elemHeight
    } = target.getBoundingClientRect();

    // Get the percentage distance from the center.
    const mouseDistanceFromElemCenter = {
      x: (clientX - (elemX + elemWidth / 2)) / (elemWidth / 2),
      y: (clientY - (elemY + elemHeight / 2)) / (elemHeight / 2)
    };

    // Set rotation
    return set({
      xys: [
        -mouseDistanceFromElemCenter.y * X_AXIS_MAX_DEGREES_ROTATION,
        mouseDistanceFromElemCenter.x * Y_AXIS_MAX_DEGREES_ROTATION,
        1.1
      ]
    });
  }

  return (
    <animated.div
      className={className}
      onMouseMove={calculateRotation}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans), color }}
    >
      {children}
    </animated.div >
  )
}

export default FloatingItem;