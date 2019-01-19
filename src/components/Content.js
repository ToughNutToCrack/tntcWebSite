import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AFrame from './AFrame'
import AboutUs from './AboutUs'

class Content extends Component {
  render() {
    return (
      <>
          <AFrame />
          <Switch>
              <Route exact path='/about-us' component={ AboutUs }/>
              {/* <Redirect to="/"/> */}
          </Switch>
      </>
    );
  }
}

export default Content;