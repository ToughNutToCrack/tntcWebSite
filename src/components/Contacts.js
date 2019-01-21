import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import Page from './Page'

const styles = StyleSheet.create({
    contacts: {
        backgroundColor: '#FF926B',
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
    }
})
class Contacts extends Component {
  render() {
    return (
        <Page>
            <div className={ css(styles.background) }>
                <div className={ css(styles.contacts) }>
                    info@tntc.it
                </div>
            </div>
        </Page>
    );
  }
}

export default Contacts