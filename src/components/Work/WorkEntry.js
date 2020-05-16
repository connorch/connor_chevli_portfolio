import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BulletPoint from '@material-ui/icons/FiberManualRecord';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AcornpackLogo from '../../assets/acornpack_logo.svg';
import WayfairLogo from '../../assets/wayfair_logo.svg';
import AthenahealthLogo from '../../assets/athenahealth_logo.svg';
import ChowImage from '../../assets/chow_map.png';
import JourneyImage from '../../assets/journey_screenshot.png';
import { Box, ButtonBase } from '@material-ui/core';

const WorkEntry = ({ workData }) => {
  const { name, title, team, startDate, endDate, bullets } = workData;
  const classes = useStyles();

  const workImages = {
    Acornpack: AcornpackLogo,
    Wayfair: WayfairLogo,
    athenahealth: AthenahealthLogo,
    Chow: ChowImage,
    Journey: JourneyImage
  }


  return (
    <Box className={classes.container}>
      <Grid container spacing={4}>
        <Grid item>
          <ButtonBase>
            <img className={classes.image} alt="complex" src={workImages[name]} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item>
              <Typography variant="h3" >{name}</Typography>
            </Grid>
            {(startDate && endDate) &&
              <Grid item>
                <Typography className={classes.infoText} variant="h6">{startDate} - {endDate}</Typography>
              </Grid>
            }
            <Grid item>
              <Typography className={classes.infoText} variant="h6" gutterBottom>{title} on the {team}</Typography>
            </Grid>
            <Grid item container spacing={1}>
              {bullets.map(bullet => (
                <Grid item>
                  <Typography variant="body1"><BulletPoint className={classes.bulletPoint} />{bullet}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
  image: {
    margin: 'auto',
    display: 'block',
    width: 200,
    // height: 200,
  },
  infoText: {
    textAlign: 'left',
    // [theme.breakpoints.down('xs')]: {
    //   textAlign: 'left'
    // }
  },
  bulletPoint: {
    height: 8
  }
}));

export default WorkEntry;