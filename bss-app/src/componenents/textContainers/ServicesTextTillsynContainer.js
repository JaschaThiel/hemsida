import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextTillsynContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Regelbunden kontroll av egendomen kan minska risken för inbrott eftersom det blir mer rörelse på tomten.
        Det kan också medföra att skador kan undvikas genom att risker upptäckas innan skadan har skett.
        Och när skadan väl är framme leder en tidig upptäckt till en avsevärd minskning av följdskador
        (vilket är anledningen för att regelbundna tillsynsbesök står långt upp på försäkringsbolagens önskelista).
        Sist men inte minst slipper du som ägare eller dina gäster oönskade överraskningar vid ankomst till stugan.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Tillsynsbesök utförs regelbundet i den takt du önskar, dock oregelbundet på så sätt att det inte skapas ett avläsbart mönster
        (t.ex. någon dag varannan vecka, men inte varannan torsdag). Tillsynsbesök utförs också efter särskilda händelser
        (storm, översvämningar, stora snömängder, skogsbrand mm). Dessa extra besök behöver inte nödvändigtvis medföra ytterligare
        kostnader utan om möjligt förskjuts bara takten av de vanliga tillsynsbesöken.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Tillsynsbesök utförs utomhus (kontroll av tomten och byggnader bl.a. gällande inbrott, skador
        eller risk för skador genom särskilda händelser, skador genom djur) och inomhus (kontroll av
        intrång/skador genom djur, frostskador mm).
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        I tillsynsbesök kan även ingå bl.a.
        <ul>
          <li>Kontroll av timers</li>
          <li>Kontroll av värmeelement (ifall de används som frostskydd)</li>
          <li>Påfyllning av vattenlås och golvbrunnar (som kan torka ut när huset inte används
              en längre tid och då sprider sig en mycket otrevligt lukt)</li>
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