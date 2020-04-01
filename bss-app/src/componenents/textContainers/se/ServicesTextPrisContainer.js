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

function ServicesTextPrisContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Fastigheternas förutsättningar samt dina önskemål och behov som ägare är mycket olika.
        Därför är det inte möjligt att här ange priser för enskilda tjänster.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        När du har berättat för mig vilka tjänster i vilken utformning du önskar och jag har tittat på din fastighet ger jag dig en offert.
        Mitt offertbesök är gratis om du finns på plats. Är du inte på plats kommer du med mitt offertbesök per automatik få ett tillsynsbesök
        som jag fakturerar dig pauschalt med 500:- kr inkl. moms (400:- kr ex. moms).
        <ul className={classes.bullets} >
          <li>För de flesta tjänster/uppdrag kan du få en offert med fast pris.</li>
          <li>I vissa fall kan sammanslagning av tjänster påverkar priset.
              Kan t.ex. gräsklippning och tillsynsbesök sker samtidigt minskas priset för tillsynsbesöket.</li>
          <li>Som riktvärde: En timme kostar 360:- kr exklusive moms, 450:- kr inklusive moms.</li>
          <li>Kunder som uppfyller skatteverkets krav kan få rot- och rutavdrag på för detta godkända tjänster.</li>
          <li>Det är möjligt att skapa tjänstepaket. På paket med ett fakturavärde över 10000:- kr ger jag 5% rabatt,
              över 20000:- kr 10%. Tjänstepaket faktureras månadsvis i efterskott, alternativt kvartals- eller årsvis i förskott.
              Men för att varken lura dig eller mig behöver vi titta på ditt tjänstepaket noggrant.</li>
          <li>För projekt med stort materialbehov behöver du möjligtvis gå i förskott för just materialet.</li>
        </ul>
      </Typography>
    </div>
  );
}

ServicesTextPrisContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextPrisContainer);