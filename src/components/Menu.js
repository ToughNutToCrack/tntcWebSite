import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { NavLink } from 'react-router-dom'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { IconContext } from 'react-icons'

const twitterLink = 'https://twitter.com/tntcproject'
const instagramLink = 'https://www.instagram.com/tntcproject/'
const facebookLink = 'https://www.facebook.com/toughnutocrack/'
const youtubeLink = 'https://www.youtube.com/channel/UCtj_LuYF9i5xkk4Q9EYamYA'

const resizeKeyframes = {
    '0%': {
        height: '0%'
    },
    '100%': {
        height: '100%'
    }
}

const styles = StyleSheet.create({
    closeMenu: {
        position: 'absolute',
        top: '0px',
        display: 'none'
    },
    openMenu: {
        animationName: [ resizeKeyframes ],
        animationDuration: '0.2s',
        animationIterationCount: '1',
        backgroundColor: '#424242',
        opacity: 1,
        zIndex: 2,
        position: 'fixed',
        top: '0px',
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'none',
        '@media only screen and (max-width: 880px)': {
            display: 'block'
        }
    },
    hover: {
        ':hover': {
            color: '#e85356'
        }
    },
    navigation: {
        height: '80%',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navLink: {
        fontFamily: '"Patua One", regular',
        color: 'white',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: 22,
    },
    navs: {
        listStyleType: 'none',
    },
    nav: {
        width: '100%',
        display: 'block',
        marginBottom: '50%'
    },
    active: {
        color: '#FF926B',
    },
    closeIconContainer: {
        position: 'absolute',
        top: '10px',
        right: '0px',
        color: 'white',
    },
    closeIcon: {
        width: '70px',
        height: '70px'
    },
    socials: {
        padding: '5px',
        color: '#FF926B',
        fontSize: 36,
        opacity: 1
    },
})

class Menu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: this.props.isOpen
        }

        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu() {
        this.setState({ isOpen: false });
        window.dispatchEvent(new Event('close-menu'))
    }

    render() {
        return ( 
            <div className={ this.state.isOpen ? css(styles.openMenu) : css(styles.closeMenu) }>
                
                <div className={ css(styles.closeIconContainer, styles.hover) } onClick={ this.closeMenu }>
                    <IoIosClose className={ css(styles.closeIcon) }/>
                </div>              

                <div className={ css(styles.navigation) }>
                    <ul className={ css(styles.navs) }>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } exact to="/" onClick={ this.closeMenu }>Home</NavLink>
                        </li>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/studio" onClick={ this.closeMenu }>Studio</NavLink>
                        </li>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/broadcast" onClick={ this.closeMenu }>Broadcast</NavLink>
                        </li>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/about" onClick={ this.closeMenu }>About</NavLink>
                        </li>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/contacts" onClick={ this.closeMenu }>Contacts</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <IconContext.Provider value={ { className: css(styles.socials, styles.hover) } }>
                        <a target="_blank" href={ twitterLink }><FaTwitter/></a>
                        <a target="_blank" href={ instagramLink }><FaInstagram /></a>
                        <a target="_blank" href={ facebookLink }><FaFacebookF /></a>
                        <a target="_blank" href={ youtubeLink }><FaYoutube /></a>
                    </IconContext.Provider> 
                </div>

            </div>
            
        );
    }
}

export default Menu;