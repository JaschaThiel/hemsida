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

function ServicesTextTillsynContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Regelbunden kontroll av egendomen kan minska risken för inbrott eftersom det blir mer rörelse på tomten.
        Det kan också medföra att skador kan undvikas genom att risker upptäcks innan skadan har skett.
        Skulle skadan redan vara framme leder en tidig upptäckt till en avsevärd minskning av följdskador.
        Sist men inte minst slipper du som ägare eller dina gäster oönskade överraskningar vid ankomst till stugan.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Tillsynsbesök utförs
        <ul>
          <li>regelbundet i den takt du önskar, samt efter särskilda händelser (storm, översvämningar, stora snömängder, skogsbrand mm)</li>
          <li>utomhus (kontroll av tomten och byggnader bl.a. gällande inbrott, inbrottsförsök, skador
              eller risk för skador genom särskilda händelser eller djur.)</li>
          <li>inomhus (skador genom djur, frostskador mm).</li>
        </ul>
        I tillsynsbesök kan det även ingå bl.a.
        <ul>
          <li>Kontroll av timers</li>
          <li>Kontroll av värmeelement (ifall de används som frostskydd)</li>
          <li>Påfyllning av vattenlås och golvbrunnar (som kan torka ut när huset inte används en längre tid och då sprider sig en mycket otrevligt lukt)</li>
          <li>Uppsättning, kontroll och tömning/byte av fällor</li>
          <li>Omkringflyttande av trädgårdsmöbler och andra föremål (för att skapa intrycket av att huset är bebott)</li>
        </ul>
      </Typography>
    </div>
  );
}

ServicesTextTillsynContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextTillsynContainer);