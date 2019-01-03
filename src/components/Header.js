import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    header: {
        position: 'fixed',
        width: '100%',
        height: '60px',
        backgroundColor: '#424242',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '27.32px',
        fontWeight: 600,
        opacity: 0.2,
        zIndex: 2
    }
})


class Header extends Component {
    render() {
        return ( 
            <div className={css(styles.header)}>
                T N T C
            </div>
        );
    }
}

export default Header;