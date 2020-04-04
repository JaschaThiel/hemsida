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

function ServicesTextDEContainer (props) {
  var { classes } = props;

  return (
    <div className={classes.root} >
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Hilfe mit Post</u><br></br>
        Die ersten Jahre, bevor wir Schwedisch gelernt hatten, stellte offizielle Post oft ein Problem dar,
        weil wir nicht richtig verstanden, worum es ging oder was von uns erwartet wurde. Ich kann Ihnen mit diesen Dingen behilflich sein.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Hilfe mit Behörden, Kommunen u. a.</u><br></br>
        Manchmal ist es einfach gut, wenn jemand dabei ist, der der Landessprache mächtig ist.
        Besonders, wenn vielleicht auch das eigene Englisch oder auch das des Gegenübers nicht ganz so sitzt.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Übersetzungen und Dolmetschen</u><br></br>
        Ich kann für Sie Übersetzungen vornehmen oder Ihnen als Dolmetscher beistehen. Dieses gilt Schwedisch-Deutsch/Deutsch-Schwedisch.
      </Typography>
      <Typography variant="inherit" paragraph={true} align="left" >
        <u>Vertretungen</u><br></br>
        Es kommt vor, dass ein Grundbesitz betroffen ist von kommunalen oder staatlichen Projekten,
        z. B. der Schaffung oder Ausweitung von Naturreservaten oder Straßenbauprojekten.
        In diesen Fällen erbitten sich die schwedischen Behörden in der Regel einen Vertreter,
        der vor Ort ist und Schwedisch spricht.
        Ich kann Ihnen anbieten, diese Vertretung für Sie zu übernehmen und habe Erfahrung mit derartigen Situationen und Prozessen. 
      </Typography>
    </div>
  );
}

ServicesTextDEContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesTextDEContainer);