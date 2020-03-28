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
        Daher ist es nicht möglich, hier Preise für einzelne Dienstleistungen zu benennen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Nachdem Sie mir berichtet haben, welche Dienstleistungen in welcher Ausformung Sie sich wünschen und ich mir Ihr
        Grundstück und die Gebäude angesehen habe, bekommen Sie von mir ein Angebot. Wenn Sie vor Ort sind ist mein Angebotsbesuch für Sie umsonst.
        Sind Sie nicht vor Ort erhalten Sie durch meinen Angebotsbesuch automatisch auch einen Kontrollbesuch,
        denen ich Ihnen pauschal mit 500:- Kronen (400:- Kronen exklusive Mehrwertsteuer) in Rechnung stelle.
        <ul className={classes.bullets} >
          <li>Für die meisten Dienstleistungen/Aufträge kann ich Ihnen einen Festpreis anbieten.</li>
          <li>In bestimmten Fällen beeinflusst eine gleichzeitige Ausführung von Dienstleistungen den Preis.
            Findet beispielsweise das Mähen des Rasens und ein Kontrollbesuch gleichzeitig statt,
            verringert sich der Preis für den Kontrollbesuch.</li>
          <li>Als Richtwert: Eine Stunde kostet 360:- Kronen exklusive und 450:- Kronen inklusive Mehrwertsteuer.</li>
          <li>Kunder som uppfyller skatteverkets krav kan få rot- och rutavdrag på för detta godkända tjänster.</li>
          <li>Es gibt die Möglichkeit, Dienstleistungspakete zu schaffen. Auf Pakete mit einem Rechnungswert von über 10000:-
            Kronen gewähre ich 5% Rabatt, über 20000:- Kronen 10%. Dienstleistungspakete werden monatsweise jeweils zum Ende des Monats in Rechnung gestellt,
            alternativ quartalsweise oder jährlich gegen Vorkasse.  Damit aber weder Sie noch ich beschummelt werden,
            müssen wir Ihr Dienstleistungspaket gründlich besprechen.</li>
          <li>Für Projekte mit großem Materialbedarf ist es möglicher Weise erforderlich, dass Sie für eben das Material in Vorkasse treten.</li>
        </ul>
      </Typography>
    </div>
  );
}

ServicesTextPreiseContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextPreiseContainer);