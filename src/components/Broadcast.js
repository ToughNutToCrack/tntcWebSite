import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

import ScrollPls from './SrcollPls'

// import talksImg from '../assets/images/photo/talk.jpg'
import gameJamImg from '../assets/images/photo/GameJam.png'
import courseImg from '../assets/images/photo/Course.jpg'
import youtubeImg from '../assets/images/photo/YT.jpg'

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
        fontSize: '2vw',
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
        fontSize: '2vw',
        scrollSnapAlign: 'start'
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
        margin: 'auto',
        width: '90%',
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            width: '80%'
        }
    },
    responsiveTop: {
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            paddingTop: '150px'
        }
    },
    // hideInLandscape:{
    //     '@media screen and (orientation:landscape)': {
    //         display: 'none'
    //     }
    // },
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
    text: {
        display: 'block',
        fontSize: '3vw'
    },
    paddingTop: {
        paddingTop: '150px'
    },
    big: {
        fontSize: '5vW'
    },
    little: {
        fontSize: '1vw'
    },
    normal: {
        fontSize: '3vW'
    },
    textRed: {
        color: '#ed1c24'
    },
    textOrange: {
        color: '#FF926B'
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
    width90: {
        width: '90%'
    },
    width60: {
        width: '90%',
        '@media screen and (max-height: 700px)': {
            width: '60%'
        }
    },
    youtubeVideo: {
        marginBottom: '50px',
        '@media screen and (max-height: 700px)': {
            marginBottom: '5px',
        }
    }

})

class Broadcast extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <div className={ css(styles.text) }>
                    <p><span className={ css(styles.textRed, styles.big) }>Broadcast</span> is our sharing and learning division.</p>
                    <p> We love create courses and educational contents to share our passion and experiences.</p>
                </div>
                <ScrollPls color='#424242' visible={ true } />
            </div>

            {/* <div className={ css(styles.divisionsWrapper, styles.white) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.paddingTop) }>   
                        <p className={ css(styles.textLeft) }><span className={ css(styles.textOrange, styles.big) }>Talks</span></p>
                        <p>TESTO</p>
                    </div>
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <img className={ css(styles.center) } src={ talksImg }/>
                    </div>
                </div>
            </div> */}

            <div className={ css(styles.divisionsWrapper, styles.white) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div className={ css(styles.responsiveTop) }>
                            <p><span className={ css(styles.textOrange, styles.big) }>Game Jam</span></p>
                            <p>TNTC Game Jam è una competizione aperta a tutti.</p>
                            <p>Consiste nel creare un videogioco in 4 giorni rispettando un tema. Al termine della competizione i vari team 
                                consegneranno il gioco tramite l'apposito form di upload.</p>
                            <p>Il team che vincerà verrà informato tramite e-mail e reso pubblico sui social, potrà poi riscuotere il premio in palio.</p>
                            <p>La partecipazione alla Jam è totalmente gratuita.</p>
                            <p>Sei interessato? <a className={ css(styles.textOrange, styles.noDecoration) } href="/download"> Scarica il regolamento.</a></p>
                        </div>
                    </div>    
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <img className={ css(styles.center, styles.width60) }  src={ gameJamImg } alt=""/>
                    </div>
                </div>
            </div>

            <div className={ css(styles.divisionsWrapper, styles.white) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <img className={ css(styles.center, styles.responsiveTop, styles.width60) }  src={ youtubeImg } alt=""/>
                    </div>
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div>
                            <p><span className={ css(styles.textOrange, styles.big) }>YouTube</span></p>
                            <p>Utilizziamo YouTube come principale mezzo di condivisione.</p>
                            <p>Ogni venerdí pubblichiamo un nuovo video riguardante il tema dello sviluppo videoludico.</p>
                            <p>Potrete trovare tutorial, consigli, tools, e molto altro.</p>
                            <p><a className={ css(styles.textOrange, styles.noDecoration) } href="https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA?sub_confirmation=1"> Iscriviti.</a></p>
                        </div>
                    </div>  
                </div>
            </div>

            <div className={ css(styles.divisionsWrapper, styles.white) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div className={ css(styles.responsiveTop) }>
                            <p><span className={ css(styles.textOrange, styles.big) }>Courses</span></p>
                            <p>La formazione nell'ambito dei videogame e del 3D è un argomento che ci sta molto a cuore.</p>
                            <p>Ci occupiamo della realizzazione di corsi online e dal vivo.</p>
                            <p>Il nostro scopo è condividere le conoscenze che abbiamo acquisito e far avvicinare altri a questo mondo!</p>
                            <p>Sei curioso? <a className={ css(styles.textOrange, styles.noDecoration) } href="https://www.udemy.com/game-development-professionale-con-unity-3d-e-c/?couponCode=NUTTY-WEBSITE"> Guarda i nostri corsi.</a></p>
                        </div>
                    </div>  
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <iframe 
                    className={ css(styles.youtubeVideo, styles.width60) }
                    title="GameDevelopment"
                    width="90%" 
                    height="50%"
                    src="https://www.youtube.com/embed/hTHy2L2bqCs" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
                        </iframe>
                        <a href="https://www.udemy.com/game-development-professionale-con-unity-3d-e-c/?couponCode=NUTTY-WEBSITE">
                            <img className={ css(styles.width60) } src={ courseImg } alt=""/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default Broadcast