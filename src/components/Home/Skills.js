import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Skill from './Skill';


const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.skillsContainer}>
      <div className={classes.skills}>
        {shuffledSkills.map(skill => (
          <Skill>{skill.toUpperCase()}</Skill>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  skillsContainer: {
    width: '100%',
    height: 800,
    backgroundColor: grey[900]
  },
  skills: {
    width: '60%',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  skillsText: {
    textAlign: "justify"
  }
}));

export default Skills;

const shuffledSkills = [
  "JavaScript (ES8)",
  "React",
  "Redux",
  "Node/Express",
  "Dart",
  "GraphQL",
  "D3",
  "Gulp",
  "Vue.js",
  "AWS ECS",
  "Angular",
  "React-Native",
  "Koa",
  "Perl",
  "CSS3",
  "PHP",
  "HTML5",
  "Redis",
  "Webpack",
  "SASS",
  "SQL",
  "jQuery",
  "MongoDB",
  "Flutter",
  "Memcached"
];