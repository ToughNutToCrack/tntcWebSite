import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    menu: {
        position: 'fixed',
        width: '100%',
        height: '60px',
        bottom: '0px',
        backgroundColor: '#FFFFFF',
        opacity: 1,
        zIndex: 2,
        display: 'none',
        '@media only screen and (max-width: 880px)': {
            display: 'block'
        }    
    },
    title: {
        fontFamily: '"Patua One", cursive',
        color: '#424242',
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
})

class Menu extends Component {
    render() {
        return ( 
            <div className={ css(styles.menu) }>              
                <div className={ css(styles.title, styles.hover) }>
                    Menu
                </div>
            </div>
        );
    }
}

export default Menu;