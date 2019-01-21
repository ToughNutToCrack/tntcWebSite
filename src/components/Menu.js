import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

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
    }
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
            </div>
        );
    }
}

export default Menu;