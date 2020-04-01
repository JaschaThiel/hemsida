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
        Kanske vill du kunna elda direkt utan att behöver lägga tid på att skaffa ved.
        Eller vill du jobba i din trädgård utan att behöva bry dig om att få bort trädgårdsavfall.
        Eller så vill du bygga eller renovera själv men tycker att veckan är för kort
        för att förlora tid med att köpa materialet eller hantera byggavfallet.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Letar du efter någonting särskilt?</u><br></br>
        Ibland ska det vara något särskilt, t.ex. en speciell typ av gammal takpanna för att byta ut skadade utan att behöva byta ut hela taket.
        Eller gamla fönster till en trädgårdspaviljong. Eller en viss typ av möbel. Eller ... <br></br>
        Jag bevakar regelbundet marknaden för begagnade saker i Blekinge, södra Kronobergs och södra Kalmar län samt i nordöstra Skåne.
        Och ibland lite större än så. Tala om för mig vad du letar efter så håller jag utkik åt dig. 
      </Typography>
    </div>
  );
}

ServicesTextMaterialContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextMaterialContainer);