import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const opacityKeyframes = {
    'from': {
        opacity: 1
    },
    'to': {
        opacity: 0
    }
}

const styles = StyleSheet.create({
    placeholder: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeoff: {
        animationName: [ opacityKeyframes ],
        animationDuration: '1s',
        animationIterationCount: '1',
        opacity: 0,
        transition: 'z-index 1s',
        zIndex: 0
    },
    text: {
        fontFamily: '"Patua One", regular',
        color: '#424242',
        fontSize: '3vW',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '30px',
        }
    },
    textOrange: {
        color: '#FF926B'
    },
    big: {
        fontSize: '5vW',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '40px',
        }
    }

})

class Placeholder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }
    componentDidMount() {
        const self = this
        window.addEventListener('content-loaded', ()=> {
            setTimeout(() => {
                self.setState({
                    loaded: true
                })
            }, 1)
        })

    }
    render() {
        return (
            <div className={ css(styles.placeholder, this.state.loaded ? styles.placeoff : null) } >
                <div className={ css(styles.text) }> <p>Wait, <span className={ css(styles.textOrange, styles.big) }>Nutty</span> is loading the site.</p> </div>
            </div>
        )
    }
}

export default Placeholder;