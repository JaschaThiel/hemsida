import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ServicesTextTillsynContainer from './textContainers/ServicesTextTillsynContainer';
import ServicesTextSkadehanteringContainer from './textContainers/ServicesTextSkadehanteringContainer';

const styles = {
  root: {
    maxWidth: 1200,
    fontSize: 25,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  heading: {
    flexBasis: '40%',
    fontSize: 25,
    flexShrink: 0,
    fontWeight: 'bold', 
  },
  secondaryHeading: {
    fontSize: 20,
    color: '#1b5e20',
    fontWeight: 'lighter',
  },
  expPanEven: {
    backgroundColor: '#eaeaea',
    marginTop: '16px',
    marginBottom: '16px',
  },
  expPanOdd: {
    //backgroundColor: 'gainsboro',
    backgroundColor: '#f1f1f1',
    marginTop: '16px',
    marginBottom: '16px',
  },
};


class ServicesTextContainer extends React.Component {

  onChange() {
  }

  render () {
  const { classes, language } = this.props;

  return (
    language === 'se' ?
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Kanske en liten inledning här? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
      </Typography>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="penel1a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Tillsyn</Typography>
          <Typography align="left" variant="inherit" className={classes.secondaryHeading}>Regelbunden kontroll av egendomen</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextTillsynContainer></ServicesTextTillsynContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="penel2a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Skadehantering</Typography>
          <Typography align="left" variant="inherit" className={classes.secondaryHeading}>Administrativ och praktisk skadehantering</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
          <ServicesTextSkadehanteringContainer></ServicesTextSkadehanteringContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="penel3a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Tjänst 3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" paragraph={true} align="left" >
            yada yada dfghjklölkjhgf text om en tjänst som bara visas om man trycker på rubriken.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="penel4a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Tjänst 4</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" paragraph={true} align="left" >
            Blabla info zu für was man so sein geld ausgeben kann Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="penel5a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Tjänst 5</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" paragraph={true} align="left" >
            yada yada dfghjklölkjhgf text om en tjänst som bara visas om man trycker på rubriken.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Typography variant="inherit" gutterBottom={true} align="left" >
        Blabla info Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
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
}
ServicesTextContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(ServicesTextContainer);