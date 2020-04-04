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
        Tjänster för dig och din stuga<br></br>i Blekinge och sydöstra Småland
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Blekinge stugservice erbjuder ett brett urval av tjänster - helt efter dina önskemål och behov. Du får många fördelar:
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Hjälp och stöd</b><br></br>
        Du får hjälp och stöd med många frågor och projekt. Det kan bland annat gälla följande områden:
        <ul className={classes.bullets}>
          <li>Trädgård</li>
          <li>Tillsyn</li>
          <li>Skadehantering</li>
          <li>Renovering och bygg</li>
          <li>Uthyrning, gästservice</li>
          <li>Drift och underhåll</li>
          <li>Administrativa frågor</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Information</b><br></br>
        Du får regelbunden information om din egendom, eventuella händelser och behov av åtgärder.
        Samtidigt uppfyller du försäkringsbolagens önskemål om regelbunden tillsyn.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Trygghet</b><br></br>
        Rörelse på din fastighet i tider då stugan står tom och ett vårdat intryck av tomten minskar risken för inbrott och skadegörelse.
        Du vet, vad som händer på din tomt och skador kan undvikas eller minimeras.
        Men du får också trygghet i t.ex. att allt är som det ska när du eller dina gäster anländer till stugan. 
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Återhämtning från dag ett!</b><br></br>
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
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Vi har haft många fina semesterdagar i stugan, men vi har också drabbats av inbrott, stormskador, intrång av djur samt frostskador.
        Jag känner till oron, osäkerheten och rådlösheten som sådana händelser och en på längre perioder obebodd hus medför.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Likaså kommer jag väl ihåg, hur mycket arbete det var att vid ankomsten sätta huset i bruk (särskild vintertiden),
        att fixa trädgården, genomför alla underhållsarbeten och att säkra huset inför nästa period av att står tom.
        Jag tyckte om alla dessa aktiviteter och jobb men det går inte att förbise att det tog tid från semester, familj och återhämtning.
      </Typography>
      <Typography variant="inherit" gutterBottom={true} align="left" >
        Fortfarande känner jag tacksamhet för de människor som med stort och smått bistod oss under alla år.
        Utan dessa människor hade vi framförallt i de första åren stått inför en hel rad problem som vi hade upplevt som oövervinnerlig.
        Det börjar redan med att vi inte hade kunnat köpa huset, eftersom det inte fanns vatten indragen.
        Vi hade ingen aning om hur vi skulle få ihop brunnsborrning samt vattenledningar och avloppssystemet, helt bortsett från de tillstånd som krävdes. 
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Alla dessa erfarenheter, lösta problem, hittade idéer och kontakter är idag en stor del av min kunskapsskatt som jag bygger tjänsterna åt dig på.
      </Typography>
    </div>
    : language === 'de' ?
    <div className={classes.root}>
      <Typography color="secondary" component="h2" variant="h3" gutterBottom={true} >
      Dienstleistungen für Sie und Ihr Ferienhaus<br></br>in Blekinge und dem südöstlichen Småland
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Blekinge Ferienhausservice bietet eine breite Palette an Dienstleistungen - ganz nach Ihren Wünschen und Bedürfnissen. Sie haben viele Vorteile:
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Hilfe und Unterstützung</b><br></br>
        Sie bekommen Hilfe und Unterstützung für viele Fragen und Projekte. Dabei kann es sich u. a. um folgende Bereiche handeln:
        <ul className={classes.bullets}>
          <li>Gartenpflege und -gestaltung</li>
          <li>Kontrollbesuche</li>
          <li>Schadensmanagement</li>
          <li>Renovierungs- und Bauprojekte</li>
          <li>Vermietung, Gästemanagement</li>
          <li>Betrieb und Unterhalt</li>
          <li>Administrative Fragen</li>
        </ul>
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Information</b><br></br>
        Sie erhalten regelmäßig Informationen über Ihr Ferienhaus, über eventuelle Geschehnisse und Handlungsbedarf.
        Damit erfüllen Sie auch den Wunsch der Versicherungsgesellschaften nach regelmäßigen Kontrollbesuchen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Sicherheit</b><br></br>
        Mehr Bewegung auf Ihrem Grundstück zu Zeiten, da Ihr Ferienhaus leer steht,
        sowie ein gepflegter Eindruck minimieren das Risiko für Einbruch und Sachbeschädigung.
        Sie wissen, was auf Ihrem Grundstück passiert und Schäden können vermieden oder zumindest verringert werden.
        Darüber hinaus erhalten Sie aber z.B. auch Sicherheit darüber, dass bei Ihrer Ankunft oder der Ankunft Ihrer Gäste alles so ist, wie es sein soll.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Sie brauchen sich nicht mehr zu beunruhigen</b><br></br>
        Es gibt vieles, worüber man unruhig sein kann. Das können grosse Sachen sein wie z. B.
        Einbruch oder Sturmschäden oder auch kleinere wie etwa Schäden durch Tiere.
        Aber auch Fragen eine bevorstehende Renovierung betreffend und die zu berücksichtigen Formalitäten können beunruhigen.
        Mit den Dienstleistungen von Blekinge Ferienhausservice können Sie sich viele Sorgen ersparen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <b>Erholung vom ersten Tag an!</b><br></br>
        Vielleicht das Wichtigste von allem: Sie können zu Ihrem Ferienhaus kommen und Ihren Urlaub voll und ganz genießen,
        Sie können sich von der ersten bis zur letzten Minute erholen.
        <br></br><br></br>
      </Typography>
      <Typography color="secondary" component="h2" variant="h3" gutterBottom={true} align="left" >
        Ich weiß, wovon ich rede
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Das Haus, in dem wir hier in Blekinge seit 2004 dauerhaft wohnen, hatten wir bereits 1997 als Ferienhaus gekauft.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Wir haben hier viele fantastische Urlaubstage erlebt,
        waren aber auch betroffen von Einbruch, Sturmschäden, Schäden durch Tiere und Frostschäden.
        Ich erinnere die Sorgen, Unsicherheiten und Ratlosigkeiten,
        die solche Ereignisse und ein oft lange leer stehendes Haus mit sich bringen.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Ich erinnere auch gut, wieviel Arbeit es war, das Haus bei Ankunft in Betrieb zu nehmen (insbesondere im Winter),
        den Garten herzurichten, Unterhaltsarbeiten durchzuführen und es für die Zeiten des Leerstands zurecht zu machen.
        All diese Tätigkeiten haben mir durchaus Spaß gemacht, aber es ist auch nicht von der Hand zu weisen,
        dass damit Zeit für Urlaub, Familie und Erholung verloren ging.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        Nach wie vor bin ich den Menschen dankbar, die uns in all den Jahren mit vielen kleinen und großen Dingen beigestanden haben.
        Ohne diese Menschen hätten wir besonders in den ersten Jahren vor einer ganzen Reihe uns unlösbar erscheinender Probleme gestanden.
        Angefangen damit, dass wir das Haus gar nicht hätten kaufen können, denn es gab kein fließendes Wasser und wir hätten nicht gewusst,
        wie wir das Bohren des Brunnens oder den Bau der Frisch- und Abwasseranlage hätten durchführen sollen,
        von den erforderlichen Genehmigungen mal ganz abgesehen.
      </Typography>
      <Typography variant="inherit" gutterBottom={true} align="left" >
        All diese Erlebnisse, gelösten Probleme, gefundenen Ideen und Kontakte bilden einen guten Teil meines Erfahrungsschatzes,
        aus dem ich für meine Dienstleistungen für Sie schöpfe.
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
        Telephone: 012 345 67 89<br></br>
        Mobile: 987 654 32 10<br></br><br></br>
        E-mail: <a href="mailto:gunnar@blekingestugservice.se" >gunnar@blekingestugservice.se</a><br></br><br></br>
        Social media: WhatsApp, Signal, Threema<br></br><br></br>
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