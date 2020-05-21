import React, { Fragment } from 'react';
import AboutSectionOne from './AboutSectionOne';
import AboutSectionTwo from './AboutSectionTwo';
import Footer from '../Footer';
import NavBar from '../NavBar';


const About = () => {
  return (
    <Fragment>
      <NavBar />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Footer dark />
    </Fragment >
  );
}

export default About;