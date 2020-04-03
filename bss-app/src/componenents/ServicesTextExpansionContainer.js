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
import ServicesTextSEContainer from './textContainers/se/ServicesTextSEContainer';
import ServicesTextPrisContainer from './textContainers/se/ServicesTextPrisContainer';

import ServicesTextKontrollContainer from './textContainers/de/ServicesTextKontrollContainer';
import ServicesTextSchadenContainer from './textContainers/de/ServicesTextSchadenContainer';
import ServicesTextGartenContainer from './textContainers/de/ServicesTextGartenContainer';
import ServicesTextRenovierungContainer from './textContainers/de/ServicesTextRenovierungContainer';
import ServicesTextMaterialDEContainer from './textContainers/de/ServicesTextMaterialDEContainer';
import ServicesTextSchneeContainer from './textContainers/de/ServicesTextSchneeContainer';
import ServicesTextWinterContainer from './textContainers/de/ServicesTextWinterContainer';
import ServicesTextGebaudeContainer from './textContainers/de/ServicesTextGebaudeContainer';
import ServicesTextDEContainer from './textContainers/de/ServicesTextDEContainer';
import ServicesTextPreiseContainer from './textContainers/de/ServicesTextPreiseContainer';


const styles = {
  root: {
    maxWidth: 1200,
    fontSize: 25,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  heading: {
    flexBasis: '55%',
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
        Nedan hittar du tjänsteutbudet. Till höger av varje tjänst finns en kort sammanfattning.
        Önskar du mer information kan du utvidga respektive ruta. 
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Behöver du något som inte finns med i tjänsteutbudet? Det är bara att höra av dig till mig så hittar vi en lösning.
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
          <Typography align="left" variant="inherit" className={classes.secondaryHeading}>
            Tillsyn av fastigheten, regelbundet samt efter särskilda händelser</Typography>
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
          <Typography align="left" variant="inherit" className={classes.secondaryHeading}>
          - Administrativ skadehantering<br></br>
          - Säkring av egendomen, minskning av följdskador<br></br>
          - Återställning av egendomen
          </Typography>
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
          <Typography align="left" variant="inherit" className={classes.secondaryHeading}>
            Utförandet av alla trädgårdsarbeten samt mindre anläggningsarbeten
          </Typography>
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
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Renoverig och bygg</Typography>
          <Typography align="left" variant="inherit" className={classes.secondaryHeading}>
            Utförandet av de flesta renoveringsarbeten samt mindre tillbyggnader och fristående byggnader
          </Typography>
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
            <Typography align="left" variant="inherit" className={classes.secondaryHeading}>
              - Framställning av byggmaterial, jord, ved mm<br></br>
              - Bortforsling av trädgårds- och byggavfall, skrot och sopor mm enligt regelverken
            </Typography>
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
          <Typography align="left" variant="inherit" className={classes.secondaryHeading}>Röjning av parkeringsplatser och vägar på din tomt</Typography>
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
            <Typography align="left" variant="inherit" className={classes.secondaryHeading}>
              Åtgärder för att förhindra skador under vintertiden samt för i bruk sättning till våren/innan ett besök.
            </Typography>
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
            <Typography align="left" variant="inherit" className={classes.secondaryHeading}>
              - Nyckelförvaring<br></br>
              - Turistinformation<br></br>
              - Service kring din eller dina gästers vistelse i stugan<br></br>
              - Kontaktperson
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextFastighetContainer></ServicesTextFastighetContainer>
        </ExpansionPanelDetails>        
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="penel8a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Tjänster för svenska kunder</Typography>
            <Typography align="left" variant="inherit" className={classes.secondaryHeading}>
              - Tolkning<br></br>
              - Översättning<br></br>
              - Marknadsföring av din stuga
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextSEContainer></ServicesTextSEContainer>
        </ExpansionPanelDetails>        
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="penel9a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Prissättning</Typography>
          <Typography align="left" variant="inherit" className={classes.secondaryHeading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextPrisContainer></ServicesTextPrisContainer>
        </ExpansionPanelDetails>        
      </ExpansionPanel>
    </div>


    : language === 'de' ?
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} align="left" >
        Nachfolgend die Dienstleistungen, die ich anbiete. Jeweils rechts finden Sie eine kurze Zusammenfassung.
        Wünschen Sie ausführlichere Informationen, erweitern Sie bitte das entsprechende Feld. 
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Fehlt Ihnen etwas in den Angeboten? Haben Sie einen anderen Wunsch oder Bedarf? Fragen Sie mich. Wir finden eine Lösung.
      </Typography>
      <Typography variant="inherit" paragraph={true} align ="left" >
        Am Ende dieser Seite finden Sie Informationen zu Preisen.
      </Typography>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11a-content"
          id="penel11a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Kontrollbesuche</Typography>
          <Typography align="left" color="secondary" variant="inherit" className={classes.secondaryHeading}>
            Kontrolle Ihres Grundstückes, Hauses und anderer Gebäude in regelmäßigen Abständen und nach besonderen Ereignissen
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextKontrollContainer></ServicesTextKontrollContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel12a-content"
          id="penel12a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Schadensmanagement</Typography>
          <Typography align="left" color="secondary" variant="inherit" className={classes.secondaryHeading}>
           - Administrative Schadensregulierung<br></br>- Instandsetzung des Eigentums<br></br>- Instandsetzung des Eigentums
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
          <ServicesTextSchadenContainer></ServicesTextSchadenContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13a-content"
          id="penel13a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Gartenpflege</Typography>
          <Typography align="left" color="secondary" variant="inherit" className={classes.secondaryHeading}>
            Ausführung von Arbeiten zur Gartenpflege und Gartengestaltung
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextGartenContainer></ServicesTextGartenContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel14a-content"
          id="penel14a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Renovierung und Bau</Typography>
          <Typography align="left" color="secondary" variant="inherit" className={classes.secondaryHeading}>
            Ausführung von Renovierungsarbeiten aller Art, sowie kleinerer Bauprojekte
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextRenovierungContainer></ServicesTextRenovierungContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel15a-content"
          id="penel15a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Beschaffung und Entsorgung von Material</Typography>
          <Typography align="left" color="secondary" variant="inherit" className={classes.secondaryHeading}>
            Beschaffung von Baumaterial, Erde, Brennholz u.a.<br></br>
            Vorschriftsmäßige Entsorgung von Garten- und Bauabfällen, Schrott, Müll u.s.w.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextMaterialDEContainer></ServicesTextMaterialDEContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel16a-content"
          id="penel16a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Schnee</Typography>
          <Typography align="left" color="secondary" variant="inherit" className={classes.secondaryHeading}>
            Räumen von Parkplätzen und Wegen auf Ihrem Grundstück
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextSchneeContainer></ServicesTextSchneeContainer>
        </ExpansionPanelDetails>        
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel17a-content"
          id="penel17a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Wintersicherung/Inbetriebnahme des Hauses</Typography>
          <Typography align="left" color="secondary" variant="inherit" className={classes.secondaryHeading}>
            Maßnahmen zur Vermeidung von Schäden im Winter und zur Inbetriebnahme im Frühjahr oder vor einem Besuch
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextWinterContainer></ServicesTextWinterContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanEven} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel18a-content"
          id="penel18a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Gebäude- und Gästeservice</Typography>
          <Typography align="left" color="secondary" variant="inherit" className={classes.secondaryHeading}>
            - Schlüsselverwahrung<br></br>- Touristeninformation<br></br>- Service für Ihren Aufenthalt und den Ihrer Gäste<br></br>
            - Kontaktperson
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextGebaudeContainer></ServicesTextGebaudeContainer>
        </ExpansionPanelDetails>        
      </ExpansionPanel>

      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel19a-content"
          id="penel19a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>
            Dienstleistungen für deutschsprachige Kunden
          </Typography>
          <Typography align="left" color="secondary" variant="inherit" className={classes.secondaryHeading}>
            - Hilfe mit Post in schwedischer Sprache<br></br>
            - Hilfe mit Behörden, Kommunen u. a.<br></br>
            - Übersetzungen und Dolmetscherdienste<br></br>
            - Vertretungen in besonderen Situationen
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextDEContainer></ServicesTextDEContainer>
        </ExpansionPanelDetails>        
      </ExpansionPanel>
      <ExpansionPanel className={classes.expPanOdd} defaultExpanded={false} onChange={() => { this.props.onChange() }}>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel191a-content"
          id="penel191a-header"
        >
          <Typography align="left" color="secondary" variant="inherit" className={classes.heading}>Preise</Typography>
          <Typography align="left" color="secondary" variant="inherit" className={classes.secondaryHeading}>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesTextPreiseContainer></ServicesTextPreiseContainer>
        </ExpansionPanelDetails>        
      </ExpansionPanel>
    </div>
    :
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} align="left" >
        The English site is currently under construction. If you have any questions regarding services,
        feel free to contact me. 
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Gunnar Thiel</b>
        <br></br>
        Telephone: 012 345 67 89<br></br>
        Mobile: 987 654 32 10<br></br><br></br>
        E-mail: <a href="mailto:gunnar@blekingestugservice.se" >gunnar@blekingestugservice.se</a><br></br><br></br>
        Social media: WhatsApp, Signal, Threema<br></br><br></br>
        <u>Phone hours:</u><br></br>
        Weekdays 9 am - 4 pm.<br></br>
        If the phone hours do not work for you, or you have trouble getting a hold of me during them,
        please send me a message and I will get back to you as soon as possible.
        <br></br><br></br>
        <u>Mailing address:</u><br></br>
        Sävsjömålavägen 34<br></br>
        37262 Bräkne-Hoby<br></br>
        Sweden<br></br><br></br>
      </Typography>
      <Typography variant="inherit" gutterBottom={true} align="left" >
        <br></br>
        © blekingestugservice.se 2020 <br></br>
        Photos:    Anna-Lena Thiel <br></br>
        Design:    Jascha Thiel
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