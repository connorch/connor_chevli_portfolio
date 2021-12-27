import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BulletPoint from "@material-ui/icons/FiberManualRecord";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AcornpackLogo from "../../assets/acornpack_logo.svg";
import WayfairLogo from "../../assets/wayfair_logo.svg";
import AthenahealthLogo from "../../assets/athenahealth_logo.svg";
import ChowImage from "../../assets/chow_map.png";
import JourneyImage from "../../assets/journey_screenshot.png";
import IRacingImage from "../../assets/iracing_logo.png";
import SurjonImage from "../../assets/NoxyBird.png";
import AvaLabsImage from "../../assets/ava_labs_logo.svg";
import { Box, ButtonBase, Divider } from "@material-ui/core";

const WorkEntry = ({ workData, entryType }) => {
  const {
    name,
    title,
    description,
    url,
    startDate,
    endDate,
    bullets,
  } = workData;
  const classes = useStyles();

  const workImages = {
    Acornpack: AcornpackLogo,
    Wayfair: WayfairLogo,
    athenahealth: AthenahealthLogo,
    Chow: ChowImage,
    Journey: JourneyImage,
    iRacing: IRacingImage,
    Surjon: SurjonImage,
    "Ava Labs": AvaLabsImage,
  };

  return (
    <Box className={classes[name]}>
      <Box className={classes.section}>
        <Grid container spacing={4} justify="center">
          <Grid item>
            <ButtonBase href={url} target="_blank">
              <img
                className={classes.image}
                alt="complex"
                src={workImages[name]}
              />
            </ButtonBase>
          </Grid>
          <Grid item sm container>
            <Grid item container direction="column">
              <Grid item>
                <Typography variant="h5" color="textPrimary">
                  {name}
                </Typography>
              </Grid>
              {startDate && endDate && (
                <Grid item>
                  <Typography variant="h6" color="textSecondary">
                    {startDate} - {endDate}
                  </Typography>
                </Grid>
              )}
              <Grid item>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  {title && `${title} `}
                  {description}
                </Typography>
              </Grid>
              <Grid item container spacing={1}>
                {bullets.map((bullet, index) => (
                  <Grid item key={index}>
                    <Typography variant="body1" color="textSecondary">
                      <BulletPoint className={classes.bulletPoint} />
                      {bullet}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1000,
  },
  divider: {
    marginTop: 30,
    backgroundColor: theme.palette.grey[800],
  },
  image: {
    margin: "auto",
    display: "block",
    width: 200,
  },
  bulletPoint: {
    height: 8,
  },
}));

export default WorkEntry;
