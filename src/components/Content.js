import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CacheRoute from 'react-router-cache-route'
import AFrame from './AFrame'
import AboutUs from './AboutUs'

class Content extends Component {
  render() {
    return (
      <>
          <CacheRoute exact path="/" component={ AFrame } when="always" /> 
          <Switch>
              {/* <Route exact path='/' component={AFrame}/> */}
              <Route exact path='/about-us' component={ AboutUs }/>
              <Redirect to="/"/>
          </Switch>
      </>
    );
  }
}

export default Content;