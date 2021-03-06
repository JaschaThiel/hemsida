import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextSkadehanteringContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Administrativ skadehantering:</u> T.ex. polisanmälan vid inbrott, kontakt med försäkringsbolaget.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left">
        <u>Säkring av egendomen:</u> Snabba och tillfälliga lösningar för att förhindra eller åtminstone minimera följdskador.
        Det kan t.ex. vara att täcka ett hål i taket med en presenning, bomma igen ett uppbrutet fönster eller en dörr,
        tömma huset på lös egendom och förvara detta etc.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Återställning av egendomen:</u> Alla nödvändiga åtgärder för att återställa egendomen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Beroende på typ av åtgärder gällande både säkring och återställning av egendomen utför jag antingen arbetet själv eller
        anlitar andra hantverkare/företag åt dig.
      </Typography>
    </div>
  );
}

ServicesTextSkadehanteringContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextSkadehanteringContainer);