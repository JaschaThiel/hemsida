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

function ServicesTextPreiseContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Die Gegebenheiten der Grundstücke und Häuser, aber auch die Wünsche und Bedürfnisse von Ihnen als Besitzer sind sehr unterschiedlich.
        Gerne erstelle ich Ihnen daher ein individuelles Angebot. Wenn Sie vor Ort sind, ist mein Angebotsbesuch für Sie kostenlos.
        <ul className={classes.bullets} >
          <li>Für die meisten Dienstleistungen/Aufträge kann ich Ihnen einen Festpreis anbieten.</li>
          <li>Es gibt die Möglichkeit, Dienstleistungspakete zu schaffen.
              Auf Pakete mit mindestens 25 Stunden gewähre ich 10% Rabatt.
              Dienstleistungspakete werden monatsweise jeweils zum Ende des Monats in Rechnung gestellt,
              alternativ quartalsweise oder jährlich gegen Vorkasse.</li>
          <li>Um Ihnen einen Anhaltspunkt zu geben: Eine Stunde kostet 400 Kronen exklusive und 500 Kronen inklusive Mehrwertsteuer.</li>
          <li>Bei Projekten mit großem Materialbedarf ist es möglicherweise erforderlich, dass Sie für das Material in Vorkasse treten.</li>
        </ul>
      </Typography>
    </div>
  );
}

ServicesTextPreiseContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextPreiseContainer);