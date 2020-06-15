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
        Gräsklippning och kantskärning, beskärning av buskar och träd, fällning av mindre träd, plantering, bevattning,
        röjning, sågning och klyvning av ved mm. Jag utför de flesta trädgårdsarbeten.
        I viss utsträckning kan jag också hjälpa till med anläggning av t.ex. stigar och annat i trädgården.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Att utföra gräsklippning regelbundet kräver mindre tid, ger en finare gräsmatta och fastigheten ger ett intryck av att vara bebodd,
        vilket minskar risken för inbrott.
      </Typography>
    </div>
  );
}

ServicesTextTradgardsarbetenContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextTradgardsarbetenContainer);