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
    }
})

class ARSupport extends Component {

    render() {
        return (
            <div className={ css(styles.wrapper, styles.responsiveFont) }>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Maecenas et lectus ut ligula hendrerit dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ut eros et nulla ultrices faucibus quis id sapien. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Maecenas et lectus ut ligula hendrerit dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ut eros et nulla ultrices faucibus quis id sapien.</p>
            </div>
        )
    }
}

export default ARSupport