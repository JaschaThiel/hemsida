import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ReactFitText from 'react-fittext';


const styles = {
  root: {
    width: '100%',
    maxWidth: 900,
    paddingLeft: '10vw',
    paddingRight: '10vw',
  },
};

function Types(props) {
  const { classes, language } = props;

  return (
    language === 'se' ?
    <div className={classes.root}>
      <ReactFitText compressor={1.19} >
        <Typography color="secondary" component="h2" variant="h1" gutterBottom={true} >
          Kontakt
        </Typography>
      </ReactFitText>
    </div>
    : language === 'de' ?
    <div className={classes.root}>
      <ReactFitText compressor={1.19} >
        <Typography color="secondary" component="h2" variant="h1" gutterBottom={true} >
          Kontakt
        </Typography>
      </ReactFitText>
    </div>
    :
    <div className={classes.root}>
      <ReactFitText compressor={1.19} >
        <Typography color="secondary" component="h2" variant="h1" gutterBottom={true} >
          Contact information
        </Typography>
      </ReactFitText>
    </div>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default withStyles(styles)(Types);