import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
  bullets: {
    marginTop: '0px',
    marginBottom: '24px',
  },
};

function ServicesTextSEContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Tolkning</u><br></br>
        Jag kan erbjuda dig hjälp med tolkning i möte med tyska kunder och företag.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Översättningar och marknadsföring</u><br></br>
        Jag kan ta fram översättningar av t.ex. brev, mejl, pärmen med information kring din stuga, skyltar mm
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Likaså kan jag hjälpa dig med ett bra framträdande på den tyska marknaden, t.ex. på nätet eller med broschyrer,
        främst genom att säkerställa att informationen och texterna som är på tyska är korrekta och begripliga. 
      </Typography>
    </div>
  );
}

ServicesTextSEContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextSEContainer);