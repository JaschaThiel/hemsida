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
        Jag tar gärna fram en individuell offert åt dig. Mitt offertbesök är kostnadsfritt om du finns på plats.
        <ul className={classes.bullets} >
          <li>För de flesta tjänster/uppdrag kan du få en offert med fast pris.</li>
          <li>Det är möjligt att köpa timpaket vilket innebär en större flexibilitet för tjänster som är svåra att planera.
              På paket med 25 timmar eller mer ger jag 10% rabatt.
              </li>
          <li>Som riktvärde: En timme kostar 400 kr exklusive moms, 500 kr inklusive moms.</li>
          <li>Kunder som uppfyller skatteverkets krav kan få rot- och rutavdrag på tjänster som är godkända för det.</li>
          <li>För projekt med stort materialbehov behöver du eventuellt gå i förskott för materialet.</li>
        </ul>
      </Typography>
    </div>
  );
}

ServicesTextPrisContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextPrisContainer);