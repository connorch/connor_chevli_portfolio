import React from "react";
import { Button, makeStyles, useTheme } from "@material-ui/core";
import { skillTypes } from "../../data/SkillsData";
import { grey } from "@material-ui/core/colors";
import { animated, useSpring, config } from "react-spring";

const StackToggle = ({ filterSkills, selectedSkillType }) => {
  const classes = useStyles();
  const theme = useTheme();

  const highlightFrontend = selectedSkillType.id === skillTypes.frontend.id;
  const highlightBackend = selectedSkillType.id === skillTypes.backend.id;

  const { frontendColor } = useSpring({
    frontendColor: highlightFrontend ? grey[50] : theme.palette.secondary.main,
    config: config.stiff,
  });
  const { backendColor } = useSpring({
    backendColor: highlightBackend ? grey[50] : theme.palette.secondary.main,
    config: config.stiff,
  });

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant={highlightFrontend ? "contained" : "outlined"}
        size="large"
        onClick={() => filterSkills(skillTypes.frontend)}
      >
        Frontend
      </Button>
      <svg className={classes.svg}>
        <defs>
          <linearGradient
            id="e"
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            gradientUnits="userSpaceOnUse"
          >
            <animated.stop stopColor={frontendColor} offset="0" />
            <animated.stop stopColor={backendColor} offset="1" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#e)"
          strokeWidth="1.6"
        />
      </svg>
      <Button
        className={classes.button}
        variant={highlightBackend ? "contained" : "outlined"}
        size="large"
        onClick={() => filterSkills(skillTypes.backend)}
      >
        Backend
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  svg: {
    width: "100%",
  },
  button: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    [theme.breakpoints.up("sm")]: {
      height: 70,
      ...theme.typography.h5,
      fontFamily: '"Raleway", sans-serif',
    },
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
  },
}));

export default StackToggle;
