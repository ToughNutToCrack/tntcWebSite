import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import AFrame from './AFrame';
// import Udemy from './Udemy';
import AboutUs from './AboutUs';
// import Blog from './Blog';
// import Projects from './Projects';

class Content extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path='/' component={AFrame}/> */}
        <Route path='/Home' component={AFrame}/>
        <Route path='/AboutUs' component={AboutUs}/>
        <Redirect to="/Home"/>
      </Switch>
    );
  }
}

export default Content;