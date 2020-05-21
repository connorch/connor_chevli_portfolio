import React from 'react'
import { lightBlue } from '@material-ui/core/colors'
import FloatingItem from './FloatingItem';
import LandingBackground from '../../assets/laptop_table_background_inverted.jpg';
import { ButtonBase, Box, makeStyles, Typography } from '@material-ui/core';


const Home = () => {
  const classes = useStyles();
  return (
    <Box display="flex-column" className={classes.landing}>
      <FloatingItem className={classes.menuItem}>
        <ButtonBase className={classes.button}>
          <Typography className={classes.text} variant="h1" align="center" style={{ width: '100%' }}>About</Typography>
        </ButtonBase>
      </FloatingItem>
      <FloatingItem className={classes.menuItem}>
        <ButtonBase className={classes.button}>
          <Typography className={classes.text} variant="h1" align="center" style={{ width: '100%' }}>Work</Typography>
        </ButtonBase>
      </FloatingItem>
      <FloatingItem className={classes.menuItem}>
        <ButtonBase className={classes.button}>
          <Typography className={classes.text} variant="h1" align="center" style={{ width: '100%' }}>Contact</Typography>
        </ButtonBase>
      </FloatingItem>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  landing: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${LandingBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  menuItem: {
    width: '50%',
    margin: '0 auto'
  },
  button: {
    display: "block",
    margin: '0 auto',
    textAlign: 'center'
  },
  text: {
    fontFamily: "Megrim",
    color: lightBlue[200]
  }
}));

export default Home;
