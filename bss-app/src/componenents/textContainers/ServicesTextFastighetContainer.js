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
        Det är en förutsättning att jag har nycklar eller koder till din fastighet om du önskar tillsynsbesök. 
        En annan fördel för dig skulle vara att jag kan säkerställa tillgängligheten för t.ex. hantverkare, sotare eller städare..
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Turistpärm</u><br></br>
        Jag erbjuder att upprätta en pärm med material kring sevärdheter och andra turistmål samt att uppdatera den årligen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Service kring din eller dina gästers vistelse i stugan</u><br></br>
        Innan ankomsten*
        <ul className={classes.bullets} >
          <li>Borttagning och tömning av fällor</li>
          <li>vädring</li>
          <li>Uppvärmning</li>
        </ul>
        Vid ankomsten
        <ul className={classes.bullets} >
          <li>Nyckelöverlämning</li>
          <li>Hus- och tomtintroduktion</li>
        </ul>
        Under vistelsen
        <ul className={classes.bullets} >
          <li>Kontaktperson för frågor/problem kring fastigheten (gäller kontorstider) </li>
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
        </ul>
        * Under vintertiden tillkommer här flera eller alla tjänster som ingår i ”vintersäkring/i
        bruk sättning”. Se ovan.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Kontaktperson</u><br></br>
        Ibland kan det vara till hjälp att ha någon nära stugan som kan fungera som kontaktperson för
        kommunen, myndigheter, företag eller också grannar.
      </Typography>
    </div>
    
  );
}

ServicesTextFastighetContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextFastighetContainer);