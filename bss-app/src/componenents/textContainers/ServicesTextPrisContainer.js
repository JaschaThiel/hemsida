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

function ServicesTextSnoContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Fastigheternas förutsättningar samt ägarnas önskemål och behoven är mycket olika.
        Därför är det inte möjligt att här ange priser för enskilda tjänster.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        När du har berättat för mig vilka tjänster i vilken utformning du önskar och jag har tittat på din fastighet ger jag dig en offert.
        Mitt offertbesök är gratis om du finns på plats. Är du inte på plats kommer du med mitt offertbesök per automatik få ett tillsynsbesök
        som jag fakturerar dig pauschalt med 500:- kr inkl. moms (400:- kr ex. moms).
        <ul className={classes.bullets} >
          <li>För de flesta tjänster/uppdrag kan du få en offert med fast pris.</li>
          <li>Det är möjligt att skapa tjänstepaket enligt dina önskemål och behov.
            På paket med ett fakturavärde över 10000:- kr ger jag 5% rabatt och på paket med ett fakturavärde över 20000:- kr
            får du 10% rabatt.</li>
          <li>I vissa fall kan sammanslagning av tjänster påverkar priset.
            Kan t.ex. gräsklippning och tillsynsbesök ske samtidigt minskas priset för tillsynsbesöket.</li>
          <li>Som riktvärde: En timme kostar 360:- kr exklusive moms, 450:- kr inklusive moms.</li>
          <li>Kunder som uppfyller skatteverkets krav kan få rot- och rutavdrag på för detta godkända tjänster.</li>
        </ul>
      </Typography>
    </div>
  );
}

ServicesTextSnoContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextSnoContainer);