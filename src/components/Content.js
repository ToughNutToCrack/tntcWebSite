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
        <Route exact path='/' component={AFrame}/>
        {/* both /roster and /roster/:number begin with /roster */}
        {/* <Route path='/Home' component={Udemy}/> */}
        <Route path='/about-us' component={AboutUs}/>
        {/* <Route path='/Blog' component={Blog}/> */}
        {/* <Route path='/Projects' component={Projects}/> */}
        {/* <Redirect to="/Home"/> */}
      </Switch>
    );
  }
}

export default Content;