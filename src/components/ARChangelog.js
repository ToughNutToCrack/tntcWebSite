import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

const name = 'ARWT'

const styles = StyleSheet.create({
    wrapper: {
        fontFamily: '"HeadLand One", serif',
        height: '100%',
        width: '60%',
        fontSize: '2vw',
        display: 'inline-table'
    },
    responsiveFont: {
        fontSize: '2vw',
        '@media screen and (min-width: 1200px) and (orientation: landscape)': {
            fontSize: '1vw',
        },
        '@media screen and (min-width: 0px) and (max-width: 880px)': {
            fontSize: '1.5vh'
        },
        '@media screen and (min-height: 332px) and (max-height: 565px)': {
            fontSize: '1.5vh'
        },
        '@media screen and (min-height: 0px) and (max-height: 331px)': {
            fontSize: '2.5vh'
        }
    },
    normal: {
        fontFamily: '"Patua One", regular',
        fontSize: '2vW',
        '@media only screen and (max-width: 880px)': {
            fontSize: '3vw',
        },
        '@media only screen and (max-width: 440px)': {
            fontSize: '4vw',
        },
        '@media only screen and (max-height: 300px)': {
            fontSize: '4vh',
        },
    },
    textOrange: {
        color: '#FF926B'
    },
    center: {
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: 'auto'
    },
    leftText: {
        textAlign: 'left'
    },
    placeholder: {
        height: '800px'
    }

})

class ARChangelog extends Component {

    render() {
        return (
            <div className={ css(styles.wrapper, styles.responsiveFont, styles.leftText) }>
                <br></br>
                <p><i>16/10/2020</i></p>
                <p><b>V 1.0</b> First release</p>
                <ul>
                    <li>Marker Tracking</li>
                    <li>3 Demo scenes with basic interactions</li>
                </ul>
                <div className={ css(styles.placeholder) }></div>
            </div>
        )
    }
}

export default ARChangelog