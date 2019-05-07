import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 900,
  },
};

function Types(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography color="secondary" component="h2" variant="h1" gutterBottom={true} >
        Välkommen till Blekinge Stugservice
      </Typography>
    </div>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Types);