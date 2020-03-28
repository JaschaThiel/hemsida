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

function ServicesTextRenovierungContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Ich führe die meisten Renovierungsarbeiten aus, sowie auch kleinere Anbauten und freistehende Bauten,
        z. B. Schuppen, Gästehäuser (Attefallshus), Carports, Terrassen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Hier gibt es verschiedene Möglichkeiten:
        <ul className={classes.bullets} >
          <li>Ich kann Ihnen helfen und mit Ihnen zusammen renovieren oder bauen. Oft ist es einfacher und auch lustiger mit mehreren Händen.</li>
          <li>Ich kann für Sie bauen oder renovieren, während Ihr Ferienhaus leer steht.
              Da haben Sie Ihren Urlaub als richtigen Urlaub und Sie oder Ihre Gäste werden nicht durch die Arbeiten gestört.
              Renovierung oder auch Bau von Küche und Badezimmer geschieht vorteilhafter Weise, wenn das Haus nicht bewohnt ist.</li>
          <li>Wenn Sie selber bauen oder renovieren wollen, aber Beratung brauchen, kann ich Ihnen diese anbieten.
            Das meiste weiß ich und für den Rest weiß ich, wo ich die Informationen bekomme.</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Für bestimmte Arbeiten, besonders in den Bereichen Wasser und Strom, erfordert es entsprechend ausgebildete Handwerker.
        Wenn nötig und gewünscht kann ich solche wie auch andere Handwerker vermitteln.
        Sind Sie nicht vor Ort kann ich die Abnahme der Arbeiten durchführen.
        Ich kann Ihnen auch behilflich sein mit Formalitäten ihre Renovierung oder Ihren Bau betreffend, z. B. Bau- oder andere Genehmigungen.
      </Typography>
    </div>
  );
}

ServicesTextRenovierungContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextRenovierungContainer);