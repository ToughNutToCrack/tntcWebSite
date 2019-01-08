import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Header from './components/Header'
import Content from './components/Content'

const styles = StyleSheet.create({
    app: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
    }
})

class App extends Component {
    render() {
        return ( 
            <div className={ css(styles.app) }>
                <Header></Header>
                <Content></Content>
            </div>
        );
    }
}

export default App;