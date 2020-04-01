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
        Oder Sie wollen selber bauen oder renovieren, finden aber, dass die Woche zu kurz ist,
        um Zeit für die Beschaffung von Material oder die Entsorgung von Bauabfall zu verwenden.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Suchen Sie nach etwas Bestimmtem?</u><br></br>Manchmal braucht man etwas ganz Bestimmtes, z. B. einen speziellen Typ Dachpfanne,
        um beschädigte auszutauschen und nicht das ganze Dach ersetzen zu müssen.
        Oder alte Fenster für einen Gartenpavillon. Oder Möbel von einem bestimmten Typ. Oder …<br></br>
        Ich besuche regelmäßig Märkte für Gebrauchtes/Antikes in Blekinge, in den südlichen Teilen von Kronoberg und Kalmar,
        sowie im nordöstlichen Schonen. Und manchmal auch weiter weg. Sagen Sie mir, was Sie suchen, ich halte Ausschau für Sie. 
      </Typography>
    </div>
    
  );
}

ServicesTextMaterialDEContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextMaterialDEContainer);