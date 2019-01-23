import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

import ScrollPls from './SrcollPls'

const styles = StyleSheet.create({
    container: {
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    wrapper: {
        fontFamily: '"Patua One", regular',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        scrollSnapAlign: 'start'
    },
    first: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FF926B',
        color: 'white',
    },
    second: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        color: '#424242',
    },
    text: {
        display: 'block'
    },
    big: {
        fontSize: 40
    },
    little: {
        fontSize: 26
    },
    special1: {
        color: '#424242'
    },
    special2: {
        color: '#FF926B'
    }
})

class About extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.wrapper, styles.first) }>
                <div className={ css(styles.text) }>
                    <p><span className={ css(styles.special1) }>ToughNutToCrack</span> is composed of two cores.</p>
                    <p>Studio and Broadcast.</p>
                </div>
                <ScrollPls color='#424242' visible={ true } />
            </div>
            <div className={ css(styles.wrapper, styles.second) }>
                <div className={ css(styles.text) }>
                    <p>We specialized in <span className={ css(styles.special2, styles.big) }>3D graphics </span> and in <span className={ css(styles.special2, styles.big) }>XR </span> software development. </p>
                    <p className={ css(styles.little) }>With a focus on teaching and sharing our experiences.</p>
                </div>
            </div>
        </div>
    );
  }
}

export default About