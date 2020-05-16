import React, { Fragment } from 'react';
import AboutSectionOne from './AboutSectionOne';
import AboutSectionTwo from './AboutSectionTwo';
import Footer from '../Footer';


const About = () => {
  return (
    <Fragment>
      <AboutSectionOne />
      <AboutSectionTwo />
      <Footer dark />
    </Fragment >
  );
}

export default About;