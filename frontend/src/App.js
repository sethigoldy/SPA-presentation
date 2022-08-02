import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classNames from 'classnames';
import './assets/scss/styles.scss';

import Chat from './pages/chat';
import Join from './pages/join';
import Home from './pages/home';
import About from './pages/about';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      site_loaded: false
    }
  }

  componentDidMount() {
    this.setState({
      site_loaded: true
    });
  }

  render() {
    return (
      <div className={classNames({'App': true, 'site_loaded': this.state.site_loaded})}>
        <Router>
          <Switch>
            <Route path="/chat/:name/:room" component={Chat} />
            <Route path="/about" component={About} />
            <Route path="/join" component={Join} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
