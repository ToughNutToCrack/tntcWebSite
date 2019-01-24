import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import Fade from 'react-reveal/Fade'

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
        fontSize: 32,
        scrollSnapAlign: 'start'
    },
    section: {
        width: '100%',
        height: '100%',
        scrollSnapAlign: 'start'
    },
    divisionsWrapper: {
        fontFamily: '"Patua One", regular',
        height: '100%',
        width: '100%',
        fontSize: 32,
        scrollSnapAlign: 'start'
    },
    division: {
        width: '33.3%',
        height: '100%',
        float: 'left',
    },
    black: {
        backgroundColor: '#000000',
        color: '#ffffff',
    },
    white: {
        backgroundColor: '#ffffff',
        color: '#424242',
    },
    grey: {
        backgroundColor: '#424242',
        color: '#ffffff',
    },
    red: {
        backgroundColor: '#ed1c24',
        color: '#ffffff',
    },
    yellow: {
        backgroundColor: '#fcd703',
        color: '#000000',
    },
    box: {
        boxSizing: 'border-box'
    },
    text: {
        display: 'block'
    },
    paddingTop: {
        paddingTop: '150px'
    },
    big: {
        fontSize: 40
    },
    little: {
        fontSize: 26
    },
    textRed: {
        color: '#ed1c24'
    }
})

class Studio extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.wrapper, styles.section, styles.grey) }>
                <div className={ css(styles.text) }>
                    <p><span className={ css(styles.textRed, styles.big) }>Studio</span></p>
                    <p> xr, desktop, web, mobile, videogame and more.</p>
                </div>
                <ScrollPls color='#ffffff' visible={ true } />
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <Fade right>
                    <div className={ css(styles.text) }>
                        <p><span className={ css(styles.textRed, styles.big) }>XR</span></p>
                    </div>
                </Fade>
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <Fade left>
                    <div className={ css(styles.text) }>
                        <p><span className={ css(styles.textRed, styles.big) }>desktop</span></p>
                    </div>
                </Fade>
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <Fade right>
                    <div className={ css(styles.text) }>
                        <p><span className={ css(styles.textRed, styles.big) }>web</span></p>
                    </div>
                </Fade>
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <Fade right>
                    <div className={ css(styles.text) }>
                        <p><span className={ css(styles.textRed, styles.big) }>mobile</span></p>
                    </div>
                </Fade>
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <Fade right>
                    <div className={ css(styles.text) }>
                        <p><span className={ css(styles.textRed, styles.big) }>videogames</span></p>
                    </div>
                </Fade>
            </div>

        </div>
    );
  }
}

export default Studio