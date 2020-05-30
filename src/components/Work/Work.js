import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import WorkEntry from './WorkEntry';
import WORK_ENTRY_TYPES from '../../data/WorkEntryTypes';
import { professional, projects } from '../../data/ExperienceData';

const Work = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.workContainer}>
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Work Experience
        </Typography>
        {
          professional.map((company, index) => (
            <WorkEntry key={index} workData={company} entryType={WORK_ENTRY_TYPES.professional} />
          ))
        }
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Projects
        </Typography>
        {
          projects.map((project, index) => (
            <WorkEntry key={index} workData={project} entryType={WORK_ENTRY_TYPES.projects} />
          ))
        }
      </Box>
    </>
  );
}
const useStyles = makeStyles(theme => ({
  workContainer: {
    paddingTop: 50,
    backgroundColor: theme.palette.grey[900]
  },
}));

export default Work;