import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

//material ui
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

//my components
import Home from './containers/Home';
import FullMovieContainer from './containers/FullMovieContainer';

//styles
import './App.css';
import './styles/styles.css';
import { PATH_HOME, PATH_MOVIE } from './constants/constants';

class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route history={history} exact path={PATH_HOME} component={Home} />
          <Route history={history} path={PATH_MOVIE} component={FullMovieContainer} />
          <Redirect from="/" to={PATH_HOME} />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
