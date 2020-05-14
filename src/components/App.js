import React, { useState, Fragment } from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import EmailCaptureModal from './EmailCaptureModal';
import NavBar from './NavBar';
import About from './About';
import { blueGrey, green } from '@material-ui/core/colors';

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
    darkBlueGrey: blueGrey[800]
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    fontWeightThin: 100,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900
  },
});

const App = () => {
  const classes = useStyles();

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  }

  return (
    <ThemeProvider theme={appTheme}>
      <NavBar toggleContactModal={toggleContactModal} />
      <About />
      <EmailCaptureModal
        isOpen={isContactModalOpen}
        toggleModal={toggleContactModal}
      />
    </ThemeProvider>
  );
}

const useStyles = makeStyles(theme => ({
}));

export default App;
