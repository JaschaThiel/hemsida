import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextSnoContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Jag erbjuder snöskottning <i>på tomten</i>, inte på vägar utanför eller till tomten.
        Är det lite snö kan det vara rimligt att skotta mer regelbundet för att skapa intrycket av att huset är bebott,
        är det mycket snö bör den ligga kvar då det försvårar för tjuvar. Då utförs skottningen innan du eller dina gäster vill komma på besök.
      </Typography>
    </div>
  );
}

ServicesTextSnoContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextSnoContainer);