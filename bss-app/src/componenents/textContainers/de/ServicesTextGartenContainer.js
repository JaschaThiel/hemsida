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
        Rasen mähen und Kanten schneiden, Beschneiden von Büschen und Bäumen,
        Fällen kleinerer Bäume, Pflanzungen, Bewässerung, Freischneiden zugewachsener Flächen,
        Sägen und Hacken von Brennholz und vieles mehr.  Ich führe die allermeisten Arbeiten zur Gartenpflege aus.
        In gewissem Umfang kann ich auch behilflich sein z.B. bei der Anlage von Wegen und anderer Gartengestaltung.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Regelmäßiges Mähen des Rasens beansprucht weniger Zeit, gibt dem Rasen eine bessere Qualität und das Grundstück erweckt den Eindruck,
        bewohnt zu sein, was das Risiko für Einbrüche verringert.
      </Typography>
    </div>
    
  );
}

ServicesTextGartenContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextGartenContainer);