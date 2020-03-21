import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
  root: {
    maxWidth: 1200,
    fontSize: 25,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
};

function ServicesTextContainer (props) {
  var { classes, language } = props;

  return (
    language === 'se' ?
    <div className={classes.root} >
      <ExpansionPanel defaultExpanded={true} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="penel1a-header"
        >
          <Typography variant="inherit" className={classes.heading}>Tjänst 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" paragraph={true} >
            yada yada text om en tjänst som bara visas om man trycker på rubriken.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="penel1a-header"
        >
          <Typography variant="inherit" className={classes.heading}>Tjänst 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" gutterBottom={true} >
            yada yada text om en tjänst som bara visas om man trycker på rubriken.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded={true} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="penel1a-header"
        >
          <Typography variant="inherit" className={classes.heading}>Tjänst 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" paragraph={true} >
            yada yada text om en tjänst som bara visas om man trycker på rubriken.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="penel1a-header"
        >
          <Typography variant="inherit" className={classes.heading}>Tjänst 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" gutterBottom={true} >
            yada yada text om en tjänst som bara visas om man trycker på rubriken.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    : language === 'de' ?
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} >
        Blabla info zu für was man so sein geld ausgeben kann Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
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
        Blabla info anbout possible services Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
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

ServicesTextContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default withStyles(styles)(ServicesTextContainer);