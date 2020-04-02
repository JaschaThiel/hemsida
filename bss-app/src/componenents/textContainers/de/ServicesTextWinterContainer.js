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

function ServicesTextWinterContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Wintersicherung des Ferienhauses</u> (und eventueller anderer Gebäude, die einer solchen bedürfen) kann u. a. folgende Leistungen umfassen:
        <ul className={classes.bullets} >
          <li>Absperren der Wasserzuleitung und Entleerung des Wassersystems</li>
          <li>Bodenabflüsse und Geruchssperren mit Frostschutz versehen (ich verwende nur umweltfreundliche Mittel)</li>
          <li>Einschalten von Heizelementen als Frostschutz</li>
          <li>Abstellen der Stromversorgung und Herausnahme elektrischer Kontakte (sofern nicht Heizelemente als Frostschutz erforderlich sind)</li>
          <li>Türen von Kühlgeräten öffnen und verhindern, dass diese sich wieder schließen</li>
          <li>Abtauen und Reinigen von Kühl- und Gefrierschrank</li>
          <li>Kontrolle der Ventilation</li>
          <li>Aufstellen von Fallen</li>
          <li>Unterstellen von Mülltonnen, Gartenmöbeln u. Ä.</li>
          <li>Reinigung von Regenrinnen</li>
          <li>Maßnahmen zur Ableitung von Regen- und Schmelzwasser von Gebäudefundamenten</li>
        </ul>
        Die hier angebotenen Maßnahmen zur Wintersicherung sind Empfehlungen von u. a. Versicherungsgesellschaften.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Inbetriebnahme des Ferienhauses</u> (und eventuell anderer Gebäude) kann u. a. folgende Leistungen einschließen::
        <ul className={classes.bullets} >
          <li>Öffnung der Wasserzuleitung und Befüllung des Wassersystems</li>
          <li>Spülung von Bodenabflüssen und Geruchssperren</li>
          <li>Einschalten des Stromes und Anschließen von Geräten (z. B. Kühl- und Gefrierschrank)</li>
          <li>Entleerung und Entfernung von Fallen</li>
          <li>Durchlüftung</li>
          <li>Aufstellen von Mülltonnen, Gartenmöbeln u. Ä.</li>
        </ul>
      </Typography>
    </div>
  );
}

ServicesTextWinterContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextWinterContainer);