import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ServicesTextTillsynContainer from './textContainers/se/ServicesTextTillsynContainer';
import ServicesTextSkadehanteringContainer from './textContainers/se/ServicesTextSkadehanteringContainer';
import ServicesTextTradgardsarbetenContainer from './textContainers/se/ServicesTextTradgardsarbetenContainer';
import ServicesTextRenoveringContainer from './textContainers/se/ServicesTextRenoveringContainer';
import ServicesTextMaterialContainer from './textContainers/se/ServicesTextMaterialContainer';
import ServicesTextSnoContainer from './textContainers/se/ServicesTextSnoContainer';
import ServicesTextVinterContainer from './textContainers/se/ServicesTextVinterContainer';
import ServicesTextFastighetContainer from './textContainers/se/ServicesTextFastighetContainer';
import ServicesTextPrisContainer from './textContainers/se/ServicesTextPrisContainer';

//import  from './textContainers/de/';
//import  from './textContainers/de/';
//import  from './textContainers/de/';
//import  './textContainers/de/';
//import  from './textContainers/de/';
//import  from './textContainers/de/';
//import  from './textContainers/de/';
//import  from './textContainers/de/';
//import  from './textContainers/de/';


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
      <Typography variant="inherit" paragraph={true} align="left" >
        Kommt noch ...
      </Typography>
      <Typography variant="inherit" paragraph={true} >
        <b>Kommt noch ...</b><br></br>
      </Typography>
      <Typography variant="inherit" paragraph={true} align ="left" >
        Kommt noch ...
      </Typography>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11a-content"
          id="penel11a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Kommt noch ...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel12a-content"
          id="penel12a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Kommt noch ...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13a-content"
          id="penel13a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Kommt noch ...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel14a-content"
          id="penel14a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Kommt noch ...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel15a-content"
          id="penel15a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Kommt noch ...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel16a-content"
          id="penel16a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Kommt noch ...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>        
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel17a-content"
          id="penel17a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Kommt noch ...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel18a-content"
          id="penel18a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Kommt noch ...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>        
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel19a-content"
          id="penel19a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Kommt noch ...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>        
      </ExpansionPanel>
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