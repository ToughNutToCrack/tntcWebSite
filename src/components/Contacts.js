import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import ImgBologna from '../assets/images/Bologna.jpg'
import Page from './Page'
import LogoPathSvg from './LogoPathSvg'

const twitterLink = 'https://twitter.com/tntcproject'
const instagramLink = 'https://www.instagram.com/tntcproject/'
const facebookLink = 'https://www.facebook.com/toughnutocrack/'
const youtubeLink = 'https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA'

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
    }
})
class Contacts extends Component {
  render() {
    return (
        <Page>
            <div className={ css(styles.background) }>
                {/* <LogoPathSvg colorIn='#424242' colorOut='#ffffff' /> */}
               
                <div className={ css(styles.void) }>
                    {/* <LogoPathSvg colorIn='#424242' colorOut='#ffffff' />*/}
                </div>
                <Slide right delay={ 0 } duration={ 500 }>
                    <div className={ css(styles.contacts) }>
                        <div className={ css(styles.contactsContent) }>
                            <Fade bottom cascade delay={ 500 } duration={ 500 }>
                                <div className={ css(styles.outer) }>
                                    <div className={ css(styles.inner) }>
                                        <h2>Looking for informations?</h2>
                                        <a className={ css(styles.link) } href="mailto:info@tntc.it">Get in touch</a>
                                    </div>

                                    <div className={ css(styles.inner) }>
                                        <h2>Create a project with us.</h2>
                                        <a className={ css(styles.link) } href="mailto:info@tntc.it">What are you looking for?</a>
                                    </div>

                                    <div className={ css(styles.inner) }>
                                        <h2>info@tntc.it</h2>
                                    </div>
                            
                                    <IconContext.Provider value={ { className: css(styles.socials, styles.hover) } }>
                                        <a target="_blank" rel="noopener noreferrer" href={ twitterLink }><FaTwitter/></a>
                                        <a target="_blank" rel="noopener noreferrer" href={ instagramLink }><FaInstagram /></a>
                                        <a target="_blank" rel="noopener noreferrer" href={ facebookLink }><FaFacebookF /></a>
                                        <a target="_blank" rel="noopener noreferrer" href={ youtubeLink }><FaYoutube /></a>
                                    </IconContext.Provider>  
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