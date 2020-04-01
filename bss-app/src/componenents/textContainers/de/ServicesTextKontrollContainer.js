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

function ServicesTextKontrollContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Regelmäßige Kontrollen Ihres Eigentums führen zu mehr Bewegung auf Ihrem Grundstück,
        was das Risiko für Einbrüche reduzieren kann. Das kann auch dazu beitragen, Schäden zu vermeiden,
        indem Risiken entdeckt werden, bevor der Schaden eingetroffen ist. Wenn ein Schaden eingetreten ist,
        führt ein zeitiges Entdecken zu einer erheblichen Minderung von Folgeschäden.
        Und schließlich: Sie oder Ihre Gäste erleben bei Ankunft am Ferienhaus keine unwillkommenen Überraschungen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Die Durchführung von Kontrollbesuchen geschieht 
        <ul>
          <li>regelmäßig in dem von Ihnen gewünschten Takt,
              sowie nach besonderen Ereignissen (Stürme, Überschwemmungen, große Schneemengen, Waldbrände u.s.w.)</li>
          <li>auf dem Grundstück (Kontrolle des Grundstückes und der Gebäude von außen u.a. betreffend Einbruch oder Einbruchsversuch,
            Schäden oder Risiko für Schäden durch besondere Ereignisse, Schäden durch Tiere)</li>
          <li>und in den Gebäuden (z. B. Schäden durch Tiere, Frostschäden).</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Darüber hinaus können Kontrollbesuche unter anderem folgende Leistungen umfassen:
        <ul className={classes.bullets} >
          <li>Kontrolle von Zeitschaltuhren</li>
          <li>Kontrolle von Heizkörpern (falls diese als Frostschutz angewandt werden)</li>
          <li>Befüllung von Bodenabflüssen und Geruchssperren
              (die austrocknen können, wenn das Haus länger nicht bewohnt ist, und dann fängt es an zu stinken)</li>
          <li>Aufstellung, Kontrolle und Leerung/Austausch von Fallen</li>
          <li>Umstellen von Gartenmöbeln und anderen Gegenständen (um den Eindruck zu erwecken, dass das Haus bewohnt ist).</li>
        </ul>
      </Typography>
    </div>
    
  );
}

ServicesTextKontrollContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextKontrollContainer);