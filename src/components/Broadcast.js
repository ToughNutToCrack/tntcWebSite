import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

import ScrollPls from './SrcollPls'

// import talksImg from '../assets/images/photo/talk.jpg'
import gameJamImg from '../assets/images/photo/GameJam.png'
import courseLogoImg from '../assets/images/photo/Courses.png'
import youtubeImg from '../assets/images/photo/Youtube.png'

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
        fontSize: '2vw'
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
    responsiveTop: {
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            paddingTop: '30%'
        }
    },
    responsiveFont: {
        fontSize: '2vw',
        '@media screen and (min-width: 1200px) and (orientation: landscape)': {
            fontSize: '1.5vw',
        },
        '@media screen and (min-width: 530px) and (max-width: 880px)': {
            fontSize: '2vh'
        },
        '@media screen and (min-height: 332px) and (max-height: 565px)': {
            fontSize: '2vh'
        },
        '@media screen and (min-height: 0px) and (max-height: 331px)': {
            fontSize: '2.5vh'
        },
        '@media screen and (min-width: 0px) and (max-width: 331px)': {
            fontSize: '1.5vh'
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
            width: '40%'
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
    }

})

class Broadcast extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <div>
                    <p className={ css(styles.normal) }><span className={ css(styles.textRed) }>Broadcast</span> is our sharing and learning division.</p>
                    <p className={ css(styles.normal) }> We love to create courses and educational contents to share our passion and experiences.</p>
                </div>
                <ScrollPls color='#424242' visible={ true } />
            </div>
            <div className={ css(styles.divisionsWrapper, styles.orange) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div className={ css(styles.responsiveFont, styles.responsiveTop, styles.paddingLeft, styles.paddingRight) }>
                            <p><span className={ css(styles.textGrey, styles.normal) }>Game Jam</span></p>
                            <p>TNTC Game Jam is a contest opens to everybody loves to develop videogames.</p>
                            <p>The partecipant has to create a videogame based on a theme. 
                               At the end of the granted days, teams upload their creation so that we can review them.</p>
                            <p>The winner team is announced on our socials pages and receives a special prize.</p>
                            <p>Updates on the first event will be published on our socials.</p> 
                        </div>
                    </div>    
                </div>
                <div className={ css(styles.division, styles.hideObject) }>
                    <div className={ css(styles.innerDivision) }>
                        <a href="https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA"><img className={ css(styles.center, styles.width60) }  src={ gameJamImg } alt=""/></a>
                    </div>
                </div>
            </div>

            <div className={ css(styles.divisionsWrapper, styles.white) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div className={ css(styles.responsiveFont, styles.responsiveTop, styles.paddingLeft, styles.paddingRight) }>
                            <p><span className={ css(styles.textOrange, styles.normal) }>YouTube</span></p>
                            <p>On Youtube we share our passion about game development.</p>
                            <p>Here you can find tutorials, suggestions, tools and more.</p>
                            <p>New video published every Friday.</p>
                            <p><a className={ css(styles.textOrange, styles.noDecoration) } href="https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA?sub_confirmation=1"> Subscribe.</a></p>
                        </div>
                    </div>  
                </div>
                <div className={ css(styles.division, styles.hideObject) }>
                    <div className={ css(styles.innerDivision) }>
                        <a href="https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA?sub_confirmation=1"><img className={ css(styles.center, styles.width60) }  src={ youtubeImg } alt=""/></a>
                    </div>
                </div>
            </div>

            <div className={ css(styles.divisionsWrapper, styles.orange) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div className={ css(styles.responsiveFont, styles.responsiveTop, styles.paddingLeft, styles.paddingRight) }>
                            <p><span className={ css(styles.textGrey, styles.normal) }>Courses</span></p>
                            <p>Teaching development of 3D applications and videogames is something we love to do.
                               So we create and organize courses about this topics.</p>
                            <p>Our goal is to share our knowledges and attract peoples to this field of work.</p>
                            <p>Are you curious? <a className={ css(styles.textGrey, styles.noDecoration) } href="https://www.udemy.com/game-development-professionale-con-unity-3d-e-c/?couponCode=NUTTY-WEBSITE"> Check out our Best Seller course!</a></p>
                        </div>
                    </div>  
                </div>
                <div className={ css(styles.division, styles.hideObject) }>
                    <div className={ css(styles.innerDivision) }>
                        <a href="https://www.udemy.com/game-development-professionale-con-unity-3d-e-c/?couponCode=NUTTY-WEBSITE"><img className={ css(styles.center, styles.width60) }  src={ courseLogoImg } alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Broadcast