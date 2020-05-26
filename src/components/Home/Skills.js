import React, { useState } from 'react';
import { makeStyles, ButtonGroup, Button, useMediaQuery, useTheme } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import Skill from './Skill';

const Skills = () => {
  const classes = useStyles();

  const [selectedSkillType, setSelectedSkillType] = useState({});

  const getButtonVariant = id => id === selectedSkillType.id ? 'contained' : 'outlined';

  const filterSkills = skillType => setSelectedSkillType(selectedSkillType.id === skillType.id ? {} : skillType);

  const shouldHighlightSkill = types => Object.keys(selectedSkillType).length > 0 ? types[selectedSkillType.id] : true;

  return (
    <div className={classes.background}>
      <div className={classes.buttonGroup}>
        <ButtonGroup size="large">
          <Button variant={getButtonVariant(SkillTypes.frontend.id)} onClick={() => filterSkills(SkillTypes.frontend)}>Frontend</Button>
          <Button variant={getButtonVariant(SkillTypes.backend.id)} onClick={() => filterSkills(SkillTypes.backend)}>Backend</Button>
        </ButtonGroup>
      </div>
      <div className={classes.skills}>
        {skills.map(skill => (
          <Skill key={skill.name} shouldHighlight={shouldHighlightSkill(skill.types)}>{skill.name}</Skill>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  background: {
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 30
  },
  buttonGroupSeparator: {
    paddingLeft: 10,
    paddingRight: 10,
    color: lightBlue[200]
  },
  skills: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    cursor: 'default',
  },
  skillsText: {
    textAlign: "justify"
  }
}));

const SkillTypes = {
  frontend: {
    id: 'frontend',
    group: 'stack',
  },
  backend: {
    id: 'backend',
    group: 'stack',
  },
}

const { frontend, backend } = SkillTypes;

const skills = [
  {
    name: "JavaScript (ES8)",
    types: { frontend, backend }
  },
  {
    name: "React",
    types: { frontend }
  },
  {
    name: "Redux",
    types: { frontend }
  },
  {
    name: "NodeJS",
    types: { backend }
  },
  {
    name: "Dart",
    types: { frontend }
  },
  {
    name: "Flutter",
    types: { frontend }
  },
  {
    name: "ExpressJS",
    types: { backend }
  },
  {
    name: "GraphQL",
    types: { frontend, backend }
  },
  {
    name: "D3",
    types: { frontend }
  },
  {
    name: "Gulp",
    types: { backend }
  },
  {
    name: "Vue.js",
    types: { frontend }
  },
  {
    name: "AWS ECS",
    types: {}
  },
  {
    name: "AngularJS",
    types: { frontend }
  },
  {
    name: "Perl",
    types: { backend }
  },
  {
    name: "Koa",
    types: { backend }
  },
  {
    name: "HTML5",
    types: { frontend }
  },
  {
    name: "CSS",
    types: { frontend }
  },
  {
    name: "Redis",
    types: { backend }
  },
  {
    name: "PHP",
    types: { backend }
  },
  {
    name: "Webpack",
    types: { backend }
  },
  {
    name: "SASS",
    types: { frontend }
  },
  {
    name: "SQL",
    types: { backend }
  },
  {
    name: "jQuery",
    types: { frontend }
  },
  {
    name: "MongoDB",
    types: { backend }
  },
  {
    name: "Memcached",
    types: { backend }
  },
  {
    name: "React-Native",
    types: { frontend }
  },
];

export default Skills;
