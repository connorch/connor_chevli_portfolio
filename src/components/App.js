import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import About from './About/About';
import Contact from './Contact';
import Work from './Work/Work';
import { blueGrey, lightBlue } from '@material-ui/core/colors';
import { Route, Switch } from 'react-router-dom';
import InteractiveHomepage from './Home/Home';
import NavigationMenu from './Nav/NavigationMenu';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[100]
    },
    secondary: {
      main: blueGrey[800]
    },
    text: {
      primary: blueGrey[800],
      secondary: blueGrey[100],
    },
    lightBlueGrey: blueGrey[100],
    darkBlueGrey: blueGrey[800],
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    fontWeightThin: 100,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    h1: {
      fontFamily: "Megrim",
      color: lightBlue[200]
    },
    h2: {
      fontFamily: "Megrim",
      fontSize: "3.5rem",
      // color: lightBlue[200]
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.4
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <NavigationMenu />

      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route path="/home" component={InteractiveHomepage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
