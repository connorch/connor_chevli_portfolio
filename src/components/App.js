import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, lightBlue, red, grey } from '@material-ui/core/colors';
import { Route, Switch } from 'react-router-dom';
import InteractiveHomepage from './Home';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: red['A200']
    },
    text: {
      primary: lightBlue[200],
      secondary: grey[50],
    },
    lightBlueGrey: blueGrey[100],
    darkBlueGrey: blueGrey[800],
  },
  typography: {
    fontFamily: '"Raleway", sans-serif',
    fontWeightThin: 100,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    h1: {
      fontFamily: "Megrim",
      lineHeight: 1,
      fontSize: '7rem'
    },
    h2: {
      fontFamily: "Megrim",
      fontSize: "3.5rem",
    },
    h3: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: "3rem",
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
      <Switch>
        <Route path="/" component={InteractiveHomepage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
