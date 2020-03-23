import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    fontSize: 25,
  },
};

function ServicesTextMaterialContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        Den här tjänsten är till dig som vill utnyttja tiden i stugan för fullt. Kanske vill du kunna elda
        direkt utan att behöver lägga tid på att skaffa ved. Eller du vill jobba i din trädgård men inte vill
        behöva bry dig om att få bort trädgårdsavfall. Eller du vill bygga eller renovera själv men tycker att
        veckan är för kort för att förlora tid med att köpa materialet eller hantera byggavfallet.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Framställning kan gäller byggmaterial, jord, ved mm. Bortforsling kan bl.a. gäller trädgårds- och byggavfall, skrot och sopor.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        När jag tar hand om avfall, skrot eller sopor åt dig kan du vara säker på att jag följer de regelverk som gäller
        sophantering/återvinning i din kommun. För sopor är dock förutsättningen att de redan är sorterade av dig eller dina gäster enligt föreskrifterna.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        För framställning och bortforsling av större volymer bokas möjligtvis leverans och hämtning genom ett annat företag, 
        beroende på vad som blir mer kostnadseffektiv för dig.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Letar du efter någonting särskilt?</u><br></br>Ibland ska det vara något särskilt, t.ex. en speciell typ av gammal takpanna för att byta ut
        skadade utan att behöva byta ut hela taket. Eller gamla fönster till en trädgårdspaviljong. Eller
        en viss typ av möbel. Eller ...
        Jag bevakar regelbundet marknaden för begagnade saker i Blekinge, södra Kronobergs och
        södra Kalmar län samt i nordöstra Skåne. Och ibland lite större än så.
        Tala om för mig vad du letar efter så håller jag utkik åt dig. Att jag håller utkik får du gratis men
        jag kan såklart inte ge dig en garanti på att jag inte missar någon annons eller överhuvudtaget
        lyckas med att hitta det du söker. Skulle jag hitta det du letar efter kontaktar jag dig och vi
        kommer överens om hur vi går vidare.
      </Typography>
    </div>
    
  );
}

ServicesTextMaterialContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextMaterialContainer);