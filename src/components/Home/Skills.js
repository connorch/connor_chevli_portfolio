import React, { useState } from 'react';
import { makeStyles, ButtonGroup, Button, useMediaQuery, useTheme } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import Skill from './Skill';
import PortraitImage from '../../assets/portrait_image_filtered.png';

const Skills = () => {
  const classes = useStyles();

  const [selectedSkillType, setSelectedSkillType] = useState({});

  const getButtonVariant = id => id === selectedSkillType.id ? 'contained' : 'outlined';

  const filterSkills = skillType => setSelectedSkillType(selectedSkillType.id === skillType.id ? {} : skillType);

  const shouldHighlightSkill = types => Object.keys(selectedSkillType).length > 0 ? types[selectedSkillType.id] : true;

  return (
    <div >
      <div className={classes.buttonGroup}>
        <ButtonGroup size="large" >
          <Button className={classes.button} variant={getButtonVariant(SkillTypes.frontend.id)} onClick={() => filterSkills(SkillTypes.frontend)}>Frontend</Button>
          <Button className={classes.button} variant={getButtonVariant(SkillTypes.backend.id)} onClick={() => filterSkills(SkillTypes.backend)}>Backend</Button>
        </ButtonGroup>
      </div>
      <div className={classes.skills} >
        {skills.map(skill => (
          <Skill key={skill.name} shouldHighlight={shouldHighlightSkill(skill.types)}>{skill.name}</Skill>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    mixBlendMode: 'difference',
    color: theme.palette.primary.main,
  },
  skills: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    cursor: 'default',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
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
    name: "PHP",
    types: { backend }
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
    name: "Webpack",
    types: { frontend }
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
