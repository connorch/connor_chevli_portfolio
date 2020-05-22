import React from 'react'
import { lightBlue } from '@material-ui/core/colors'
import FloatingItem from './FloatingItem';
import LandingBackground from '../../assets/laptop_table_background_3.jpg';
import { ButtonBase, Box, makeStyles, Typography } from '@material-ui/core';
import NavItem from './NavItem';


const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.landing}>
      <NavItem>About</NavItem>
      <NavItem>Work</NavItem>
      <NavItem>Contact</NavItem>
      <div style={{ width: '100%', height: '1000px' }}></div>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  landing: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${LandingBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('sm')]: {
      // backgroundAttachment: 'fixed'
    }
  },

}));

export default Home;
