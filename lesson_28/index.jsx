import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import mainPage from './main.jsx';
import aboutPage from './about.jsx';
import error from './not_found.jsx';
import {Color, Text} from './color';

function Main(){
    return(
      <Router>
        <React.Fragment>
          <Link to='/'>Main</Link>
          <br/>
          <Link to = '/about'>About</Link>
          <Switch>
            <Route path ='/' exact component = {mainPage} />
            <Route path ='/about' exact component = {aboutPage } />
            <Route path ='/color/:color/' exact component = {Color} />
            <Route path = '/color/:color/text/:text' component ={Text}/>
            <Route component = {error} />
          </Switch>
          
        </React.Fragment>
      </Router>
    );
  }
  
  ReactDOM.render(<Main />, document.getElementById('root'));