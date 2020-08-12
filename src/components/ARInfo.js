import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

import arjsImg from '../assets/images/photo/arjs.png'

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

class ARInfo extends Component {

    render() {
        return (
            <div className={ css(styles.wrapper, styles.responsiveFont) }>
                <p>A Web AR framework for Unity3D.</p>
                <p>**Name** is a bridge between Unity3D and some of the major WEB AR libraries.</p>
                <p>The main idea is to take advantage of these Javascript XR platforms (currently AR.js and WebXR) and port them to the Unity3D ecosystem.</p>
                <p>All you need is to create your standard 3D Unity application, add some ready to use Components from the library, and build for WebGL from Unity. The library does all Unity -> JS conversions under the hood. No need to touch the JS code.</p>
                <p>Currently, we support;</p>
                <img width="100%"  src={ arjsImg } alt=""/>
            </div>
        )
    }
}

export default ARInfo