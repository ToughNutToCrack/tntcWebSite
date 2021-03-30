import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

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

class ARSupport extends Component {

    render() {
        return (
            <div className={ css(styles.wrapper, styles.responsiveFont, styles.leftText) }>
                <br></br>
                <p>Currently, we can't spend as much time as we would on the project. We're developing it as a <b>side project</b> on free time. We intend to increase our efforts if we see that the library gets positive feedbacks, and the community is interested.</p>
                <p>The best thing you can do to support us is <b>testing our library</b> and let us know, via socials, email, or Discord, your use case and what you think about it.</p>
                <p>We have many ideas about the future of the library, and we are sure that with the right time and dedication, it could be an excellent solution for AR Web.</p>
                <p>We're also thinking about <b>foundrising</b>, if you have any suggestion reach us!</p>
                <div className={ css(styles.placeholder) }></div>
            </div>
        )
    }
}

export default ARSupport