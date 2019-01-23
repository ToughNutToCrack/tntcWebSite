import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { FaChevronDown } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

const translateKeyframes = {
  '0%': {
      transform: 'translateY(0)',
  },
  '50%': {
      transform: 'translateY(40px)',
  },
  '100%': {
      transform: 'translateY(0)',
  },
};

const styles = StyleSheet.create({
  scollplsWrapper: {
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    transform: 'translateX(calc(50vw - 50%))',
    display: 'flex',
    justifyContent: 'center',
  },
  scrollArrow: {
    fontSize: '25px',
    animationName: [ translateKeyframes ],
    animationDuration: '3s',
    animationIterationCount: 'infinite',
  }
})

class ScrollPls extends Component {
  constructor(props) {
    super(props)
    this.styles = StyleSheet.create({
      scrollArrowColor: {
        color: props.color
      }
    })
    this.state = { show: props.visible }
    
  }
  componentDidMount() {
    const self = this
    window.addEventListener('scroll-pls', (e) => {
        self.setState({ show: true })
    })
    window.addEventListener('stop-scroll-pls', (e) => {
        self.setState({ show: false })
    })
  }
  render() {
    return (
        <div className={ css(styles.scollplsWrapper) }>
            <Fade when={ this.state.show } duration={ 300 }>
                <FaChevronDown className={ css(styles.scrollArrow, this.styles.scrollArrowColor) } />
            </Fade>
        </div>
    );
  }
}

export default ScrollPls