import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

import ScrollPls from './SrcollPls'

const styles = StyleSheet.create({
    container: {
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        overflowX: 'hidden',
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
        fontSize: '3vw',
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
        display: 'block',
        fontSize: '3vw',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '30px',
        }
    },
    big: {
        fontSize: '5vW',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '40px',
        }
    },
    little: {
        fontSize: '2vw',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '22px',
        }
    },
    normal: {
        fontSize: '3vW',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '30px',
        }
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
                    <p><span className={ css(styles.special1, styles.big) }>ToughNutToCrack</span> is composed of two cores.</p>
                    <p>Studio and Broadcast.</p>
                    <p></p><p></p>
                    <p className={ css(styles.little) }>Our specialization is <span className={ css(styles.special1, styles.big) }>3D</span> and <span className={ css(styles.special1, styles.big) }>XR </span> software development. </p>
                    <p className={ css(styles.little) }>With focus on teaching and sharing our experiences.</p>
                </div>
                {/* <ScrollPls color='#424242' visible={ true } />*/}
            </div>
            {/* <div className={ css(styles.wrapper, styles.second) }>
                <div className={ css(styles.text) }>
                    <p>Our specialization is <span className={ css(styles.special2, styles.big) }>3D</span> and <span className={ css(styles.special2, styles.big) }>XR </span> software development. </p>
                    <p className={ css(styles.little) }>With focus on teaching and sharing our experiences.</p>
                </div>
            </div>*/}
        </div>
    );
  }
}

export default About