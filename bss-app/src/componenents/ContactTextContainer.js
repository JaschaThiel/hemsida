import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    maxWidth: 1200,
    fontSize: 25,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  img1: {
    width: '75%',
    height: '55vh',
    overflow: 'hidden',
    objectFit: 'scale-down',
  }
};

const image1 = require('../images/IMG_7681.JPG');

function Types(props) {
  const { classes, language } = props;

  return (
    language === 'se' ?
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} >
        Blabla om kontakt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
        <img className={classes.img1} src={ image1} alt="im1" />
      <Typography variant="inherit" gutterBottom={true} >
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </div>
    : language === 'de' ?
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} >
        Blabla info zu kontakt undsoweiter bla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
        <img className={classes.img1} src={ image1} alt="im1" />
      <Typography variant="inherit" gutterBottom={true} >
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </div>
    :
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} >
        Blabla about contact info Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
        <img className={classes.img1} src={ image1} alt="im1" />
      <Typography variant="inherit" gutterBottom={true} >
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </div>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default withStyles(styles)(Types);