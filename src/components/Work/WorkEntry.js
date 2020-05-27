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
import { Box, ButtonBase, Divider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const WorkEntry = ({ workData, entryType }) => {
  const { name, title, description, startDate, endDate, bullets } = workData;
  const classes = useStyles();

  const workImages = {
    Acornpack: AcornpackLogo,
    Wayfair: WayfairLogo,
    athenahealth: AthenahealthLogo,
    Chow: ChowImage,
    Journey: JourneyImage
  }

  return (
    <Box className={classes[name]}>
      <Box className={classes.section}>
        <Grid container spacing={4} justify="center">
          <Grid item >
            <ButtonBase>
              <img className={classes.image} alt="complex" src={workImages[name]} />
            </ButtonBase>
          </Grid>
          <Grid item sm container>
            <Grid item container direction="column">
              <Grid item>
                <Typography variant="h5" color="textPrimary">{name}</Typography>
              </Grid>
              {(startDate && endDate) &&
                <Grid item>
                  <Typography variant="h6" color="textSecondary">{startDate} - {endDate}</Typography>
                </Grid>
              }
              <Grid item>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  {title && `${title} on the `}
                  {description}
                </Typography>
              </Grid>
              <Grid item container spacing={1}>
                {bullets.map(bullet => (
                  <Grid item>
                    <Typography variant="body1" color="textSecondary"><BulletPoint className={classes.bulletPoint} />{bullet}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </Box>
    </Box >
  );
}

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
  },
  divider: {
    marginTop: 30,
    backgroundColor: theme.palette.grey[800]
  },
  // Acornpack: {
  //   backgroundColor: deepOrange[100]
  // },
  // Wayfair: {
  //   backgroundColor: deepPurple[100]
  // },
  // athenahealth: {
  //   backgroundColor: lightGreen[100]
  // },
  // Chow: {
  //   backgroundColor: blueGrey[100]
  // },
  // Journey: {
  //   backgroundColor: deepPurple[100]
  // },
  professional: {
    backgroundColor: 'transparent'
  },
  projects: {
    backgroundColor: red[300]
  },
  image: {
    margin: 'auto',
    display: 'block',
    width: 200,
  },
  bulletPoint: {
    height: 8
  }
}));

export default WorkEntry;