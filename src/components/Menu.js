import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { NavLink } from 'react-router-dom'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const resizeKeyframes = {
    '0%': {
        height: '60px'
    },
    '100%': {
        height: '100%'
    }
}

const styles = StyleSheet.create({
    closeMenu: {
        position: 'fixed',
        width: '100%',
        height: '60px',
        bottom: '0px',
        backgroundColor: '#FFFFFF',
        opacity: 1,
        zIndex: 2,
        display: 'none',
        color: '#424242',
        '@media only screen and (max-width: 880px)': {
            display: 'block'
        }    
    },
    title: {
        fontFamily: '"Patua One", cursive',
        fontSize: 36,
        fontWeight: 600,
        opacity: 1,
        position: 'relative',
        margin: '0 auto',
    },
    hover: {
        ':hover': {
            color: '#e85356'
        }
    },
    isVisible: {
        display: 'block'
    },
    isHidden: {
        display: 'none'
    },
    resizeAnim: {
        animationName: [ resizeKeyframes ],
        animationDuration: '0.3s',
        animationIterationCount: '1',
        backgroundColor: '#424242',
        opacity: 1,
        zIndex: 2,
        position: 'fixed',
        width: '100%',
        height: '100%',
        bottom: '0px',
        color: 'white'
    },

    navigation: {
        color: 'white',
        position: 'relative',
        margin: '0 auto',
        opacity: 1
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
        fontSize: 22,
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
    },
})

class Menu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
        
        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return ( 
            <div className={ this.state.isOpen ? css(styles.resizeAnim) : css(styles.closeMenu) }>              
                <div className={ css(styles.title, styles.hover) } onClick={ this.handleMenu } >
                    Menu
                </div>
                <div className={ css(styles.navigation) }>

                    <ul>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } exact to="/">Home</NavLink>
                        </li>
                    </ul>

                    <ul>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/studio">Studio</NavLink>
                        </li>
                    </ul>

                    <ul>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/broadcast">Broadcast</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/about-us">AboutUs</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ css(styles.nav) }>
                            <NavLink className={ css(styles.navLink, styles.hover) } activeClassName={ css(styles.active) } to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;