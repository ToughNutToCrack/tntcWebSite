import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Header from './components/Header'
import Content from './components/Content'
import Placeholder from './components/Placeholder'

const styles = StyleSheet.create({
    app: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
    }
})

class App extends Component {

    isThree() {
        if (window.location.pathname !== '/three')
          return <><Placeholder /><Header /><Content /></>
        else 
          return <></>
    }

    isWebAR() {
        if (window.location.pathname == '/phoenyx')
          return <></>
    }
    
    render() {
        return ( 
            <div className={ css(styles.app) }>
                {this.isWebAR() || this.isThree()}
            </div>
        );
    }
}

export default App;