import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route} from 'react-router';

import UploadSuccess from './components/Dummy/index.jsx';
import HomePage from './components/HomePage/index.jsx';
import Dashboard from './components/Dashboard/index.jsx';

injectTapEventPlugin();

// "roboto-and-material-icons-fonts": "^1.0.1",
ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router>
      <Route path="/" component={HomePage}  />
      <Route path="/UploadSuccess" component={UploadSuccess}  />
      <Route path="/dashboard/:name/:pversion" component={Dashboard}  />
    </Router>
  </MuiThemeProvider>
, document.getElementById('content'));
