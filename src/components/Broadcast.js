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
        backgroundColor: '#818285',
        color: '#424242',
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

class Broadcast extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.wrapper, styles.section, styles.black) }>
                <div className={ css(styles.text) }>
                    <p><span className={ css(styles.textRed, styles.big) }>Broadcast</span> is our sharing and learning division.</p>
                    <p> We love create courses and educational contents to share our passion and experiences.</p>
                </div>
                <ScrollPls color='#ffffff' visible={ true } />
            </div>
            
            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <Fade left>
                    <div className={ css(styles.text) }>
                        <p><span className={ css(styles.textRed, styles.big) }>Talks</span></p>
                    </div>
                </Fade>
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <Fade right>
                    <div className={ css(styles.text) }>
                        <p><span className={ css(styles.textRed, styles.big) }>Game Jam</span></p>
                    </div>
                </Fade>
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <Fade left>
                    <div className={ css(styles.text) }>
                        <p><span className={ css(styles.textRed, styles.big) }>Courses</span></p>
                    </div>
                </Fade>
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <Fade right>
                    <div className={ css(styles.text) }>
                        <p><span className={ css(styles.textRed, styles.big) }>Youtube</span></p>
                    </div>
                </Fade>
            </div>

        </div>
    );
  }
}

export default Broadcast