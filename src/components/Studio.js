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
    section: {
        width: '100%',
        height: '100%',
        scrollSnapAlign: 'start'
    },
    divisionsWrapper: {
        fontFamily: '"Patua One", regular',
        height: '100%',
        width: '100%',
        fontSize: '3vh'
    },
    divisionHeader: {
        width: '100%',
        height: '30%',
        float: 'left',
    },
    division: {
        width: '50%',
        height: '70%',
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
    mainText: {
        display: 'block',
    },
    text: {
        display: 'block',
        fontSize: '3vh',
        scrollSnapAlign: 'start',
        '@media screen and (max-width: 880px)': {
            fontSize: '3vw',
        }
    },
    paddingTop: {
        paddingTop: '150px'
    },
    big: {
        fontSize: '5vw'
    },
    little: {
        fontSize: '2vw'
    },
    normal: {
        fontSize: '3vw'
    },
    textRed: {
        color: '#ed1c24'
    },
    textOrange: {
        color: '#FF926B'
    }
})

class Studio extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <div className={ css(styles.mainText) }>
                    <p>With <span className={ css(styles.textRed, styles.big) }>Studio </span>  we realize project toghether starting from your ideas.</p>
                    <p className={ css(styles.little) }>We have a thing for a great design. </p>
                </div>
                <ScrollPls color='#424242' visible={ true } />
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <div className={ css(styles.text) }>
                    <p><span className={ css(styles.textOrange, styles.big) }>Our main services</span></p>
                    <p>3D visualizzation </p>
                    <p>Configurator </p>
                    <p>Training experience </p>
                    <p>Videogames </p>
                    <p>Animated Video </p>
                    <p>Custom experiences</p>
                </div>
                {/* <ScrollPls color='#424242' visible={ true } text={"EXAMPLES"} /> */}
            </div>

            {/* <div className={ css(styles.divisionsWrapper, styles.white) }>
                <div className={ css(styles.divisionHeader) }>
                    <div className={ css(styles.paddingTop) }>
                        <p><span className={ css(styles.textOrange, styles.big) }>Realistic AR application</span></p>
                    </div>
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.paddingTop) }>
                        <p>TESTO</p>
                    </div>
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.paddingTop) }>
                        <p>IMMAGINE</p>
                    </div>
                </div>
            </div>

            <div className={ css(styles.divisionsWrapper, styles.white) }>
                <div className={ css(styles.divisionHeader) }>
                    <div className={ css(styles.paddingTop) }>
                        <p><span className={ css(styles.textOrange, styles.big) }>Tailored study for each experience</span></p>
                    </div>
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.paddingTop) }>
                        <p>IMMAGINE</p>
                    </div>
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.paddingTop) }>
                        <p>TESTO</p>
                    </div>
                </div>
            </div> */}

        </div>
    );
  }
}

export default Studio