import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import About from './pages/about/about';
import { Chat } from './pages/chat/chat';
import Home from './pages/home/home';
import Header from './header';
function App() {
  return (
    <div className="App">
      <Header />
        <div>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/chat" component={Chat}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
    </div>
  );
}

export default App;
