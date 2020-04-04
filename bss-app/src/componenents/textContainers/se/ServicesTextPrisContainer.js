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
        Jag tar gärna fram en individuell offert för dig. Mitt offertbesök är kostnadsfritt om du finns på plats.
        <ul className={classes.bullets} >
          <li>För de flesta tjänster/uppdrag kan du få en offert med fast pris.</li>
          <li>Det är möjligt att skapa tjänstepaket.
              På paket med ett fakturavärde över 10000 kr ger jag 5% rabatt, över 20000 kr 10%.
              Tjänstepaket faktureras månadsvis i efterskott, alternativt kvartals- eller årsvis i förskott.</li>
          <li>Som riktvärde: En timme kostar 360 kr exklusive moms, 450 kr inklusive moms.</li>
          <li>För projekt med stort materialbehov behöver du möjligtvis gå i förskott för materialet.</li>
        </ul>
      </Typography>
    </div>
  );
}

ServicesTextPrisContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextPrisContainer);