import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextMaterialContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Den här tjänsten är till dig som vill utnyttja tiden i stugan för fullt.
        Kanske vill du kunna elda direkt utan att behöva lägga tid på att skaffa ved.
        Eller vill du jobba i din trädgård utan att behöva bry dig om att få bort trädgårdsavfall.
        Eller så vill du bygga eller renovera själv men tycker att veckan är för kort för att spendera tid åt att köpa materialet eller hantera byggavfallet.
      </Typography>
    </div>
  );
}

ServicesTextMaterialContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextMaterialContainer);