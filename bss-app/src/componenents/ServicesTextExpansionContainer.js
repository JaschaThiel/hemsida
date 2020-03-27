import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ServicesTextTillsynContainer from './textContainers/ServicesTextTillsynContainer';
import ServicesTextSkadehanteringContainer from './textContainers/ServicesTextSkadehanteringContainer';
import ServicesTextTradgardsarbetenContainer from './textContainers/ServicesTextTradgardsarbetenContainer';
import ServicesTextRenoveringContainer from './textContainers/ServicesTextRenoveringContainer';
import ServicesTextMaterialContainer from './textContainers/ServicesTextMaterialContainer';
import ServicesTextSnoContainer from './textContainers/ServicesTextSnoContainer';
import ServicesTextVinterContainer from './textContainers/ServicesTextVinterContainer';
import ServicesTextFastighetContainer from './textContainers/ServicesTextFastighetContainer';
import ServicesTextPrisContainer from './textContainers/ServicesTextPrisContainer';



const styles = {
  root: {
    maxWidth: 1200,
    fontSize: 25,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  heading: {
    flexBasis: '60%',
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
        Nedan hittar du tjänsteutbudet. Klicka på pilen till höger i rutan för att läsa mer och likaså för att minimera rutan igen.
        Behöver du något som inte finns med i tjänsteutbudet? Det är bara att höra av dig till mig så hittar vi en lösning.
      </Typography>
      <Typography variant="inherit" paragraph={true} >
        <b>Jag hugger i där det behövs och drar mig inte för skitjobb!</b><br></br>
      </Typography>
      <Typography variant="inherit" paragraph={true} align ="left" >
        Information om prissättning hittar du längst ner.
      </Typography>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="penel1a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Tillsyn</Typography>
          <Typography align="left" variant="inherit" className={classes.secondaryHeading}></Typography>
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
          <Typography align="left" variant="inherit" className={classes.secondaryHeading}></Typography>
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
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Trädgårdsarbeten</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextTradgardsarbetenContainer></ServicesTextTradgardsarbetenContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="penel4a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Renoverings- och byggarbeten</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextRenoveringContainer></ServicesTextRenoveringContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="penel5a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Framställning och bortforsling av material</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextMaterialContainer></ServicesTextMaterialContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="penel6a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Snöskottning</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextSnoContainer></ServicesTextSnoContainer>
        </ExpansionPanelDetails>        
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="penel7a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Vintersäkring/i bruk sättning av stugan</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextVinterContainer></ServicesTextVinterContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="penel8a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Fastighets- och gästservice</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextFastighetContainer></ServicesTextFastighetContainer>
        </ExpansionPanelDetails>        
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="penel9a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Prissättning</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextPrisContainer></ServicesTextPrisContainer>
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
        English site coming soon, stay tuned!
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