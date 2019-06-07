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
    backgroundColor:theme.palette.background.white,
    width: '100vw',
    position: 'relative',
    minHeight: '100vh',
  },
  grow: {
    flexGrow: 10,
  },
  appBar: {
    position: 'abslolute',
    backgroundColor: theme.palette.primary.dark,
  },
  buttons: {
    flexGrow : 1,
  },
  seButton: {
    marginLeft: '1vw',
    position: 'auto',
    color: '#212121',
    },
  deButton: {
    marginLeft: '1vw',
    position: 'auto',
    color: '#212121',
  },
  enButton: {
    marginLeft: '1vw',
    position: 'auto',
    color: '#212121',
  },
  tabs: {
    position: 'auto',
    flexGrow: 10,
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
    lang: 'se'
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index,
    });
  };

  changeLang = (language) => {
    var fabID = language[language.length-1];
    fabID === '5' ? this.setState({ lang: 'se'}) : fabID === '6' ? this.setState({ lang: 'de'}) : this.setState({ lang: 'en'});
  };

  componentDidUpdate() {
    this.swipeableActions.updateHeight();
    window.scrollTo(0,0);
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} >
        <Toolbar >
          <Typography variant="h5" color="textPrimary" align="left" className={classes.grow}>
            Blekinge Stugservice
          </Typography>
          <ReactFitText>
          <Tabs
            className={classes.tabs}
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab label={this.state.lang === 'en' ? "Home" : "Start"} />
            <Tab label={this.state.lang === 'se' ? "Tjänster" : this.state.lang === 'de' ? "Dienstleistungen" : "Services"} />
            <Tab label={this.state.lang === 'en' ? "Contact" : "Kontakt"} />
          </Tabs>
          </ReactFitText>
          <div className={classes.buttons} align="right">
          <Fab className={classes.seButton} color={this.state.lang === 'se' ? "secondary" : "primary"} size="small" variant="extended"
          onClick={() => { this.changeLang(this.props.classes.seButton) }} >SE</Fab>
          <Fab className={classes.deButton} color={this.state.lang === 'de' ? "secondary" : "primary"} size="small" variant="extended"
          onClick={() => { this.changeLang(this.props.classes.deButton) }} >DE</Fab>
          <Fab className={classes.enButton} color={this.state.lang === 'en' ? "secondary" : "primary"} size="small" variant="extended"
          onClick={() => { this.changeLang(this.props.classes.enButton) }} >EN</Fab>
          </div>
        </Toolbar>  
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          action={actions => {this.swipeableActions = actions;}}
          animateHeight={true}
          align="center"
        >
          <TabContainer dir={theme.direction}>
          <img className={classes.cropped} src={ require('../images/IMG_7588_cropped5.JPG')} alt="im1" />
          <HeadingContainer language={this.state.lang} />
          <TextContainer language={this.state.lang}/>
          </TabContainer>
          
          <TabContainer dir={theme.direction}>
          <img className={classes.cropped} src={ require('../images/IMG_7715.JPG')} alt="im1"  />
          <ServicesHeadingContainer language={this.state.lang} />
          <ServicesTextContainer language={this.state.lang} />
          </TabContainer>

          <TabContainer dir={theme.direction}>
          <img className={classes.cropped} src={ require('../images/IMG_7638_cropped3.JPG')} alt="im2" />
          <ContactHeadingContainer language={this.state.lang} />
          <ContactTextContainer language={this.state.lang} />
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
