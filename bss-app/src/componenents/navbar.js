import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    position: 'fixed',
  },
  homeButton: {
    marginLeft: -12,
    marginRight: 40,
  },
  menuButton: {
    marginLeft: -52,
    marginRight: 80,
  },
  langButton: {
    marginRight: 3,
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.root} >
        <Toolbar>
          <IconButton className={classes.homeButton} color="inherit" aria-label="Home">
            <HomeIcon />
          </IconButton>
          <Typography variant="headline" color="inherit" align="left" className={classes.grow}>
            Blekinge Stugservice
          </Typography>
          <Button className={classes.menuButton} color="inherit" variant="outlined" size="large" onClick={() => { console.log('Services'); }} >Tjänster</Button>
          <Button className={classes.menuButton} color="inherit" variant="outlined" size="large" onClick={() => { console.log('Contact'); }} >Kontakt</Button>
          <Button className={classes.langButton} color="inherit" variant="outlined" size="small" onClick={() => { console.log('SE'); }} >SE</Button>
          <Button className={classes.langButton} color="inherit" variant="outlined" size="small" onClick={() => { console.log('DE'); }} >DE</Button>
          <Button className={classes.langButton} color="inherit" variant="outlined" size="small" onClick={() => { console.log('ENG'); }} >ENG</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);