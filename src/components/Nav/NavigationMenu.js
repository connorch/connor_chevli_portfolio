import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import MenuIcon from './MenuIcon';
import { makeStyles, Grid, IconButton, Collapse } from '@material-ui/core';

const NavigationMenu = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  let enableScrollLogic = true;
  useEffect(() => {
    const handleScroll = e => {
      if (!enableScrollLogic) return;
      enableScrollLogic = false;
      setIsOpen(false);
      // Let's throttle the scrolling event so it doesn't get triggered like crazy.
      setTimeout(() => enableScrollLogic = true, 1000);
    }
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
        <Collapse in={isOpen} disableStrictModeCompat key={id}>
          <Grid item>
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
};

const useStyles = makeStyles(theme => ({
  navMenu: {
    position: "fixed",
    padding: 10,
    overflow: "hidden",
    width: "fit-content",
    maxWidth: 300,
    right: 0,
    zIndex: 1,
    mixBlendMode: 'difference'
  },
}));

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
];

export default NavigationMenu;