import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import '../transitions/transitions.css'

import AFrame from './AFrame'
import About from './About'
import Contacts from './Contacts'
import Page from './Page'

class Content extends Component {
  render() {
    return (
      <>
          <AFrameWrapper/>
          <TransitionGroup>
              <CSSTransition key={ this.props.location.key } timeout={ { enter: 300, exit: 300 } } classNames={ 'fade' }>
                  <Switch location={ this.props.location }>
                      <Route exact path='/contacts' component={ Contacts }/>
                      <Route exact path='/about' component={ About }/>
                  </Switch>
              </CSSTransition>
          </TransitionGroup>

          {/* <Redirect to="/"/> */}
      </>
    );
  }
}

class AFrameWrapper extends Component {
  render() {
    return (
      <>
          <AFrame/>
          <Switch location={ this.props.location }>
              <Route exact path='/contacts' component={ Page }/>
              <Route exact path='/about' component={ Page }/>
          </Switch>
      </>
    )
  }
}

export default withRouter(Content)