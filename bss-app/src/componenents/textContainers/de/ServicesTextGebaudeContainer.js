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

function ServicesTextGebaudeContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Schlüsselverwahrung</u><br></br>
        Einen Satz Schlüssel zu Ihrem Ferienhaus an einem externen Platz in der Nähe Ihres Hauses zu verwahren hat mehrere Vorteile,
        z. B. für den Fall, dass Sie Ihren Schlüssel zuhause vergessen haben oder es nicht möglich war, Ihren Gästen den Schlüssel vorher zu übergeben.
        Auch kann so die Zugänglichkeit sichergestellt werden für z. B. Handwerker, Schornsteinfeger oder Reinigungskräfte.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Touristeninformation</u><br></br>
        Ich biete an, einen Ordner mit Material über Sehenswürdigkeiten und Besuchsziele zu erstellen und diesen jährlich auf den aktuellen Stand zu bringen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Service für Ihren Aufenthalt oder den Aufenthalt Ihrer Gäste im Ferienhaus</u><br></br>
        Vor der Ankunft
        <ul className={classes.bullets} >
          <li>Entfernung und Entleerung von Fallen</li>
          <li>Durchlüftung</li>
          <li>Aufwärmung</li>
          <li>Auffüllen von Vorratsartikeln (z.B. Spül- und Waschmittel, Haushalts- und Toilettenpapier)</li>
          <li>Bei Bedarf weitere Tätigkeiten zur Inbetriebnahme</li>
        </ul>
        Während der Ankunft
        <ul className={classes.bullets} >
          <li>Schlüsselübergabe</li>
          <li>Einführung in Haus und Grundstück</li>
        </ul>
        Während des Aufenthaltes
        <ul className={classes.bullets} >
          <li>Kontaktperson für Fragen/Probleme, die Haus und Grundstück betreffen (während der Telefonzeiten)</li>
        </ul>
        Bei der Abreise
        <ul className={classes.bullets} >
          <li>Abholung der Schlüssel</li>
          <li>Endkontrolle (Kontrolle von Inventar und Ausführung der Reinigung)</li>
        </ul>
        Nach der Abreise
        <ul className={classes.bullets} >
          <li>Endreinigung (Ich organisiere die Ausführung durch eine Reinigungsfirma)</li>
          <li>Abgabe und Abholung von Wäsche bei der Wäscherei</li>
          <li>Aufstellen von Fallen</li>
          <li>Bei Bedarf Wintersicherung</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Kontaktperson</u><br></br>
        Es kann hilfreich sein, jemanden in der Nähe des Hauses zu haben, der als Kontaktperson für Kommunen,
        Behörden, Firmen oder auch Nachbarn fungieren kann.
      </Typography>
    </div>
  );
}

ServicesTextGebaudeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextGebaudeContainer);