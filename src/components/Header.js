import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { IconContext } from "react-icons"


const twitterLink = "https://twitter.com/tntcproject"
const instagramLink = "https://www.instagram.com/tntcproject/"
const facebookLink = "https://www.facebook.com/toughnutocrack/"
const youtubeLink = "https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA"

const styles = StyleSheet.create({
    header: {
        position: 'fixed',
        width: '100%',
        height: '100px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        opacity: 1,
        zIndex: 2
    },
    title: {
        fontFamily: '"Patua One", cursive',
        color: '#424242',
        fontSize: 36,
        fontWeight: 600,
        width: '15%',
        opacity: 1
    },
    navigation: {
        color: '#424242',
        width: '70%',
        opacity: 1
    },
    navs:{
        textAlign: 'center',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
    },
    nav:{
        display: 'inline-block',
    },
    navLink:{
        fontFamily: '"Patua One", regular',
        color: '#9E9E9E',
        display: 'inline-block',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: 22,
    },
    active:{
        color: '#424242',
    },
    socials: {
        color: '#424242',
        fontSize: 24,
        width: '15%',
        opacity: 1
    },
    socialIcon: {
        color: '#424242',
        width: '15%',
        opacity: 1
    },
    hover: {
        ':hover': {
            color: '#e85356'
        }
    },
})


class Header extends Component {
    render() {
        return ( 
            <div className={css(styles.header)}>
                <div className={css(styles.title)}>
                    TNTC
                </div>
                <div className={css(styles.navigation)}>
                    <ul className={css(styles.navs)}>
                        <li className={css(styles.nav)}>
                            <NavLink className={css(styles.navLink, styles.hover)} activeClassName={css(styles.active)} to="/Home">Home</NavLink>
                        </li>
                        <li className={css(styles.nav)}>
                            <NavLink className={css(styles.navLink, styles.hover)} activeClassName={css(styles.active)} to="/Studio">Studio</NavLink>
                        </li>
                        <li className={css(styles.nav)}>
                            <NavLink className={css(styles.navLink, styles.hover)} activeClassName={css(styles.active)} to="/Broadcast">Broadcast</NavLink>
                        </li>
                        <li className={css(styles.nav)}>
                            <NavLink className={css(styles.navLink, styles.hover)} activeClassName={css(styles.active)} to="/AboutUs">AboutUs</NavLink>
                        </li>
                        <li className={css(styles.nav)}>
                            <NavLink className={css(styles.navLink, styles.hover)} activeClassName={css(styles.active)} to="/Contacts">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={css(styles.socials, styles.hover)}>
                <IconContext.Provider value={{className: css(styles.socialIcon, styles.hover) }}>
                    <a href={twitterLink}><FaTwitter/></a>
                    <a href={instagramLink}><FaInstagram /></a>
                    <a href={facebookLink}><FaFacebookF /></a>
                    <a href={youtubeLink}><FaYoutube /></a>
                </IconContext.Provider>    
                </div>
               
            </div>
        );
    }
}

export default Header;