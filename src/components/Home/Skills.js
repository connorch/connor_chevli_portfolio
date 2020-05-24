import React, { useState } from 'react';
import { makeStyles, Typography, ButtonGroup, Button, Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { grey, green, blue, yellow, purple, red } from '@material-ui/core/colors';
import Skill from './Skill';

const SkillTypes = {
  'language': {
    id: 'language',
    isSelected: false,
    selectedColor: red['A200']
  },
  'framework': {
    id: 'framework',
    isSelected: false,
    selectedColor: yellow[300]
  },
  'library': {
    id: 'library',
    isSelected: false,
    selectedColor: purple[300]
  },
  'frontend': {
    id: 'frontend',
    isSelected: false,
    selectedColor: green[300]
  },
  'backend': {
    id: 'backend',
    isSelected: false,
    selectedColor: blue[300]
  },
}

const Skills = () => {
  const classes = useStyles();

  const isSmallDevice = useMediaQuery(useTheme().breakpoints.down('sm'));

  const [selectedSkillTypes, setSelectedSkillTypes] = useState(SkillTypes);

  const toggleSkillType = skillType => {
    setSelectedSkillTypes({
      ...selectedSkillTypes,
      [skillType.id]: {
        ...skillType,
        isSelected: !selectedSkillTypes[skillType.id].isSelected
      }
    });
  }

  const isSkillTypeSelected = ({ types }) => {
    let type;
    for (type of types) {
      if (selectedSkillTypes[type].isSelected) { return true; }
    }
    return false;
  };

  const getButtonVariant = ({ isSelected }) => isSelected ? 'contained' : 'outlined';

  return (
    <div className={classes.background}>
      <div className={classes.buttonGroup}>
        <ButtonGroup size="large" orientation={isSmallDevice ? 'vertical' : 'horizontal'}>
          <Button variant={getButtonVariant(selectedSkillTypes.language)} onClick={() => toggleSkillType(SkillTypes.language)}>Languages</Button>
          <Button variant={getButtonVariant(selectedSkillTypes.framework)} onClick={() => toggleSkillType(SkillTypes.framework)}>Frameworks</Button>
          <Button variant={getButtonVariant(selectedSkillTypes.library)} onClick={() => toggleSkillType(SkillTypes.library)}>Libraries</Button>
          <Button variant={getButtonVariant(selectedSkillTypes.frontend)} onClick={() => toggleSkillType(SkillTypes.frontend)}>Frontend</Button>
          <Button variant={getButtonVariant(selectedSkillTypes.backend)} onClick={() => toggleSkillType(SkillTypes.backend)}>Backend</Button>
        </ButtonGroup>
      </div>
      <div className={classes.skills}>
        {skills.map(skill => (
          <Skill key={skill.name} isSkillTypeSelected={isSkillTypeSelected(skill)}>{skill.name}</Skill>
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

export default Skills;

const skills = [
  {
    name: "JavaScript (ES8)",
    types: ["language", "frontend", "backend"]
  },
  {
    name: "React",
    types: ["framework", "frontend"]
  },
  {
    name: "Redux",
    types: ["library", "frontend"]
  },
  {
    name: "NodeJS",
    types: ["framework", "backend"]
  },
  {
    name: "Dart",
    types: ["language", "frontend"]
  },
  {
    name: "Flutter",
    types: ["framework", "frontend"]
  },
  {
    name: "ExpressJS",
    types: ["framework", "backend"]
  },
  {
    name: "GraphQL",
    types: ["language", "library"]
  },
  {
    name: "D3",
    types: ["library", "frontend"]
  },
  {
    name: "Gulp",
    types: ["library", "backend"]
  },
  {
    name: "Vue.js",
    types: ["framework", "frontend"]
  },
  {
    name: "AWS ECS",
    types: []
  },
  {
    name: "AngularJS",
    types: ["framework", "frontend"]
  },
  {
    name: "Perl",
    types: ["language", "backend"]
  },
  {
    name: "Koa",
    types: ["framework", "backend"]
  },
  {
    name: "HTML5",
    types: ["language", "frontend"]
  },
  {
    name: "CSS",
    types: ["language", "frontend"]
  },
  {
    name: "Redis",
    types: ["library", "backend"]
  },
  {
    name: "PHP",
    types: ["language", "backend"]
  },
  {
    name: "Webpack",
    types: ["library", "backend"]
  },
  {
    name: "SASS",
    types: ["framework", "frontend"]
  },
  {
    name: "SQL",
    types: ["language", "backend"]
  },
  {
    name: "jQuery",
    types: ["library", "frontend"]
  },
  {
    name: "MongoDB",
    types: ["backend"]
  },
  {
    name: "Memcached",
    types: ["backend"]
  },
  {
    name: "React-Native",
    types: ["framework", "frontend"]
  },
];