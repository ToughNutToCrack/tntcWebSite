import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

import AFrame from './AFrame'
import AboutUs from './AboutUs'
import '../transitions/transitions.css'

class Content extends Component {
  render() {
    console.log('key', this.props.location.key)
    return (
      <>
          <AFrame />
          <TransitionGroup>
              <CSSTransition key={ this.props.location.key } timeout={ { enter: 300, exit: 300 } } classNames={ 'fade' }>
                  <Switch location={ this.props.location }>
                      <Route exact path='/about-us' component={ AboutUs }/>
                      {/* <Redirect to="/"/> */}
                  </Switch>
              </CSSTransition>
          </TransitionGroup>
      </>
    );
  }
}

export default withRouter(Content)