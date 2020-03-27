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
  bullets: {
    marginTop: '0px',
    marginBottom: '24px',
  },
};

function Types(props) {
  const { classes, language } = props;

  return (

    language === 'se' ? 
    <div className={classes.root}>
      <Typography color="secondary" component="h2" variant="h3" gutterBottom={true} >
          Tillsyn med omsorg
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Blekinge stugservice erbjuder ett brett urval av tjänster kring din stuga. Genom dessa tjänster,
        som kombineras och utformas helt efter dina önskemål och behoven, får du många fördelar:
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Information</b><br></br>
        Du får regelbunden information om din egendom och eventuella händelser. Samtidigt uppfyller du försäkringsbolagens önskemål om regelbunden tillsyn.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Hjälp och stöd</b><br></br>
        Du får hjälp och stöd med många frågor och projekt. Det kan bland annat gälla:
        <ul className={classes.bullets}>
          <li>Trädgård</li>
          <li>Skadehantering</li>
          <li>Renovering och bygg</li>
          <li>Uthyrning</li>
          <li>Drift och underhåll</li>
          <li>Administrativa frågor</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
      <b>Trygghet</b><br></br>
      Rörelse på din fastighet i tider då stugan står tom och ett vårdat intryck av tomten minskar risken för inbrott och skadegörelse.
      Du vet, vad som händer på din tomt och skador kan undvikas eller minimeras.
      Men du får också trygghet i t.ex. att allt är som det ska när du eller dina gäster anländer till stugan. 
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
      <b>Du slipper oroa dig</b><br></br>
      Det finns mycket att oroa sig för. Det kan vara stora grejer som att oroa sig för t.ex.
      inbrott eller stormskador eller mindre grejer som skador genom djur, men också kring hur en renovering ska utföras
      eller vilka formaliteter man behöver ta hänsyn till. Genom tjänsterna som Blekinge stugservice erbjuder slipper du mycket av oron.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
      <b>Återhämtning från dag ett!</b><br></br>
      Men kanske viktigast av allt är att du kan komma till din stuga, njuta av din semester och återhämta dig från första till sista minut.
      </Typography>
      <Typography color="secondary" component="h2" variant="h3" gutterBottom={true} align="left" >
      Jag vet vad jag pratar om
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Torpet vi här i Blekinge bor i permanent sedan 2004 köpte vi redan 1997 som sommarstuga.
        Vi har haft många fina semesterdagar i stugan, men vi har också drabbats av inbrott, stormskador,
        intrång av djur (mest möss och myror) samt frostskador (om jag nu kommer ihåg allt).
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Jag känner väl till oron om egendomen när den står tom de flesta veckorna under året och den stora osäkerheten som inbrott medför.
        Likaså känner jag till de stora frågetecken som man kan står inför t.ex. genom en stormskada.
        För oss bland annat frågan om hur man hanterar en mer än 25 meter lång gran som har lagt sig över ladan.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Innan semestern i stugan kunde börja för oss fanns det alltid mycket att göra.
        Beroende på årstid och väder kunde det ta upp till tre dagar, innan allt var gjort.
        Och ibland var det ganska krävande - att efter en dags resa på kvällen anlända till en stuga där det är lika
        många minusgrader inomhus som utomhus är minst sagt utmanande, särskilt med små barn.
      </Typography>
      <Typography variant="inherit" gutterBottom={true} align="left" >
        Allt arbete som krävs att få tillrätta stugan och trädgården både för att kunna vistas där och för att kunna
        lämna den tom i flera veckor eller månader, men också allt arbete som underhåll och renovering krävs minskar
        inte bara tiden för semester och återhämtning. Den minskar också tiden för mys, lek och upplevelser med dina nära och kära. 
      </Typography>
    </div>
    : language === 'de' ?
    <div className={classes.root}>
    <Typography variant="inherit" paragraph={true} >
      Deutsches Ipsum Dolor deserunt Gemeinsamkeit has Sauerkraut Tollit Anwendungsprogrammierschnittstelle
       ius Faust Saepe Meerschweinchen elaboraret Schnaps ne, Warmduscher eu Warmduscher pertinax, 
       Milchreis eripuit Guten Tag no Gesundheit Diam Weihnachten no Bier eos Ich habe fertig suscipit 
       Die unendliche Geschichte Eam Ampelmännchen offendit Brezel ad Polizei voluptatibus HugoClub Mate ad Umsatzanalyse consul Faust vix. 
       Audi quas Mercedes Benz veritus Lebkuchen latine Siebentausendzweihundertvierundfünfzig complectitur 
       HugoClub Mate mea Die Toten Hosen denique Frau Professor id. Die unendliche Geschichte expetenda Joachim Löw an, 
       Faust ei Fußballweltmeisterschaft euismod Müller Rice Odio Flughafen iracundia Erbsenzähler pri. danke vel Ritter Sport mandamus, 
       Guten Tag natum Wiener Würstchen ei Mettwurst diam Döner honestatis Currywurst nö.
    </Typography>
    <Typography variant="inherit" paragraph={true} >
      quo Faust posidonium Helmut Kohl adhuc Entschuldigung sadipscing Ampelmännchen at, 
      Hochzeit mei Mettwurst gloriatur. Autobahn inermis Fernweh accommodare Oktoberfest 
      Id Warmduscher assum Juttensack te Döner erroribus Welt Nec Riesling amet Bretzel iriure, 
      Knappwurst gloriatur Hackfleisch ut. Käsefondue virtute Faust per Köln At Bier scaevola 
      Ich bin ein Berliner An Schnaps malorum Erbsenzähler ius
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