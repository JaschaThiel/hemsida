import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import ContactTextContainer from './ContactTextContainer';
import ContactHeadingContainer from './ContactHeadingContainer';
import ServicesTextContainer from './ServicesTextContainer';
import ServicesHeadingContainer from './ServicesHeadingContainer';
import HeadingContainer from './headingcontainer';
import TextContainer from './textcontainer';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
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
  },
  tabs: {
    position: 'auto',
    flexGrow: 1,
  },
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
          <Tabs
            className={classes.tabs}
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="centered"
          >
            <Tab label="Start" />
            <Tab label="Tjänster" />
            <Tab label="Kontakt" />
          </Tabs>
          <Button className={classes.langButton} color="inherit" variant="outlined" size="small" onClick={() => { console.log('SE'); }} >SE</Button>
          <Button className={classes.langButton} color="inherit" variant="outlined" size="small" onClick={() => { console.log('DE'); }} >DE</Button>
          <Button className={classes.langButton} color="inherit" variant="outlined" size="small" onClick={() => { console.log('ENG'); }} >ENG</Button>
        </Toolbar>  
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          align="center"
        >
          <TabContainer dir={theme.direction}>
          <img src={ require('../images/image1.jpg')} alt="im1" width="100%" height="600px" overflow="hidden" />
          <HeadingContainer />
          <TextContainer />
          </TabContainer>
          
          <TabContainer dir={theme.direction}>
          <img src={ require('../images/image1.jpg')} alt="im1" width="100%" height="600px" overflow="hidden" />
          <ServicesHeadingContainer />
          <ServicesTextContainer />
          </TabContainer>

          <TabContainer dir={theme.direction}>
          <img src={ require('../images/image2.jpg')} alt="im2" width="100%" height="600px" />
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
