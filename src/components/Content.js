import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import AFrame from './AFrame';
import AboutUs from './AboutUs';

class Content extends Component {
  render() {
    return (
        <Switch>
            {/* <Route exact path='/' component={AFrame}/> */}
            <Route path='/' component={ AFrame }/>
            <Route path='/about-us' component={ AboutUs }/>
            <Redirect to="/"/>
        </Switch>
    );
  }
}

export default Content;