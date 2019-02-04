import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

import ScrollPls from './SrcollPls'

import talksImg from '../assets/images/photo/talk.jpg'
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
        fontSize: 32,
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
        fontSize: 32,
        scrollSnapAlign: 'start'
    },
    divisionHeader: {
        width: '100%',
        height: '30%',
        float: 'left',
    },
    division: {
        width: '50%',
        height: '100%',
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
    text: {
        display: 'block'
    },
    paddingTop: {
        paddingTop: '150px'
    },
    big: {
        fontSize: 40
    },
    little: {
        fontSize: 26
    },
    normal: {
        fontSize: 32
    },
    textRed: {
        color: '#ed1c24'
    },
    textOrange: {
        color: '#FF926B'
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
    innerDivision: {
        // paddingTop: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        flexDirection: 'column'
    },
    center: {
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: 'auto',
        width: '90%'
    },
    width90: {
        width: '90%'
    },
    youtubeVideo: {
        marginBottom: '50px'
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
                        <div>
                            <p><span className={ css(styles.textOrange, styles.big) }>Game Jam</span></p>
                            <p>TNTC Game Jam è una competizione aperta a tutti.</p>
                            <p>Consiste nel creare un videogioco in 4 giorni rispettando un tema. Al termine della competizione i vari team 
                                consegneranno il gioco tramite l'apposito form di upload.</p>
                            <p>Il team che vincerà verrà informato tramite e-mail e reso pubblico sui social, potrà poi riscuotere il premio in palio.</p>
                            <p>La partecipazione alla Jam è totalmente gratuita.</p>
                            <p>Sei interessato? Scarica il regolamento.</p>
                        </div>
                    </div>    
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <img className={ css(styles.center) }  src={ gameJamImg }/>
                    </div>
                </div>
            </div>

            <div className={ css(styles.divisionsWrapper, styles.white) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <img className={ css(styles.center) }  src={ youtubeImg }/>
                    </div>
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div>
                            <p><span className={ css(styles.textOrange, styles.big) }>YouTube</span></p>
                            <p>Utilizziamo YouTube come principale mezzo di condivisione.</p>
                            <p>Ogni venerdí pubblichiamo un nuovo video riguardante il tema dello sviluppo videoludico.</p>
                            <p>Troverete tutorial, consigli, tools, e molto altro.</p>
                        </div>
                    </div>  
                </div>
            </div>

            <div className={ css(styles.divisionsWrapper, styles.white) }>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <div>
                            <p><span className={ css(styles.textOrange, styles.big) }>Courses</span></p>
                            <p>La formazione nell'ambito dei videogame e del 3D è un argomento che ci sta molto a cuore.</p>
                            <p>Ci occupiamo della realizzazione di corsi online e dal vivo.</p>
                        </div>
                    </div>  
                </div>
                <div className={ css(styles.division) }>
                    <div className={ css(styles.innerDivision) }>
                        <iframe 
                    className={ css(styles.youtubeVideo) }
                    width="90%" 
                    height="50%"
                    src="https://www.youtube.com/embed/hTHy2L2bqCs" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
                        </iframe>

                        <img className={ css(styles.width90) } src={ courseImg }/>

                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default Broadcast