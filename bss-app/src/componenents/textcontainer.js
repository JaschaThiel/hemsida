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
      <br></br><br></br>
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
      <Typography color="secondary" component="h2" variant="h3" gutterBottom={true} >
        Dein Ferienhaus, Deine Erholung - meine Arbeit      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Blekinge Ferienhausservice bietet eine breite Palette an Dienstleistungen für Sie und Ihr Ferienhaus.
        Durch diese Dienstleistungen, die nach Ihren Wünschen und Bedürfnissen ausgestaltet und kombiniert werden, haben Sie viele Vorteile:
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Information</b><br></br>
        Sie erhalten regelmässig Information über Ihr Ferienhaus und über eventuelle Geschehnisse.
        Damit erfüllen Sie auch den Wunsch der Versicherungsgesellschaften nach regelmässigen Kontrollbesuchen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Hilfe und Unterstützung</b><br></br>
        Sie bekommen Hilfe und Unterstützung für viele Fragen und Projekte. Dabei kann es sich unter anderem um Folgendes handeln:
        <ul className={classes.bullets}>
          <li>Gartenarbeit/-projekte</li>
          <li>Schadenshantierung/-regulierung</li>
          <li>Renovierungs- und Bauprojekte</li>
          <li>Vermietung</li>
          <li>Betrieb und Unterhalt</li>
          <li>Administrative Fragen</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Sicherheit</b><br></br>
        Mehr Bewegung auf Ihrem Grundstück zu Zeiten, da Ihr Ferienhaus leer steht,
        sowie ein gepflegter Eindruck minimieren das Risiko für Einbruch und Sachbeschädigung.
        Sie wissen, was auf Ihrem Grundstück passiert und Schäden können vermieden oder zumindest verringert werden.
        Darüber hinaus erhalten Sie aber z. B. auch Sicherheit darüber, dass bei Ihrer Ankunft oder der Ankunft Ihrer Gäste alles so ist, wie es sein soll.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Sie brauchen sich nicht mehr zu beunruhigen</b><br></br>
        Es gibt vieles, worüber man unruhig sein kann. Das können grosse Sachen sein wie z. B.
        Einbruch oder Sturmschäden oder auch kleinere wie etwa Schäden durch Tiere.
        Aber auch Fragen eine bevorstehende Renovierung betreffend und die zu berücksichtigen Formalitäten können beunruhigen.
        Mit den Dienstleistungen von Blekinge Ferienhausservice können Sie sich viele Sorgen ersparen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Erholung vom ersten Tag!</b><br></br>
        Vielleicht das Wichtigste von allem: Sie können zu Ihrem Ferienhaus kommen und Ihren Urlaub voll und ganz geniessen,
        Sie können sich von der ersten bis zur letzten Minute erholen.
        <br></br><br></br>
      </Typography>
      <Typography color="secondary" component="h2" variant="h3" gutterBottom={true} align="left" >
        Ich weiss, wovon ich rede
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Das Haus, in dem wir hier in Blekinge seit 2004 fest wohnen, hatten wir bereits 1997 als Ferienhaus gekauft.
        Wir haben hier viele fantastische Urlaubstage erlebt, waren aber auch betroffen von Einbruch, Sturmschäden,
        Schäden durch Tiere (hauptsächlich Mäuse und Ameisen) und Frostschäden (falls ich nichts vergessen habe).
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Ich erinnere gut die Unruhe während der meisten Wochen des Jahres, da das Haus leer stand,
        sowie die grosse Unsicherheit, die der Einbruch mit sich brachte.
        Genauso kenne ich die große Ratlosigkeit nach z. B. Sturmschäden.
        Für uns unter anderem die Frage, wie man mit einer mehr als 25 Meter grossen Tanne umgeht, die sich auf die Scheune gelegt hatte.
        Und natürlich erinnere ich mich an die Sorge bei jeder Anreise, ob denn wohl alles gut gehen würde oder welche Schäden und Probleme einen erwarten.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Bevor der Urlaub in unserem Ferienhaus beginnen konnte, gab es immer viel zu tun.
        Abhängig von Jahreszeit und Wetter konnte es bis zu drei Tagen dauern, bis alles erledigt war.
        Und nicht immer war es lustig: Nach einem Tag Reise abends am Ferienhaus ankommen,
        bei dem drinnen genauso viele Minusgrade herrschten wie draussen ist herausfordernd - insbesondere mit kleinen Kindern.
      </Typography>
      <Typography variant="inherit" gutterBottom={true} align="left" >
        Alle Arbeit, um das Ferienhaus herzurichten - sowohl um sich dort aufhalten zu könne,
        wie auch um es für viele Wochen leer stehen zu lassen - aber auch alle Arbeit für Unterhalt und Renovierung
        verkürzt nicht nur die Zeit für Urlaub und Erholung. Sie verringert auch die Zeit für Gemütlichkeit,
        Spiel und Erlebnisse mit den Nächsten und Liebsten.
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