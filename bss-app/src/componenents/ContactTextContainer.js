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
        Tveka inte att ringa, jag pratar <b>svenska</b>, <b>tyska</b> och <b>engelska</b>. Jag är tillgänglig vardagar kl. 9:00 - 16:00,
        men det kan vara så att jag är upptagen och därför inte kan svara eller inte hör telefonen.
        Om så är fallet får du gärna lämna ett meddelande på telefonsvararen eller, ännu bättre, skicka ett sms, mejl eller WhatsApp-meddelande.
        Jag hör sedan av mig så fort jag kan.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <br></br>
        <b>Gunnar Thiel</b>
        <br></br><br></br>
        Telefon: +46 72 362 95 14<br></br><br></br>
        E-mail: <a href="mailto:gunnar@blekingestugservice.se" >gunnar@blekingestugservice.se</a><br></br><br></br>
        <u>Telefontider:</u><br></br>
        Vardagar kl. 09:00 - 16:00<br></br>
        Passar inte tiderna dig? Skicka ett meddelande med ett tidsförslag, så ringer jag gärna upp dig.<br></br><br></br>
        <u>Postadress:</u><br></br>
        Blekinge Stugservice <br></br>
        Sävsjömålavägen 34<br></br>
        37262 Bräkne-Hoby<br></br><br></br>

        Jag innehar F-skattsedel.
        <br></br><br></br>
      </Typography>
      
      <Typography color="secondary" component="h2" variant="h3" gutterBottom={true} align="left" >
          Lite om mig
      </Typography>
      
      <Typography variant="inherit" paragraph={true} align="left" >
        Född 1966 i Lübeck, uppvuxen i Hamburg och San Diego, bosatt i Sverige sedan 2004. Gift, två vuxna och utflugna barn.
        Jag har en utbildning i socialt arbete och har jobbat en hel del inom yrket.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Men jag har också många års erfarenhet av arbetet som snickare. Utöver det har jag arbetat ett flertal år som fastighetsskötare,
        lagerarbetare och budbilsförare för en skeppsutrustare i Hamburgs hamn.
        Dessutom har jag arbetat en viss tid som kundtjänstmedarbetare inom ett IT-företag. 
      </Typography>
      <img className={classes.img1} src={ image1} alt="im1" />
      <Typography variant="inherit" gutterBottom={true} align="left" >
        Genom många trädgårds-, renoverings- och byggprojekt på mina och andras fastigheter,
        och genom att ha jobbat mycket med kompisar med olika hantverksyrken har jag skaffat mig omfattande kunskaper som jag nu kan erbjuda dig.
        Jag hugger i där det behövs och drar mig inte för obekväma jobb!
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Mina intresseområden är breda. Hantverk av alla slag, trädgård, odling, matlagning, natur samt hållbarhet,
        både utifrån ett miljö- och ett samhällsperspektiv (om man nu kan skilja på dem).
        Jag gillar att lösa problem och jag tycker om att få ny kunskap.
      </Typography>
      <Typography variant="inherit" gutterBottom={true} align="left" >
        <br></br>
        © blekingestugservice.se 2020 <br></br>
        Foton:    Anna-Lena Thiel <br></br>
        Design:    Jascha Thiel
      </Typography>
    </div>
    : language === 'de' ?
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} align="left" >
        Hier finden Sie Kontaktinformationen und weiter unten erzähle ich kurz über mich.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Zögern Sie nicht, mich anzurufen, ich spreche <b>Deutsch</b>, <b>Schwedisch</b> und <b>Englisch</b>. Sie erreichen mich an Werktagen von 9:00 - 16:00 Uhr.
        Es kann aber sein, dass ich mit etwas beschäftigt bin was mich hindert zu antworten oder was dazu führt,
        dass ich das Telefon nicht höre. Hinterlassen Sie gerne eine Nachricht auf dem Anrufbeantworter oder,
        besser noch, schicken Sie mir eine Mail, SMS, oder Nachricht über WhatsApp.
        Ich melde mich dann so schnell wie möglich bei Ihnen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <br></br>
        <b>Gunnar Thiel</b>
        <br></br><br></br>
        Telefon: +46 72 362 95 14<br></br><br></br>
        E-mail: <a href="mailto:gunnar@blekingestugservice.se" >gunnar@blekingestugservice.se</a><br></br><br></br>
        <u>Telefonzeiten:</u><br></br>
        Werktags 9:00 - 16:00 Uhr<br></br>
        Passen Ihnen die Zeiten nicht? Schicken Sie mir eine Nachricht mit einem Zeitvorschlag, ich rufe Sie dann gerne zurück.<br></br><br></br>
        <u>Anschrift:</u><br></br>
        Blekinge Stugservice<br></br>
        Sävsjömålavägen 34<br></br>
        37262 Bräkne-Hoby<br></br>
        Schweden<br></br><br></br>
        Die Firma ist beim schwedischen Finanzamt registriert.
        <br></br><br></br>
      </Typography>
      
      <Typography color="secondary" component="h2" variant="h3" gutterBottom={true} align="left" >
        Über mich
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Geboren 1966 in Lübeck, aufgewachsen in Hamburg und San Diego. Verheiratet, zwei erwachsene und ausgeflogene Kinder.
        Ich habe eine Ausbildung im Bereich der Sozialen Arbeit und habe einige Jahre in diesem Beruf gearbeitet.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Ich habe aber auch mehrere Jahre als Tischler gearbeitet sowie viele Jahre als Hausmeister,
        Lagerarbeiter und Fahrer für einen Schiffsausrüster im Hamburger Hafen.
        Eine Zeit lang habe ich auch als Kundendienstmitarbeiter für eine Computerfirma gearbeitet.
      </Typography>
      <img className={classes.img1} src={ image1} alt="im1" />
      <Typography variant="inherit" paragraph={true} align="left" >
        Durch viele Garten-, Renovierungs- und Bauprojekte auf und an meinen eigenen und anderen Grundstücken und
        Häusern sowie durch viel Zusammenarbeit mit Freunden mit unterschiedlichen Handwerksausbildungen habe ich mir das
        umfangreiche Wissen verschafft, dass ich Ihnen heute anbieten kann.
        Ich packe da an, wo es nottut und scheue mich nicht vor unbequemen Arbeiten.
      </Typography>
      <Typography variant="inherit" gutterBottom={true} align="left" >
        Meine Interessen sind recht vielfältig. Handwerk jeglicher Art, Garten, Gemüseanbau, Kochen, Natur und Nachhaltigkeit,
        sowohl aus einer Umwelt-, wie auch aus einer Gesellschaftsperspektive (wenn man das denn trennen kann).
        Ich habe Spaß daran, Probleme zu lösen und mir neues Wissen anzueignen.
      </Typography>
      <Typography variant="inherit" gutterBottom={true} align="left" >
        <br></br>
        © blekingestugservice.se 2020 <br></br>
        Fotos:    Anna-Lena Thiel <br></br>
        Design:    Jascha Thiel
      </Typography>
    </div>
    :
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} align="left" >
        The English site is currently under construction. If you have any questions regarding services,
        feel free to contact me. 
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Gunnar Thiel</b>
        <br></br>
        Telephone: +46 72 362 95 14<br></br>
        E-mail: <a href="mailto:gunnar@blekingestugservice.se" >gunnar@blekingestugservice.se</a><br></br><br></br>
        <u>Phone hours:</u><br></br>
        Weekdays 9 am - 4 pm.<br></br>
        If the phone hours do not work for you, or you have trouble getting a hold of me during them,
        please send me a message and I will get back to you as soon as possible.
        <br></br><br></br>
        <u>Mailing address:</u><br></br>
        Sävsjömålavägen 34<br></br>
        37262 Bräkne-Hoby<br></br>
        Sweden<br></br><br></br>
      </Typography>
      <Typography variant="inherit" gutterBottom={true} align="left" >
        <br></br>
        © blekingestugservice.se 2020 <br></br>
        Photos:    Anna-Lena Thiel <br></br>
        Design:    Jascha Thiel
      </Typography>
    </div>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default withStyles(styles)(Types);