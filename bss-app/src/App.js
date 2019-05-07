import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import './App.css';
import NavBar from './componenents/navbar';

import TabBar from './componenents/TabBar';

import TextContainer from './componenents/textcontainer';
import HeadingContainer from './componenents/headingcontainer';
import theme from './theme'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MuiThemeProvider theme={theme} >
          <TabBar />
        </MuiThemeProvider>
      </header>
    </div>
  );
}

export default App;
