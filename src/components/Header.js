import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Menu from './Menu'

const twitterLink = 'https://twitter.com/tntcproject'
const instagramLink = 'https://www.instagram.com/tntcproject/'
const facebookLink = 'https://www.facebook.com/toughnutocrack/'
const youtubeLink = 'https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA'

const styles = StyleSheet.create({
    header: {
        position: 'fixed',
        width: '100%',
        height: '100px',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        display: 'flex',
        alignItems: 'center',
        opacity: 1,
        zIndex: 2
    },
    logoHeader: {
        padding: '20px'
    },
    title: {
        fontFamily: '"Patua One", cursive',
        color: '#424242',
        fontSize: '36px',
        fontWeight: 600,
        width: '15%',
        opacity: 1,
        textDecoration: 'none',
    },
    navigation: {
        color: '#424242',
        width: '70%',
        opacity: 1,
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            display: 'none'
        }
    },
    navs: {
        textAlign: 'center',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
    },
    nav: {
        display: 'inline-block',
    },
    navLink: {
        fontFamily: '"Patua One", regular',
        color: '#9E9E9E',
        display: 'inline-block',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '2vw',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '22px',
        }
    },
    active: {
        color: '#424242',
    },
    socials: {
        color: '#424242',
        fontSize: 24,
        width: '15%',
        opacity: 1,
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            display: 'none'
        }
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
    hambContainer: {
        display: 'none',
        position: 'absolute',
        right: '20px',
        color: '#424242',
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            display: 'block'
        }
    },
    hamburger: {
        width: '36px',
        height: '36px'
    }
})

class Header extends Component {

    constructor(props) {
        super(props);
        this.openMenu = this.openMenu.bind(this);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        const self = this;
        window.addEventListener('close-menu', (e) => {
            self.setState({ isOpen: false })
        })
    }

    openMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return ( 
            <div className={ css(styles.header) }>
                <div className={ css(styles.title, styles.logoHeader) }>
                    <NavLink className={ css(styles.title) } exact to="/">TNTC</NavLink>
                </div>
                <div className={ css(styles.navigation) }>
                    <ul className={ css(styles.navs) }>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } exact to="/">Home</NavLink>
                        </li>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/studio">Studio</NavLink>
                        </li>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/broadcast">Broadcast</NavLink>
                        </li>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/about">About</NavLink>
                        </li>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={ css(styles.socials, styles.hover) }>
                    <IconContext.Provider value={ { className: css(styles.socialIcon, styles.hover) } }>
                        <a target="_blank" rel="noopener noreferrer" href={ twitterLink }><FaTwitter/></a>
                        <a target="_blank" rel="noopener noreferrer" href={ instagramLink }><FaInstagram /></a>
                        <a target="_blank" rel="noopener noreferrer" href={ facebookLink }><FaFacebookF /></a>
                        <a target="_blank" rel="noopener noreferrer" href={ youtubeLink }><FaYoutube /></a>
                    </IconContext.Provider>    
                </div>
                <div className={ css(styles.hambContainer, styles.hover) } onClick={ this.openMenu }>
                    <FaBars className={ css(styles.hamburger) }/>
                </div>
                {this.state.isOpen && <Menu isOpen={ this.state.isOpen }/>}
            </div>
        );
    }
}

export default Header;