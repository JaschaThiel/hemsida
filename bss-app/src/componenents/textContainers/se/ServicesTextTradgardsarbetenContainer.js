import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextTradgardsarbetenContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Gräsklippning och kantskärning, beskärning av buskar och träd, fällning av mindre träd, plantering,
        bevattning, röjning, sågning och klyvning av ved mm. Jag utför de flesta trädgårdsarbeten.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Gräsklippning är ett arbete som är bra att utföra regelbundet.
        Det är mycket mindre arbete än att då och då behöva slåtta ängen, gräsmattan blir finare och fastigheten ger ett intryck av att vara bebodd,
        vilket minskar risken för inbrott.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        I viss utsträckning kan jag också hjälpa till med anläggning av t.ex. gånger och annat i trädgården.
      </Typography>
    </div>
    
  );
}

ServicesTextTradgardsarbetenContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextTradgardsarbetenContainer);