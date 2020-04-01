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
        <u>Administrative Regulierung von Schäden:</u> Z. B. Kontakt mit Behörden und der Versicherung aufnehmen, Anzeige bei der Polizei erstatten.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left">
        <u>Sicherung des Eigentums:</u>  Schnelle, zeitweilige Lösungen, um Folgeschäden zu verhindern oder zumindest zu reduzieren.
        Z.B. ein Loch im Dach mit einer Plane abdecken, ein aufgebrochenes Fenster oder eine Tür verschließen oder
        loses Eigentum aus dem Haus  entfernen und einlagern.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Instandsetzung des Eigentums:</u>  Alle notwendigen Maßnahmen, um Ihr Eigentum wieder herzurichten.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Abhängig von der Art der erforderlichen Maßnahmen, sowohl die Sicherung wie auch die Wiederherrichtung Ihres Eigentums betreffend,
        führe ich die Arbeiten entweder selbst aus oder beauftrage zuverlässige andere Handwerker/Firmen.  
      </Typography>
    </div>
    
  );
}

ServicesTextSchadenContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextSchadenContainer);