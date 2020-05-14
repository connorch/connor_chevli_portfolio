import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { green } from '@material-ui/core/colors';

const Pages = {
  about: 1,
  work: 2
}

const NavBar = ({ toggleContactModal }) => {
  // const [currentPage, setCurrentPage] = useState(Pages.about);

  const classes = useStyles();
  console.log('AOMASDFOIASNDFOASIDNFOIASNFOIASNDFOAISNDF');

  return (
    <AppBar elevation={0} color="transparent" position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolBar} >
        <Button component={RouterLink} to="/">About</Button>
        <Button component={RouterLink} to="/work">Work</Button>
        <Button onClick={toggleContactModal}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: 0
  },
  toolBar: {
    justifyContent: "center",
  },
  active: {
    color: green[300]
  }
}));

export default NavBar;
