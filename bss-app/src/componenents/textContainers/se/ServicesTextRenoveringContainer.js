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

function ServicesTextRenoveringContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Jag utför de flesta renoveringsarbeten samt mindre tillbyggnader och fristående byggnader som friggebod, Attefallshus, carport, altan mm.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Här finns det flera möjligheter:
        <ul className={classes.bullets} >
          <li>Jag kan hjälpa dig och renovera/bygga med dig tillsammans. Det är oftast enklare och också roligare med fler händer.</li>
          <li>Jag kan också renovera/bygga åt dig när du inte är på plats. Då har du din semester i stugan som riktig semester.
            När renovering eller bygget gäller badrum och kök kan det vara lämpligt att huset inte är bebott under den tiden.</li>
          <li>Vill du göra jobbet själv men behöver rådgivning kring hur kan jag erbjuda dig detta.
            Det mesta vet jag och det jag inte vet vet jag att ta fram.</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        För vissa arbeten, särskild inom vvs och el, behövs behörig hantverkare. Jag kan förmedla
        sådana likaså som andra hantverkare om så behövs eller önskas. Är du inte på plats kan jag se till så att allt blir rätt.
        Och jag kan vara till hjälp med formalia kring ditt bygge/renovering, t.ex. gällande bygglov och andra tillstånd.
      </Typography>
    </div>
  );
}

ServicesTextRenoveringContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextRenoveringContainer);