import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextGartenContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Rasen mähen und Kanten schneiden, Beschneidung von Büschen und Bäumen, Fällen kleinerer Bäume,
        Pflanzungen, Bewässerung, Freischneiden zugewachsener Flächen, Sägen und Hacken von Brennholz und vieles mehr.
        Ich führe die allermeisten Gartenarbeiten aus.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Es ist empfehlenswert, den Rasen regelmäßig zu mähen. Das ist weniger Arbeit als ab und zu eine Wiese sensen zu müssen,
        Der Rasen bekommt eine bessere Qualität und das Grundstück erweckt den
        Eindruck bewohnt zu sein, was das Risiko für Einbrüche verringert.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        In gewissem Umfang kann ich auch behilflich sein mit z. B. der Anlage von Wegen und anderer Gartengestaltung.
      </Typography>
    </div>
    
  );
}

ServicesTextGartenContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextGartenContainer);