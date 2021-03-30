import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import ImageZoom from 'react-medium-image-zoom'

import arjsImg from '../assets/images/photo/arjs.png'

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
    pageImage: {
        width: '100%',
        marginBottom: '5%'
    },
    textOrange: {
        color: '#FF926B'
    },
    center: {
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: 'auto'
    },
    responsiveFontTitle: {
        fontFamily: '"Patua One", regular',
        fontSize: '2.3vw',
        '@media screen and (min-width: 1200px) and (orientation: landscape)': {
            fontSize: '1.5vw',
        },
        '@media screen and (min-width: 0px) and (max-width: 880px)': {
            fontSize: '1.8vh'
        },
        '@media screen and (min-height: 332px) and (max-height: 565px)': {
            fontSize: '1.8vh'
        },
        '@media screen and (min-height: 0px) and (max-height: 331px)': {
            fontSize: '2.8vh'
        }
    },
    leftText: {
        textAlign: 'left'
    }

})

class ARInfo extends Component {

    render() {
        return (
            <div className={ css(styles.wrapper, styles.responsiveFont, styles.leftText) }>
                <p>Hi, we are <b>ToughNutToCrack</b>, and making AR experiences is one of the primary services we offer.</p>
                <p>One of the most requested things is to create AR experiences for the Web to avoid forcing the end-user to download a dedicated application.
                   We all know how boring it can be downloading an application that we will use for a limited time. Therefore, you often risk losing a potential customer or limiting the spread of your AR experience.</p>
                <p>Of course, there are some solutions for creating Web AR experiences; however, none of these tools offer the same convenience as a graphic engine as <b>Unity</b>. 
                   Given that Unity is the environment on which we are more experienced, and we have a great knowledge of the web ecosystem in the 3D field, we decided to create <b>{name}</b>.
                </p>
                <p>This library allows you to use Unity to build <b>AR Web applications</b>, working as a bridge between Unity and the best AR libraries available for the Web.</p>

                <p>Our goal is to distribute the code for free and create a good community that supports and evolves the library to grow and stay up to date.
At the moment, this project is carried out in our free time, and therefore has relatively slow growth.
For this reason, we would like to gather all possible support to allow us to speed up the development of this library.
More support will allow us to dedicate more time to implement this project, <b>which will remain free and open source for anyone in any case</b>.
                </p>
                <br></br>
                <p>The roadmap below represents our ideal goals and the features we would like to add to {name}.
At the moment, we are closing the first version that gives you the possibility to create marker-based 3D web applications. The idea is to release this first version and then continue the development enriching with these features. 
Many of these features are experimental and need a dedicated study for the implementation. So the progress of the library will depend on the support and the community feedback.
                </p>
                <p className={ css(styles.textOrange, styles.normal, styles.responsiveFontTitle) }>Roadmap</p>
                <ImageZoom
                   image={ {
                       src: arjsImg,
                       alt: '',
                       className: css(styles.pageImage)
                   } }
                   zoomImage={ {
                       src: arjsImg,
                       alt: ''
                   } }
                />
            </div>
        )
    }
}

export default ARInfo