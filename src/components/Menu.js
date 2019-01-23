import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { NavLink } from 'react-router-dom'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons'

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
        top: '100px',
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
        height: '100%',
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
        color: 'white',
    },
    socials: {
        color: '#424242',
        fontSize: 24,
        width: '15%',
        opacity: 1,
        '@media only screen and (max-width: 880px)': {
            position: 'absolute',
            right: '0px',
            minWidth: '140px'
        }
    },
    socialIcon: {
        color: '#424242',
        width: '20%',
        opacity: 1
    }
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
    }

    render() {
        return ( 
            <div className={ this.state.isOpen ? css(styles.openMenu) : css(styles.closeMenu) }>              
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
            </div>
        );
    }
}

export default Menu;