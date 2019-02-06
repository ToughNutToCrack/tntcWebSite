import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import Page from './Page'
import LogoPathSvg from './LogoPathSvg'

const twitterLink = 'https://twitter.com/tntcproject'
const instagramLink = 'https://www.instagram.com/tntcproject/'
const facebookLink = 'https://www.facebook.com/toughnutocrack/'
const youtubeLink = 'https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA'

const styles = StyleSheet.create({
    background: {
        // backgroundImage: `url(${ process.env.PUBLIC_URL}/assets/images/bw.png)`,
        backgroundColor: '#FF926B',
        height: '100%',
        width: '100%',
        display: 'flex',
        overflowX: 'hidden',
        flexDirection: 'row',
        '@media screen and (max-width: 880px)': {
            backgroundColor: '#FFFFFF',
        }
    },
    void: {
        display: 'flex',
        width: '50%',
        height: '100%',
        order: 1,
        '@media screen and (max-width: 880px)': {
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
        '@media screen and (max-width: 880px)': {
            width: '100%',
            height: '100%',
            order: 1
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
        fontSize: 22
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
})
class Contacts extends Component {
  render() {
    return (
        <Page>
            <div className={ css(styles.background) }>
                {/* <LogoPathSvg colorIn='#424242' colorOut='#ffffff' /> */}
                <Slide right delay={ 0 } duration={ 500 }>
                    <div className={ css(styles.void) }>
                        <LogoPathSvg colorIn='#424242' colorOut='#ffffff' /> 
                    </div>
                    <div className={ css(styles.contacts) }>
                        <div className={ css(styles.contactsContent) }>
                            <Fade bottom cascade delay={ 1500 } duration={ 500 }>
                                <div className={ css(styles.outer) }>
                                    <div className={ css(styles.inner, styles.hover) }>
                                        <h2>Looking for informations?</h2>
                                        <a>Get in touch</a>
                                    </div>

                                    <div className={ css(styles.inner, styles.hover) }>
                                        <h2>Create a project with us.</h2>
                                        <a>Yeah, What are you looking for?</a>
                                    </div>

                                    <div className={ css(styles.inner, styles.hover) }>
                                        <h2>info@tntc.it</h2>
                                    </div>
                            
                                    <IconContext.Provider value={ { className: css(styles.socials, styles.hover) } }>
                                        <a target="_blank" href={ twitterLink }><FaTwitter/></a>
                                        <a target="_blank" href={ instagramLink }><FaInstagram /></a>
                                        <a target="_blank" href={ facebookLink }><FaFacebookF /></a>
                                        <a target="_blank" href={ youtubeLink }><FaYoutube /></a>
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