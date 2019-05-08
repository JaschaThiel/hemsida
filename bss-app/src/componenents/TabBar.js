import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ReactFitText from 'react-fittext';
import Fab from '@material-ui/core/Fab';


import ContactTextContainer from './ContactTextContainer';
import ContactHeadingContainer from './ContactHeadingContainer';
import ServicesTextContainer from './ServicesTextContainer';
import ServicesHeadingContainer from './ServicesHeadingContainer';
import HeadingContainer from './headingcontainer';
import TextContainer from './textcontainer';


function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding:0 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
    position: 'relative',
    minHeight: 200,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    position: 'abslolute',
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
    marginRight: '1vw',
    position: 'auto',
    color: 'lightGreen',
  },
  tabs: {
    position: 'auto',
    flexGrow: 1,
  },
  cropped: {
    width: '100%',
    height: '55vh',
    overflow: 'hidden',
    objectFit: 'cover',
  }
});


class TabBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} >
        <Toolbar >
          <Typography variant="headline" color="inherit" align="left" className={classes.grow}>
            Blekinge Stugservice
          </Typography>
          <ReactFitText>
          <Tabs
            className={classes.tabs}
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="centered"
          >
            <Tab label="Start" />
            <Tab label="Tjänster" />
            <Tab label="Kontakt" />
          </Tabs>
          </ReactFitText>
          <Fab className={classes.langButton} color="secondary" size="small" variant="extended" onClick={() => { console.log('SE');}} >SE</Fab>
          <Fab className={classes.langButton} color="secondary" size="small" variant="extended" onClick={() => { console.log('DE');}} >DE</Fab>
          <Fab className={classes.langButton} color="secondary" size="small" variant="extended" onClick={() => { console.log('ENG');}} >EN</Fab>

          
        </Toolbar>  
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          align="center"
        >
          <TabContainer dir={theme.direction}>
          <img className={classes.cropped} src={ require('../images/image1.jpg')} alt="im1" />
          <HeadingContainer />
          <TextContainer />
          </TabContainer>
          
          <TabContainer dir={theme.direction}>
          <img className={classes.cropped} src={ require('../images/image1.jpg')} alt="im1"  />
          <ServicesHeadingContainer />
          <ServicesTextContainer />
          </TabContainer>

          <TabContainer dir={theme.direction}>
          <img className={classes.cropped} src={ require('../images/image2.jpg')} alt="im2" />
          <ContactHeadingContainer />
          <ContactTextContainer />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

TabBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TabBar);
