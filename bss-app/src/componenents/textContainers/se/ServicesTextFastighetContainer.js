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

function ServicesTextFastighetContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Nyckelförvaring</u><br></br>
        Att ha en uppsättning nycklar till din fastighet på en extern plats nära din fastighet har en del fördelar.
        Exempelvis när du glömmer dina nycklar hemma eller kommer ha gäster i stugan men inte hinner skicka med nycklarna.
        Även tillgängligheten för t.ex. hantverkare, sotare eller städare säkerställs.  
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Turistinformation</u><br></br>
        Jag erbjuder att upprätta en pärm med material kring sevärdheter och andra turistmål samt att uppdatera den årligen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Service kring din eller dina gästers vistelse i stugan</u><br></br>
        Innan ankomsten
        <ul className={classes.bullets} >
          <li>Borttagning och tömning av fällor</li>
          <li>Vädring</li>
          <li>Uppvärmning</li>
          <li>Påfyllning av förbrukningsmaterial (t.ex. disk- och tvättmedel, hushålls- och toapapper)</li>
          <li>Vid behov i bruk sättning av stugan (se ovan)</li>
        </ul>
        Vid ankomsten
        <ul className={classes.bullets} >
          <li>Nyckelöverlämning</li>
          <li>Hus- och tomtintroduktion</li>
        </ul>
        Under vistelsen
        <ul className={classes.bullets} >
          <li>Kontaktperson för frågor/problem kring fastigheten (under telefontiderna)</li>
        </ul>
        Vid avresan
        <ul className={classes.bullets} >
          <li>Hämtning av nyckel</li>
          <li>Slutkontroll (kontroll av inventarier och utförandet av städning)</li>
        </ul>
        Efter avresan
        <ul className={classes.bullets} >
          <li>Slutstädning (jag organiserar slutstädning genom ett städföretag)</li>
          <li>Tvätt (inlämning till och hämtning från tvätteriet)</li>
          <li>Utplacering av fällor</li>
          <li>Vid behov vintersäkring av stugan (se ovan)</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Kontaktperson</u><br></br>
        Ibland kan det vara till hjälp att ha någon nära stugan som kan fungera som kontaktperson för kommunen,
        myndigheter, företag eller också grannar.
      </Typography>
    </div>
  );
}

ServicesTextFastighetContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextFastighetContainer);