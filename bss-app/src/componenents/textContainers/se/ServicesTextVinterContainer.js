import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
  bullets: {
    marginTop: '0px',
    marginBottom: '24px',
  },
};

function ServicesTextVinterContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Vintersäkring</u> av stugan (och andra byggnader som kräver respektive åtgärder) kan bl. a. omfatta
        <ul className={classes.bullets} >
          <li>Avstängning av vatten och tömning av vattensystemet</li>
          <li>Förse vattenlås och golvbrunnar med frostskydd (jag använder endast miljövänlig sådan)</li>
          <li>Påsättning av värmeelement som frostskydd</li>
          <li>Avstängning av el och utdragning av elektriska kontakter (om inte värmeelement behöver vara påslagna)</li>
          <li>Säkerställa att dörrar av kyl och frys står på glänt</li>
          <li>Avfrostning samt rengöring av kyl- och frysskåp</li>
          <li>Kolla upp ventilationen</li>
          <li>Utplacering av fällor i förebyggande syfte</li>
          <li>Ställa undan sopkärl, trädgårdsmöbler mm</li>
          <li>Tömning av hängrännor</li>
          <li>Åtgärder för att föra bort regn- och smältvatten från huset</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        De här nämnda åtgärder gällande vintersäkring är rekommenderade av bland andra försäkringsbolagen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>I bruk sättning</u> av stugan kan bl. a. omfatta
        <ul className={classes.bullets} >
          <li>Öppning och påfyllning av vattensystemet</li>
          <li>Spola vattenlås och golvbrunnar</li>
          <li>Påslagning av el och isättning av de kontakter som behövs (t.ex. kyl och frys)</li>
          <li>Tömning och borttagning av fällor</li>
          <li>Vädring</li>
          <li>Framställning av sopkärl, trädgårdsmöbler mm</li>
        </ul>
      </Typography>
    </div>
  );
}

ServicesTextVinterContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextVinterContainer);