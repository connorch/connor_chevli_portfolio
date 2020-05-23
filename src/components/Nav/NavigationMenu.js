import React, { useState } from 'react';
import NavItem from './NavItem';
import MenuIcon from './MenuIcon';
import { makeStyles, Grid, IconButton, Collapse } from '@material-ui/core';

const NAV_ITEMS_DATA = [
  {
    id: 'about',
    text: "About",
    href: "#"
  },
  {
    id: 'work',
    text: "Work",
    href: "#"
  },
  {
    id: 'contact',
    text: "Contact",
    href: "#"
  },
]

const NavigationMenu = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const selectNavItem = (navItemId) => {
    setSelectedItem(navItemId);
  }

  return (
    <Grid container direction="column" alignItems="flex-end" className={classes.navMenu}>
      <Grid item><IconButton onClick={toggleMenu}><MenuIcon isOpen={isOpen} /></IconButton></Grid>
      {NAV_ITEMS_DATA.map(({ text, id, href }) => (
        <Collapse in={isOpen}>
          <Grid item key={id}>
            <NavItem
              selectNavItem={selectNavItem}
              isSelected={selectedItem === id}
              id={id}
              href={href}
            >
              {text}
            </NavItem>
          </Grid>
        </Collapse>
      ))}
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  navMenu: {
    position: "fixed",
    padding: 10,
    overflow: "hidden"
  },
}))

export default NavigationMenu;