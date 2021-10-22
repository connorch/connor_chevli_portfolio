import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Skill from "./Skill";
import { skills } from "../../data/SkillsData";
import StackToggle from "./StackToggle";

const Skills = () => {
  const classes = useStyles();

  const [selectedSkillType, setSelectedSkillType] = useState({});

  const filterSkills = (skillType) =>
    setSelectedSkillType(
      selectedSkillType.id === skillType.id ? {} : skillType
    );

  const shouldHighlightSkill = (types) =>
    Object.keys(selectedSkillType).length > 0
      ? types[selectedSkillType.id]
      : true;

  return (
    <div>
      <div className={classes.stackToggleContainer}>
        <StackToggle
          filterSkills={filterSkills}
          selectedSkillType={selectedSkillType}
        />
      </div>
      <div className={classes.skills}>
        {skills.map((skill) => (
          <Skill
            key={skill.name}
            shouldHighlight={shouldHighlightSkill(skill.types)}
          >
            {skill.name}
          </Skill>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  stackToggleContainer: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  button: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: 70,
      ...theme.typography.h5,
      fontFamily: '"Raleway", sans-serif',
    },
  },
  skills: {
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    cursor: "default",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}));

export default Skills;
