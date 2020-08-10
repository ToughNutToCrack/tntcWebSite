import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import { FaTwitter, FaGithub, FaYoutube, FaInstagram, FaDiscord } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import ImgBologna from '../assets/images/Bologna.jpg'
import Page from './Page'

const twitterLink = 'https://twitter.com/tntcproject'
const instagramLink = 'https://www.instagram.com/tntcproject/'
const youtubeLink = 'https://www.youtube.com/channel/UCTR740iIPwfu7Pz_BoCEJ-g'
const githubLink = 'https://github.com/ToughNutToCrack'
const discordLink = 'https://discord.gg/Z8QD8uF'

const styles = StyleSheet.create({
    background: {
        backgroundImage: `url(${ImgBologna})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        display: 'flex',
        overflowX: 'hidden',
        flexDirection: 'row',
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            backgroundColor: '#FFFFFF',
            backgroundImage: 'none',
        }
    },
    void: {
        display: 'flex',
        width: '50%',
        height: '100%',
        order: 1,
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            order: 2,
            display: 'none'
        }
    },
    contacts: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '50%',
        height: '100%',
        textAlign: 'center',
        order: 2,
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            width: '100%',
            height: '100%',
            order: 1,
            top: '0'
        }
    },
    contactsContent: {
        backgroundColor: '#FFFFFF',
        fontFamily: '"Patua One", regular',
        color: '#424242',
        width: '100%',
        height: '100%',
        fontSize: 16,
        display: 'table-cell',
        verticalAlign: 'middle',
        overflowY: 'scroll'
    },
 
    outer: {
        position: 'relative',
        top: '25%'
    },
    inner: {
        display: 'block',
        padding: '35px',
        fontSize: 22,
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            fontSize: '3vw',
        }
    },
    socials: {
        padding: '5px',
        color: '#424242',
        fontSize: 36,
        opacity: 1
    },
    hover: {
        ':hover': {
            color: '#e85356'
        }
    },
    link: {
        textDecoration: 'none',
        color: '#424242',
        ':hover': {
            color: '#e85356'
        }
    },
    textOrange: {
        color: '#FF926B'
    },
})
class Contacts extends Component {
  render() {
    return (
        <Page>
            <div className={ css(styles.background) }>
               
                <div className={ css(styles.void) }></div>
                <Slide right delay={ 0 } duration={ 1000 }>
                    <div className={ css(styles.contacts) }>
                        <div className={ css(styles.contactsContent) }>
                            <Fade bottom cascade delay={ 1000 } duration={ 500 }>
                                <div className={ css(styles.outer) }>
                                    
                                    <div className={ css(styles.inner) }>
                                        <h2>Looking for informations?</h2>
                                        <div>
                                            <a className={ css(styles.link) } href="https://toughnuttocrack.it/service/CartaDeiServizi.pdf">Services in detail (ITA)</a>
                                        </div>
                                        <div>
                                            <a className={ css(styles.link) } href="https://toughnuttocrack.it/service/CartaDeiServiziEN.pdf">Services in detail (EN)</a>
                                        </div>
                                    </div>

                                    <div className={ css(styles.inner) }>
                                        <h2>Create a project with us.</h2>
                                        <a className={ css(styles.link) } href="mailto:info@tntc.it">Over these years, we've successfully developed many projects for customers, from the simplest to the complex one. Contact us for more information, to talk about your idea or a quotation. We're always happy to clarify any doubt!</a>
                                    </div>

                                    <div className={ css(styles.inner, styles.textOrange) }>
                                        <h2>info@tntc.it</h2>
                                    </div>
                            
                                    <IconContext.Provider value={ { className: css(styles.socials, styles.hover) } }>
                                        <a target="_blank" rel="noopener noreferrer" href={ twitterLink }><FaTwitter/></a>
                                        <a target="_blank" rel="noopener noreferrer" href={ instagramLink }><FaInstagram /></a>
                                        <a target="_blank" rel="noopener noreferrer" href={ youtubeLink }><FaYoutube /></a>
                                        <a target="_blank" rel="noopener noreferrer" href={ githubLink }><FaGithub /></a>
                                        <a target="_blank" rel="noopener noreferrer" href={ discordLink }><FaDiscord /></a>
                                    </IconContext.Provider>  

                                    <div className={ css(styles.inner) }>
                                        <a>Matteo Baraldi P.IVA 03837730369</a>
                                        <br></br>
                                        <a>Erik Minarini P.IVA 03749901207 </a>
                                    </div>
                                </div>  
                            </Fade>
                        </div>
                    </div>
                </Slide>
            </div>
        </Page>
    );
  }
}

export default Contacts