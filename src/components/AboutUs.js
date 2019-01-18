import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import Page from './Page'

const styles = StyleSheet.create({
    about: {
        color: 'black',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
class AboutUs extends Component {
  render() {
    return (
        <Page>
            <div className={ css(styles.about) }>
                TNTC was born to share our great passion for development of videogames and software. <br/>
                Follow us through our blog s articles and videos published weekly <br/>
                Our first Game Development course in italian is available on Udemy. <br/>
            </div>
        </Page>
    );
  }
}

export default AboutUs