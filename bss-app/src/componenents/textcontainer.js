import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 1200,
    fontSize: 25,
  },
};

function Types(props) {
  const { classes, language } = props;

  return (

    language === 'se' ? 
    <div className={classes.root}>
      <Typography variant="inherit" paragraph={true} >
      Löksås ipsum hav redan sax där om sax tid gamla del, på groda bra blev ta icke samtidigt enligt se, 
      händer äng mjuka samtidigt år faktor därmed flera nu. Faktor för vidsträckt därmed sitt träutensilierna rännil söka att ingalunda, 
      samma sällan dimma nya häst söka och plats hav, om göras händer av redan söka smultron sig. 
      Fram det se oss i ska bra smultron genom hela tiden sällan som, nu göras regn vi där miljoner det vid häst har. 
      </Typography>
      <Typography variant="inherit" gutterBottom={true} >
      År för det så som gör dunge, annan och år träutensilierna tid, vad verkligen dimma icke redan. 
      Nu ingalunda det sorgliga det äng nya ska dimmhöljd gör, jäst regn bland fram sin fram vi dimma ta, 
      regn dimmhöljd åker för dag mot nya dunge. Bra annan faktor som blivit ska bra på, strand ta sitt icke samma åker, 
      erfarenheter samma det björnbär tid dunge.
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
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Typography>
    <Typography variant="inherit" paragraph={true} >
    Contrary to popular belief, Lorem Ipsum is not simply random text. 
    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
    and going through the cites of the word in classical literature, discovered the undoubtable source. 
    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    </Typography>
    </div>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default withStyles(styles)(Types);