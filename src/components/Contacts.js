import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import Slide from 'react-reveal/Slide'
import Page from './Page'
import Fade from 'react-reveal/Fade'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const twitterLink = 'https://twitter.com/tntcproject'
const instagramLink = 'https://www.instagram.com/tntcproject/'
const facebookLink = 'https://www.facebook.com/toughnutocrack/'
const youtubeLink = 'https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA'

const styles = StyleSheet.create({
    contacts: {
        backgroundColor: '#FFFFFF',
        fontFamily: '"Patua One", regular',
        color: '#424242',
        height: '100%',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16
    },
    background: {
        backgroundImage: `url(${ process.env.PUBLIC_URL}/assets/images/Montain.png)`,
        height: '100%',
        width: '100%',
        display: 'flex'
    },
    contactsContent: {
        display: 'block'
    },
    inner: {
        padding: '35px',
        fontSize: 22
    },
    socials: {
        color: '#424242',
        fontSize: 24,
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
                <Slide left delay={ 500 } duration={ 500 }>
                    <div className={ css(styles.contacts) }>
                        <div className={ css(styles.contactsContent) }>
                            <Fade bottom cascade delay={ 1000 } duration={ 500 }>
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
                        
                                <IconContext.Provider value={ { className: css(styles.inner, styles.socials, styles.hover) } }>
                                    <a target="_blank" href={ twitterLink }><FaTwitter/></a>
                                    <a target="_blank" href={ instagramLink }><FaInstagram /></a>
                                    <a target="_blank" href={ facebookLink }><FaFacebookF /></a>
                                    <a target="_blank" href={ youtubeLink }><FaYoutube /></a>
                                </IconContext.Provider>    
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