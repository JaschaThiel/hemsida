import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextVinterContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Vintersäkring av stugan omfattar bl.a.
        <ul>
          <li>Avstängning av vatten och tömning av vattensystemet</li>
          <li>Förse vattenlås och golvbrunnar med frostskydd (jag använder endast miljövänlig sådan)</li>
          <li>Säkerställa att dörrar av kyl och frys står på glänt</li>
          <li>Kolla upp ventilationen</li>
          <li>Avstängning av el och utdragning av elektriska kontakter</li>
          <li>Utplacering av fällor i förebyggande syfte</li>
          <li>Ställa undan sopkärl.</li>
        </ul>
        Ifall vattensystemet inte går att tömma ingår påsättning av värmeelement som frostskydd (och då stängs inte av elen så klart).
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Det kan vid behov också ingå tömning av hängrännor (som vid för hög höjd utförs av företag
        med särskild utrustning) samt åtgärder för att föra bort regnvatten från huset om så behövs.
        Även avfrostning samt rengöring av frysskåp och frysfack kan ingå (och ibland kan det inte väljas bort).
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        I bruk sättning av stugan omfattar bl.a.
        <ul>
          <li>Öppning och påfyllning av vattensystemet, påslagning av el</li>
          <li>Spola vattenlås och golvbrunnar</li>
          <li>Sätta på el och sätta i de kontakter som behövs (t.ex. kyl och frys)</li>
          <li>Tömning och borttagning av fällor</li>
          <li>Vädring</li>
          <li>Framställning av sopkärl.</li>
        </ul>
        Ifall vattensystemet inte går att tömma ingår påsättning av värmeelement som frostskydd (och då stängs inte av elen så klart).
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Vår och höst</u><br></br>
        Under våren och hösten finns en del arbeten att göra såsom att flytta ut respektive in trädgårdsmöbler mm.
        Sådant bör göras tidigare under hösten och senare under våren än själva vintersäkringen/i bruk sättning av stugan.
      </Typography>
    </div>
  );
}

ServicesTextVinterContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextVinterContainer);