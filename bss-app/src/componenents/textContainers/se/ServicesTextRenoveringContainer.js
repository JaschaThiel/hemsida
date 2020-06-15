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
          <li>Jag kan också renovera/bygga åt dig när du inte är på plats. Då har du ordentlig semester när du är i stugan.
              När det gäller renovering eller bygg av kök och badrum kan det vara lämpligt att huset inte är bebott under den tiden.</li>
          <li>Vill du göra jobbet själv men behöver rådgivning kring hur, så kan jag erbjuda det.</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        För vissa arbeten, särskilt inom vvs och el, behövs behörig hantverkare.
        Jag kan förmedla dessa och likaså andra hantverkare om så behövs eller önskas.
        Är du inte på plats kan jag vara det åt dig och se över att saker och ting går rätt till.
        Dessutom kan jag vara till hjälp med formaliteterna kring bygget/ renoveringen, t.ex. gällande bygglov och andra tillstånd.
      </Typography>
    </div>
  );
}

ServicesTextRenoveringContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextRenoveringContainer);