import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    maxWidth: 1200,
    fontSize: 25,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  heading: {
    fontSize: 25,
    //flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    flexBasis: '88.33%',
    fontSize: 20,
    color: '#1b5e20',
  },
  expPanEven: {
    //backgroundColor: 'gainsboro',
    backgroundColor: '#ededed',
  },
  expPanOdd: {
    backgroundColor: 'gainsboro',
    //backgroundColor: '#ededed',
  },
};


class ServicesTextContainer extends React.Component {

  onChange() {
    //console.log('expansionpanel change');
  }

  render () {
  const { classes, language } = this.props;

  return (
    language === 'se' ?
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} >
        Blabla info om tjänster som erbjuds osv. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="penel1a-header"
        >
          <Typography color="secondary" variant="inherit" className={classes.heading}>Tillsyn</Typography>
          <Typography variant="inherit" className={classes.secondaryHeading}>Regelbunden kontroll av egendomen</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" paragraph={true} >
            yada yada dfghjklölkjhgf text om en tjänst som bara visas om man trycker på rubriken.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel  className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="penel2a-header"
        >
          <Typography color="secondary" variant="inherit" className={classes.heading}>Skadehantering</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
          <div>
            <Typography variant="inherit" paragraph={true} >
              Blabla info zu für was man so sein geld ausgeben kann Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="inherit" gutterBottom={true}>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="penel3a-header"
        >
          <Typography variant="inherit" className={classes.heading}>Tjänst 3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" paragraph={true} >
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
          <Typography variant="inherit" className={classes.heading}>Tjänst 4</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" paragraph={true} >
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

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={true} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="penel5a-header"
        >
          <Typography variant="inherit" className={classes.heading}>Tjänst 5</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="inherit" paragraph={true} >
            yada yada dfghjklölkjhgf text om en tjänst som bara visas om man trycker på rubriken.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Typography variant="inherit" gutterBottom={true} >
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