import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet';

import Header from './components/Header'
import Content from './components/Content'
import Placeholder from './components/Placeholder'

const styles = StyleSheet.create({
    app: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
    }
})

class App extends Component {

    isThree() {
        if (window.location.pathname !== '/three')
          return <><Placeholder /><Header /><Content /></>
        else 
          return <></>
    }
    
    render() {
        return ( 
            <div className={ css(styles.app) }>
                <Helmet>
                    <title>TNTC - AR, VR, Videogames, and much more.</title>
                    <meta name="title" content="TNTC - AR, VR, Videogames, and much more."/>
                    <meta name="description" content="We create innovative realtime 3D solutions for your business!"/>

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://toughnuttocrack.it/"/>
                    <meta property="og:title" content="TNTC - AR, VR, Videogames, and much more."/>
                    <meta property="og:description" content="We create innovative realtime 3D solutions for your business!"/>
                    <meta property="og:image" content="https://toughnuttocrack.it/static/media/preview.png"/>

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://toughnuttocrack.it/"/>
                    <meta property="twitter:title" content="TNTC - AR, VR, Videogames, and much more."/>
                    <meta property="twitter:description" content="We create innovative realtime 3D solutions for your business!"/>
                    <meta property="twitter:image" content="https://toughnuttocrack.it/static/media/preview.png"/>
                </Helmet>
            
                {this.isThree()}
            </div>
        );
    }
}

export default App;