import React, { useState } from 'react';
import { makeStyles, ButtonGroup, Button } from '@material-ui/core';
import Skill from './Skill';
import { skills, skillTypes } from '../../data/SkillsData'

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
          <Button className={classes.button} variant={getButtonVariant(skillTypes.frontend.id)} onClick={() => filterSkills(skillTypes.frontend)}>Frontend</Button>
          <Button className={classes.button} variant={getButtonVariant(skillTypes.backend.id)} onClick={() => filterSkills(skillTypes.backend)}>Backend</Button>
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
    color: theme.palette.secondary.main,
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

export default Skills;
