import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextMaterialDEContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Diese Dienstleistung gibt Ihnen die Möglichkeit, die Zeit, die Sie in Ihrem Ferienhaus verbringen, voll auszunutzen.
        Vielleicht wollen Sie direkt bei Ankunft ein gemütliches Feuer im Kamin entzünden, aber keine Zeit mit der Beschaffung von Holz verschwenden.
        Oder Sie wollen im Garten arbeiten, sich aber nicht um den Gartenabfall kümmern müssen.
        Oder Sie wollen selber bauen oder renovieren, finden aber dass die Woche zu kurz ist um Zeit auf die Beschaffung von
        Material oder die Entsorgung von Bauabfall zu legen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Bereitstellung:</u> z. B. Baumaterial, Erde, Brennholz. <br></br><u>Entsorgung:</u>
        Garten- und Bauabfälle, Schrott, Müll jeglicher Art u.s.w.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Bei der Entsorgung von Abfall, Schrott und Müll können Sie sicher sein, dass ich dem in Ihrer Kommune geltenden Regelwerk folge.
        Für Haushaltsmüll ist allerdings Voraussetzung, dass dieser bereits von Ihnen oder Ihren Gästen entsprechend der Vorschriften sortiert ist.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Wenn Bereitstellung oder Entsorgung grosse Mengen betrifft wird eventuell eine andere Firma mit der Lieferung/Abholung beauftragt.
        Dies ist abhängig davon, was für Sie die kostengünstigere Alternative ist.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Suchen Sie nach etwas Bestimmtem?</u><br></br>Manchmal braucht man etwas ganz Bestimmtes, z. B. einen speziellen Typ Dachpfanne,
        um Beschädigte auszutauschen und nicht das ganze Dach ersetzen zu müssen. Oder alte Fenster für einen Gartenpavillon.
        Oder Möbel von einem bestimmten Typ. Oder …<br></br>
        Ich besuche regelmäßig Märkte für Gebrauchtes/Antikes in Blekinge, in den südlichen Teilen von Kronoberg und Kalmar,
        sowie im nordöstlichen Schonen. Und manchmal auch weiter weg. Sagen Sie mir, was sie suchen, ich halte Ausschau für Sie.
        Das ich für Sie Ausschau halte ist gratis, allerdings kann ich Ihnen natürlich keine Garantie geben das ich finde, was Sie suchen.
        Sollte ich aber fündig werden unterrichte ich Sie und wir überlegen, wie ein eventueller Erwerb durchgeführt werden kann.
      </Typography>
    </div>
    
  );
}

ServicesTextMaterialDEContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextMaterialDEContainer);