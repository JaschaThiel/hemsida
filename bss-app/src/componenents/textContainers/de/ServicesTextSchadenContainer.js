import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextSchadenContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Administrative Hantierung von Schäden:</u> Z. B. Anzeige bei der Polizei erstatten, Kontakt mit der Versicherung.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left">
        <u>Sicherung des Eigentums:</u> Schnelle, zeitweilige Lösungen, um Folgeschäden zu verhindern oder zumindest zu reduzieren.
        Z.B. ein Loch im Dach mit einer Plane abdecken, ein aufgebrochenes Fenster
        oder eine Tür zu verschließen oder loses Eigentum aus dem Haus zu entfernen und einzulagern (Einlagerung durch Anmieten von Lagerfläche).
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Wiederherrichtung des Eigentums:</u> Alle notwendigen Maßnahmen, um Ihr Eigentum wieder herzurichten.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Abhängig von der Art der erforderlichen Massnahmen,
        sowohl die Sicherung wie auch die Wiederherrichtung Ihres Eigentums betreffend,
        führe ich die Arbeiten entweder selber aus oder beauftrage andere Handwerker/Firmen. 
      </Typography>
    </div>
    
  );
}

ServicesTextSchadenContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextSchadenContainer);