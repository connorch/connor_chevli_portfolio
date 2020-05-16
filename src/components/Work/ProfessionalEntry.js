import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AcornpackLogo from '../../assets/acornpack_logo.svg';
import WayfairLogo from '../../assets/wayfair_logo.svg'
import AthenahealthLogo from '../../assets/athenahealth_logo.svg'
import { Box } from '@material-ui/core';

const ProfessionalEntry = ({ professionalData }) => {
  const { companyName, title, team, startDate, endDate, bullets } = professionalData;
  const classes = useStyles();

  const logoSVGs = {
    Acornpack: AcornpackLogo,
    Wayfair: WayfairLogo,
    athenahealth: AthenahealthLogo
  }


  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid item>
          <img className={classes.image} alt="complex" src={logoSVGs[professionalData.companyName]} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Grid item container justify="space-between">
                <Grid item>
                  <Typography variant="h4" gutterBottom>{companyName}</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.infoText} variant="h6">{startDate} - {endDate}</Typography>
                  <Typography className={classes.infoText} variant="h6" gutterBottom>{title}</Typography>
                </Grid>
              </Grid>
              {bullets.map(bullet => (
                <Typography variant="body1">- {bullet}</Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  // testing: {
  //   flexGrow:
  // },
  container: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
  image: {
    margin: 'auto',
    display: 'block',
    width: 200,
    height: 200,
  },
  infoText: {
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left'
    }
  }
}));

export default ProfessionalEntry;

















// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Typography } from '@material-ui/core';
// import AcornpackLogo from '../../assets/acornpack_logo.svg';
// import WayfairLogo from '../../assets/wayfair_logo.svg'
// import AthenahealthLogo from '../../assets/acornpack_logo.svg'

// const ProfessionalEntry = ({ professionalData }) => {
//   const classes = useStyles();
//   const logoSVGs = {
//     Acornpack: AcornpackLogo,
//     Wayfair: WayfairLogo,
//     athenahealth: WayfairLogo
//   }
//   console.log(professionalData.bullets);


//   return (
//     <Grid container justify="center" spacing={0}>
//       <Grid item xs={4} />
//       <Grid item xs={2} className={classes.logoImageContainer}>
//         <img className={classes.logoImage} src={logoSVGs[professionalData.companyName]} alt={`${professionalData.companyName}_logo`} />
//       </Grid>
//       <Grid item xs={6}>
//         <Typography variant="h2">{professionalData.companyName}</Typography>
//         <Typography variant="h5">{professionalData.startDate} - {professionalData.endDate}</Typography>
//         {professionalData.bullets.map(bullet => (
//           <Typography>- {bullet}</Typography>
//         ))}
//       </Grid>
//     </Grid>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   logoImageContainer: {
//   },
//   logoImage: {
//     // float: 'right',
//     width: '100%',
//     // maxWidth: '100%'
//   }
// }));

// export default ProfessionalEntry;

