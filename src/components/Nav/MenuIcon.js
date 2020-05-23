import React from 'react';
import { animated, useSpring, config } from 'react-spring'
import { lightBlue } from '@material-ui/core/colors';

const openedTransformation = {
  top: 'translate(2 , 9) rotate(0)',
  center: 'translate(2 , 20) rotate(0)',
  bottom: 'translate(2 , 31) rotate(0)',
}

const closedTransformation = {
  top: 'translate(7, 34) rotate(-45)',
  center: 'translate(10 , 6) rotate(45)',
  bottom: 'translate(7 , 34) rotate(-45)',
}

const MenuIcon = ({ isOpen }) => {
  const { top, center, bottom } = useSpring({
    to: isOpen ? closedTransformation : openedTransformation,
    config: config.stiff,
  })

  return (
    <animated.svg width="40" height="40" viewBox="0 0 44 44" fill={lightBlue[200]}>
      <animated.rect width="40" height="4" transform={top} />
      <animated.rect width="40" height="4" transform={center} />
      <animated.rect width="40" height="4" transform={bottom} />
    </animated.svg >
  );
}

export default MenuIcon;