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
    this.setShowTrue = this.setShowTrue.bind(this);
    this.setShowFalse = this.setShowFalse.bind(this);
    this.styles = StyleSheet.create({
      scrollArrowColor: {
        color: props.color
      }
    })
    this.state = { show: props.visible }
    
  }

  setShowTrue() {
    this.setState({ show: true })
  }

  setShowFalse() {
    this.setState({ show: false })
  }

  componentDidMount() {
    window.addEventListener('scroll-pls', this.setShowTrue)
    window.addEventListener('stop-scroll-pls', this.setShowFalse)
  }
  render() {
    return (
        <div className={ css(styles.scollplsWrapper) }>
            <Fade when={ this.state.show } duration={ 300 }>
                <p>{this.props.text}</p>
                <FaChevronDown className={ css(styles.scrollArrow, this.styles.scrollArrowColor) } />
            </Fade>
        </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll-pls', this.setShowTrue)
    window.removeEventListener('stop-scroll-pls', this.setShowFalse)
  }
}

export default ScrollPls