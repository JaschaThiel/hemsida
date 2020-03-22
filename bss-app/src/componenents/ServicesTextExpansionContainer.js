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
  heading: {
    fontSize: 25,
    //flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: 'bold',
  },
  secondaryHeading: {
    flexBasis: '88.33%',
    fontSize: 20,
    color: '#1b5e20',
    fontWeight: 'lighter',
  },
  expPanEven: {
    //backgroundColor: 'gainsboro',
    backgroundColor: '#ededed',
    marginTop: '16px',
  },
  expPanOdd: {
    backgroundColor: 'gainsboro',
    marginTop: '16px',
    marginBottom: '16px',
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
        Kanske en liten inledning här? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
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
          <div>
            <Typography variant="inherit" paragraph={true} >
              Regelbunden kontroll av egendomen kan minska risken för inbrott eftersom det blir mer rörelse på tomten.
              Det kan också medföra att skador kan undvikas genom att risker upptäckas innan skadan har skett.
              Och när skadan väl är framme leder en tidig upptäckt till en avsevärd minskning av följdskador
              (vilket är anledningen för att regelbundna tillsynsbesök står långt upp på försäkringsbolagens önskelista).
              Sist men inte minst slipper du som ägare eller dina gäster oönskade överraskningar vid ankomst till stugan.
            </Typography>
            <Typography variant="inherit" paragraph={true} align="left" >
              Tillsynsbesök utförs regelbundet i den takt du önskar, dock oregelbundet på så sätt att det inte skapas ett avläsbart mönster
              (t.ex. någon dag varannan vecka, men inte varannan torsdag). Tillsynsbesök utförs också efter särskilda händelser
              (storm, översvämningar, stora snömängder, skogsbrand mm). Dessa extra besök behöver inte nödvändigtvis medföra ytterligare kostnader
              utan om möjligt förskjuts bara takten av de vanliga tillsynsbesöken.
            </Typography>
            <Typography variant="inherit" paragraph={true} >
              Tillsynsbesök utförs utomhus (kontroll av tomten och byggnader bl.a. gällande inbrott, skador
              eller risk för skador genom särskilda händelser, skador genom djur) och inomhus (kontroll av
              intrång av/skador genom djur, frostskador mm).
              I tillsynsbesök kan även ingå bl.a:
            </Typography>
            <Typography variant="inherit" paragraph={true} align="left" >
              <ul>
                <li>Kontroll av timers</li>
                <li>Kontroll av värmeelement (ifall de används som frostskydd)</li>
                <li>Påfyllning av vattenlås och golvbrunnar (som kan torka ut när huset inte används en längre tid och då sprider sig en mycket otrevligt lukt)</li>
                <li>Uppsättning, kontroll och tömning/byte av fällor</li>
                <li>Omkringflyttande av trädgårdsmöbler och andra föremål (för att skapa intrycket av att huset är bebott)</li>
              </ul>
            </Typography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="penel2a-header"
        >
          <Typography color="secondary" variant="inherit" className={classes.heading}>Skadehantering</Typography>
          <Typography variant="inherit" className={classes.secondaryHeading}>Här kan man ha en kort sammanfattning om det behövs</Typography>
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