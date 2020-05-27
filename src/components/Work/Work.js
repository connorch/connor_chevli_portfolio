import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import WorkEntry from './WorkEntry';
import WORK_ENTRY_TYPES from '../../constants/WorkEntryTypes';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { lightBlue } from '@material-ui/core/colors';

const Work = () => {
  const classes = useStyles();
  console.log(experience.professional[0].startDate);

  return (
    <Fragment>
      <Box className={classes.workContainer}>
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Professional Experience
        </Typography>
        {
          experience.professional.map((company) => (
            <WorkEntry workData={company} entryType={WORK_ENTRY_TYPES.professional} />
          ))
        }
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Projects
      </Typography>
        {
          experience.projects.map((project) => (
            <WorkEntry workData={project} entryType={WORK_ENTRY_TYPES.projects} />
          ))
        }
      </Box>
      <Footer />
    </Fragment>
  );
}
const useStyles = makeStyles(theme => ({
  workContainer: {
    paddingTop: 100,
    backgroundColor: theme.palette.grey[900]
  },
}));


const experience = {
  professional: [
    {
      name: "Acornpack",
      title: "Principal Software Engineer",
      description: "B2B Initiative",
      startDate: "February 2020",
      endDate: "Present",
      companyUrl: "https://www.acornpack.com/",
      bullets: [
        "Architect Koa and SQL backend, design UI, and lead initiatives for an upcoming B2B interface.",
        "Increase cash flow by streamlining the Vue.JS UI and lowering the barrier-to-entry for users."
      ]
    },
    {
      name: "Wayfair",
      title: "Software Engineer",
      description: "Promotions Team",
      startDate: "January 2018",
      endDate: "February 2020",
      companyUrl: "https://www.wayfair.com/",
      bullets: [
        "Create several features using JavaScript and PHP to provide an immersive UX and drive millions in sales.",
        "Implement tools with React, PHP, and MSSQL to manage sale events, promotions, and all coupon codes.",
        "Design GraphQL APIs for selective and predictable data transfer.",
        "Drive initiatives to improve Speed Index by 700ms via React and PHP performance improvements.",
        "Leverage Redux for accessible data storage across an extensive React frontend.",
        "Manipulate complex datasets using SQL Server, Redis, Memcached for reduced storage latency."
      ]
    },
    {
      name: "athenahealth",
      title: "Software Engineer",
      description: "Analytics Team",
      startDate: "June 2017",
      endDate: "October 2017",
      companyUrl: "https://www.athenahealth.com/",
      bullets: [
        "Create microservice Express app with connection to monolithic Perl backend for intuitive and secure navigation between analytics tools.",
        "Build out React app with Redux, CSS Modules, and SASS for efficient and scalable development of team.",
        "Design analytics tool with Angular to drive data transparency for over 1,000 active users.",
        "Capture data with SQL to track usage of over 100,000 users across athenahealth products."
      ]
    }
  ],
  projects: [
    {
      name: "Chow",
      description: "iOS, Android, and Web meal-ordering app that assists restaurants affected by COVID-19",
      bullets: [
        "Create native iOS, Android, and Web apps using Flutter framework for cross-platform development.",
        "Design and build beautiful map UI and order flow for simple and intuitive user experience.",
        "Build data models and architecture for interactions between Flutter and Firebase."
      ]
    },
    {
      name: "Journey",
      description: "Web and Alexa powered journal and psychoanalysis tool",
      bullets: [
        "Build RESTful API with Node, Express, and a relational DB for extensibility and maintainability.",
        "Create interactive visualizations of NLP results with D3 and React for fast rendering and easy analysis.",
        "Implement authentication with OAuth for secure management of persistent user sessions."
      ]
    }
  ],
  education: [
    {
      schoolName: "Hack Reactor",
      description: "Advanced Software Engineering Immersive Program",
      startDate: "2016",
      endDate: "2016"
    },
    {
      schoolName: "SUNY Buffalo",
      description: "CS courses in Python, Java, JavaScript, and Data Structures",
      startDate: "2015",
      endDate: "2016"
    },
    {
      schoolName: "Case Western Reserve University",
      description: "BA in Psychology",
      startDate: "2011",
      endDate: "2015"
    }
  ]
}

export default Work;