import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Loader from './Loader';

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
    },
    placeoff: {
        animationName: [ opacityKeyframes ],
        animationDuration: '1s',
        animationIterationCount: '1',
        opacity: 0,
        transition: 'z-index 1s',
        zIndex: 0
    },

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
        return  <div className={ css(styles.placeholder, this.state.loaded ? styles.placeoff : null) } > 
            <Loader />
        </div>
    }
}

export default Placeholder;