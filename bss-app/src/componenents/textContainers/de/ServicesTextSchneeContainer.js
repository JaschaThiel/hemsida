import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextSchneeContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Ich biete Ihnen an, auf Ihrem Grundstück Schnee zu räumen. Dieses gilt jedoch nicht für Zufahrten oder Wege außerhalb Ihres Grundstückes. 
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Fällt bzw. liegt wenig Schnee, ist es angemessen, regelmäßig zu schieben, damit ein bewohnter Eindruck erweckt wird.
        Ist viel Schnee gefallen, sollte der liegen bleiben, weil das Einbrüche erschwert. In dem Fall wird der Schnee beseitigt,
        kurz bevor Sie oder Ihre Gäste das Haus besuchen möchten.
      </Typography>
    </div>
  );
}

ServicesTextSchneeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextSchneeContainer);