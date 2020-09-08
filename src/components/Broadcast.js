import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

import ScrollPls from './SrcollPls'

import courseLogoImg from '../assets/images/photo/studio1.jpg.png'
import youtubeImg from '../assets/images/photo/Youtube.png'
import coursesImg from '../assets/images/photo/GameJam.png'

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
        margin: '100 auto'
    },
    responsiveTop: {
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            paddingTop: '10%'
        }
    },
    responsiveFont: {
        fontSize: '2vw',
        '@media screen and (min-width: 1200px) and (orientation: landscape)': {
            fontSize: '1.2vw',
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
        color: '#1e1e1e',
    },
    grey: {
        backgroundColor: '#1e1e1e',
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
        marginTop: '200px',
        width: '100%',
        fontSize: '2vw',
        display: 'inline-table',
        '@media screen and (max-width: 1544px)': {
            height: '65%',
            marginTop: '120px',
        },
    },
    videoDiv: {
        padding: '10px',
    },
    height80: {
        height: '80%'
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
    patuaFont: {
        fontFamily: '"Patua One", regular'
    },
})

class Broadcast extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.videoWrapper) }>
                <div className={ css(styles.center, styles.videoDiv) }>
                    <video width="100%" autoPlay loop>
                        <source src={ broadcastVideo } type="video/mp4" />
                    </video>
                </div>
                <div className={ css(styles.center, styles.videoDiv) }>
                    <div>
                        <p className={ css(styles.normal) }><span className={ css(styles.textRed) }>Broadcast</span> is our sharing and learning division.</p>
                        <p className={ css(styles.normalxs) }>Youtube Channel</p>
                        <p className={ css(styles.normalxs) }>Unity3D Courses</p>
                        <p className={ css(styles.normalxs) }>Open source projects</p>
                        <p className={ css(styles.normalxs) }></p>
                    </div>
                </div>
            </div>
            <div className={ css(styles.divisionsWrapper, styles.orange) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div className={ css(styles.responsiveFont, styles.responsiveTop, styles.paddingLeft, styles.paddingRight, styles.height80) }>
                            <a href="https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA?sub_confirmation=1"><img className={ css(styles.center, styles.width60) }  src={ youtubeImg } alt=""/></a>
                            <p><span className={ css(styles.textGrey, styles.normal, styles.responsiveFontTitle) }>YouTube</span></p>
                            <p>On Youtube, we share our passion for game development.
                               Here you can find tutorials, suggestions, tools, and more.
                               Our YT page is a way to challenge ourselves continually, and constructively shows our professional skills. </p>
                            <p><a className={ css(styles.textGrey, styles.normal, styles.responsiveFont, styles.patuaFont) } href="https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA?sub_confirmation=1"> Subscribe.</a></p>
                        </div>
                    </div>
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div className={ css(styles.responsiveFont, styles.responsiveTop, styles.paddingLeft, styles.paddingRight, styles.height80) }>
                            <a href="https://www.udemy.com/game-development-professionale-con-unity-3d-e-c/?couponCode=NUTTY-WEBSITE"><img className={ css(styles.center, styles.width60) }  src={ coursesImg } alt=""/></a>
                            <p><span className={ css(styles.textGrey, styles.normal, styles.responsiveFontTitle) }>Courses & Community</span></p>
                            <p>Teaching the development of 3D applications and videogames is one of our aims.
                               Contact us if you need to organize classrooms about these topics or if you are in search of speakers for an event.</p>
                            <p> Join our Discord Community and talk directly to us and to passionate about game development! </p>
                            <p><a className={ css(styles.textGrey, styles.normal, styles.responsiveFont, styles.patuaFont) } href="https://www.udemy.com/game-development-professionale-con-unity-3d-e-c/?couponCode=NUTTY-WEBSITE"> Check out our Best Seller course!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Broadcast