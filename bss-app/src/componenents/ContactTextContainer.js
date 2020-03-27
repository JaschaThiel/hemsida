import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    maxWidth: 1200,
    fontSize: 25,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  img1: {
    width: '75%',
    height: '55vh',
    overflow: 'hidden',
    objectFit: 'scale-down',
  }
};

const image1 = require('../images/IMG_7681.JPG');

function Types(props) {
  const { classes, language } = props;

  return (
    language === 'se' ?
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} align="left" >
        Här hittar du kontaktuppgifter till mig och längre ner berättar jag lite om mig själv. 
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Jag är tillgänglig på telefon vardagar kl. 9:00 - 16:00, men det kan vara så att jag håller på med någonting
        som gör att jag inte kan svara eller inte hör telefonen. Du får gärna lämna ett meddelande på telefonsvararen eller,
        ännu bättre, skicka ett sms, mejl eller använda nedan nämnda sociala medier. Jag hör sedan av mig så fort jag kan.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Gunnar Thiel</b>
        <br></br>
        Telefon hem: 012 345 67 89<br></br>
        Telefon mobil: 987 654 32 10<br></br><br></br>
        E-mail: gunnar@blekingestugservice.se<br></br><br></br>
        Sociala medier: WhatsApp, Signal, Threema<br></br><br></br>
        <u>Telefontider:</u><br></br>
        Vardagar kl. 09:00 - 16:00<br></br>
        Passar inte tiderna dig? Skicka ett meddelande med ett tidsförslag, så ringer jag upp dig.<br></br><br></br>
        <u>Postadress:</u><br></br>
        Sävsjömålavägen 34<br></br>
        37262 Bräkne-Hoby<br></br><br></br>

        Jag innehar F-skattsedel.
        <br></br><br></br>
      </Typography>
      
      <Typography color="secondary" component="h2" variant="h3" gutterBottom={true} align="left" >
          Lite om mig
      </Typography>
      
      <Typography variant="inherit" paragraph={true} align="left" >
        Född 1966 i Lübeck, uppvuxen i Hamburg och San Diego. Gift, två vuxna och utflugna barn.
        Jag har en utbildning i socialt arbete och jobbat en del i yrket.<br></br><br></br>
        Men jag har också i flera år jobbat som möbelsnickare samt i många år som fastighetsskötare,
        lagerarbetare och budbilsförare för en skeppsutrustare i Hamburgs hamn. Jag har tom jobbat som kundtjänstmedarbetare i ett dataföretag,
        fast jag kan ingenting om datorer. :-)
      </Typography>
      <img className={classes.img1} src={ image1} alt="im1" />
      <Typography variant="inherit" gutterBottom={true} align="left" >
        Genom många trädgårds-, renoverings- och byggprojekt på mina och andras fastigheter,
        och genom att ha jobbat mycket med kompisar med olika hantverksyrken har jag skaffat mig omfattande kunskaper som jag nu kan erbjuda dig.
      <br></br><br></br>
        Mina intresseområden är ganska breda. Hantverk av alla slag och trädgård, odling, matlagning, natur och hållbarhet,
        både utifrån ett miljö- och ett samhällsperspektiv (om man nu kan skilja på dem). Jag gillar att lösa problem och jag tycker om ny kunskap.
      </Typography>
    </div>
    : language === 'de' ?
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} >
        Blabla info zu kontakt undsoweiter bla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
        <img className={classes.img1} src={ image1} alt="im1" />
      <Typography variant="inherit" gutterBottom={true} >
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </div>
    :
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} >
        English site coming soon, stay tuned!
      </Typography>
    </div>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default withStyles(styles)(Types);