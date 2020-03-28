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
        <u>Wintersicherung des Ferienhauses</u> (und eventueller anderer Gebäude, die einer solchen bedürfen) umfasst unter anderem folgende Leistungen:
        <ul className={classes.bullets} >
          <li>Absperren der Wasserzuleitung und Entleerung des Wassersystems</li>
          <li>Bodenabflüsse und Geruchssperren mit Frostschutz versehen (ich anwende nur umweltfreundliche Mittel)</li>
          <li>Türen von Kühlgeräten öffnen und verhindern, dass diese sich wieder schliessen</li>
          <li>Kontrolle der Ventilation</li>
          <li>Abstellen der Stromversorgung und Herausnahme elektrischer Kontakte</li>
          <li>Aufstellen von Fallen</li>
          <li>Wegstellen von Mülltonnen</li>
        </ul>
        Sollte es nicht möglich sein, dass Wassersystem zu entleeren,
        umfasst Wintersicherung auch das Einschalten von Heizelementen als Frostschutz (und in dem Fall wird der Strom natürlich nicht abgestellt).
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Bei Bedarf können auch Regenrinnen gereinigt werden (was bei grosser Höhe von Firmen mit spezieller Ausrüstung ausgeführt wird)
        und Massnahmen ergriffen werden, um Regen- und Schmelzwasser vom Hause abzuleiten. Ebenfalls kann das Abtauen und
        Reinigen von Kühl- und Gefrierschränken in die Wintersicherung eingehen (und manchmal geht es nicht ohne).
      </Typography>
      <Typography>
        Die hier angebotenen Maßnahmen zur Wintersicherung sind unter Anderem Empfehlungen der Versicherungsgesellschaften.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Inbetriebnahme des Ferienhauses</u> (und eventuell anderer Gebäude) schließt unter anderem folgende Leistungen ein:
        <ul className={classes.bullets} >
          <li>Öffnung der Wasserzuleitung und Befüllung des Wassersystems</li>
          <li>Spülung von Bodenabflüssen und Geruchssperren</li>
          <li>Einschalten des Stromes und Anschließen von Geräten (z. B. Kühl- und Gefrierschrank)</li>
          <li>Entleerung und Entfernung von Fallen</li>
          <li>Durchlüftung</li>
          <li>Aufstellen von Mülltonnen.</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Frühjahr und Herbsts</u><br></br>
        Unter Frühjahr und Herbst fallen einige Arbeiten an, die später bzw. früher ausgeführt werden sollten,
        als die eigentliche Inbetriebnahme oder Wintersicherung. Dies wäre z. B. das Herausholen oder auch Wegräumen von Gartenmöbeln und ähnlichem.
      </Typography>
    </div>
  );
}

ServicesTextWinterContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextWinterContainer);