import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

import ScrollPls from './SrcollPls'

import courseLogoImg from '../assets/images/photo/Courses.png'
import youtubeImg from '../assets/images/photo/Youtube.png'

import broadcastVideo from '../assets/video/broadcast.mp4'

const styles = StyleSheet.create({
    container: {
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    wrapper: {
        fontFamily: '"HeadLand One", serif',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2vw'
    },
    section: {
        width: '100%',
        height: '100%'
    },
    divisionsWrapper: {
        fontFamily: '"HeadLand One", serif',
        height: 'calc(100% - 100px)',
        width: '100%',
        fontSize: '2vw',
        display: 'inline-table'
    },
    divisionHeader: {
        width: '100%',
        height: '30%',
        float: 'left',
    },
    division: {
        height: '100%',
        float: 'left',
        width: '50%',
        minWidth: '100px',
        fontSize: '3vh',
        verticalAlign: 'center',
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            width: '100%',
            height: '50%',
            fontSize: '3vw',
        }
    },
    innerDivision: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            height: '90%'
        }
    },
    center: {
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: 'auto'
    },
    center2: {
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: 'auto',
        width: '100%',
        marginTop: '100px'
    },
    responsiveTop: {
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            paddingTop: '10%'
        }
    },
    responsiveFont: {
        fontSize: '2vw',
        '@media screen and (min-width: 1200px) and (orientation: landscape)': {
            fontSize: '1.5vw',
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
    orange: {
        backgroundColor: '#FF926B',
        color: '#ffffff',
    },
    box: {
        boxSizing: 'border-box'
    },
    big: {
        fontFamily: '"Patua One", regular',
        fontSize: '4vW',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '3vw',
        }
    },
    little: {
        fontFamily: '"Patua One", regular',
        fontSize: '2vw',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '22px',
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
    normalxs: {
        fontSize: '1.3vW',
        '@media only screen and (max-width: 880px)': {
            fontSize: '2vw',
        },
        '@media only screen and (max-width: 440px)': {
            fontSize: '3vw',
        },
        '@media only screen and (max-height: 440px)': {
            fontSize: '3vh',
            lineHeight: '5px'
        }
    },
    textRed: {
        color: '#ed1c24'
    },
    textOrange: {
        color: '#FF926B'
    },
    textBlack: {
        color: '#000000'
    },
    textGrey: {
        color: '#424242'
    },
    textWhite: {
        color: '#ffffff'
    },
    textWithShadow: {
        textShadow: '2px 2px black'
    },
    noDecoration: {
        textDecoration: 'none'
    },
    textRight: {
        textAlign: 'right',
        padding: '20px',
        paddingRight: '100px'
    },
    textLeft: {
        textAlign: 'left',
        padding: '20px',
        paddingLeft: '100px'
    },
    width60: {
        width: '55%',
        '@media screen and (max-height: 700px)': {
            width: '55%'
        },
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            width: '35%'
        },
        '@media screen and (min-height: 332px) and (max-height: 650px) and (orientation: portrait)': {
            width: '35%'
        },
        '@media screen and (max-height: 400px) and (orientation: landscape)': {
            width: '35%'
        },
        '@media screen and (min-width: 1000px) and (max-height: 400px) and (orientation: landscape)': {
            width: '15%'
        },
        '@media screen and and (max-width: 1000px) and (max-height: 200px) and (orientation: landscape)': {
            width: '25%'
        }
    },
    hideObject: {
        '@media screen and (max-height: 460px) and (max-width: 426px) and (orientation: portrait)': {
            display: 'none'
        }
    },
    youtubeVideo: {
        marginBottom: '50px',
        '@media screen and (max-height: 700px)': {
            marginBottom: '5px',
        }
    },
    paddingRight: {
        paddingRight: '20px'
    },
    paddingLeft: {
        paddingLeft: '20px'
    },
    videoWrapper: {
        fontFamily: '"HeadLand One", serif',
        height: '100%',
        marginTop: '100px',
        width: '100%',
        fontSize: '2vw',
        display: 'contents'
    },
    videoDiv: {
        padding: '10px',
    },
    overlayVideo: {
        position: 'absolute',
        zIndex: '1', 
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        '@media screen and (min-width: 0px) and (max-width: 1000px)': {
            top: '30%'
        }
    }
})

class Studio2 extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.videoWrapper) }>
                <div className={ css(styles.center2, styles.videoDiv) }>
                    <div className= { css(styles.overlayVideo) }>
                        <p className={ css(styles.normal, styles.textWhite, styles.textWithShadow) }>We create video, interactive applications and innovative realtime 3D solutions for your business.</p>
                    </div>
                    <video width="100%" autoPlay loop>
                        <source src={ broadcastVideo } type="video/mp4" />
                    </video>
                    
                </div>
                
            </div>

            <div className={ css(styles.divisionsWrapper, styles.grey) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div className={ css(styles.responsiveFont, styles.responsiveTop, styles.paddingLeft, styles.paddingRight) }>
                            <p><span className={ css(styles.textOrange, styles.normal, styles.responsiveFont) }>Experts at your service!</span></p>
                            <p>Over these years, we've successfully developed many projects for customers, from the simplest to the complex one. Contact us for more information, to talk about your idea or a quotation. We're always happy to clarify any doubt!</p>                            
                            <p><a className={ css(styles.textGrey, styles.normal, styles.responsiveFont) } href="https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA?sub_confirmation=1"> Subscribe.</a></p>
                            <a href="https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA?sub_confirmation=1"><img className={ css(styles.center, styles.width60) }  src={ youtubeImg } alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div className={ css(styles.responsiveFont, styles.responsiveTop, styles.paddingLeft, styles.paddingRight) }>
                            <a href="https://www.udemy.com/game-development-professionale-con-unity-3d-e-c/?couponCode=NUTTY-WEBSITE"><img className={ css(styles.center, styles.width60) }  src={ courseLogoImg } alt=""/></a>
                            <p><span className={ css(styles.textGrey, styles.normal, styles.responsiveFont) }>Courses</span></p>
                            <p>Teaching the development of 3D applications and videogames is one of our aims.
                               Contact us if you need to organize classrooms about these topics or if you are in search of speakers for an event.</p>
                            <p><a className={ css(styles.textOrange, styles.normal, styles.responsiveFont) } href="https://www.udemy.com/game-development-professionale-con-unity-3d-e-c/?couponCode=NUTTY-WEBSITE"> Check out our Best Seller course!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Studio2