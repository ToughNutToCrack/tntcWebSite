import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'

import broadcastVideo from '../assets/video/broadcast.mp4'

import ARChangelog from './ARChangelog'
import ARInfo from './ARInfo'
import ARSupport from './ARSupport'

const styles = StyleSheet.create({
    container: {
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    wrapper: {
        fontFamily: '"HeadLand One", serif',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2vw'
    },
    section: {
        width: '100%',
        height: '100%'
    },
    divisionsWrapper: {
        fontFamily: '"HeadLand One", serif',
        height: 'calc(100% - 100px)',
        width: '100%',
        fontSize: '2vw',
        display: 'inline-table'
    },
    divisionHeader: {
        width: '100%',
        height: '30%',
        float: 'left',
    },
    division: {
        height: '100%',
        float: 'left',
        width: '50%',
        minWidth: '100px',
        fontSize: '3vh',
        verticalAlign: 'center',
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            width: '100%',
            height: '50%',
            fontSize: '3vw',
        }
    },
    innerDivision: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            height: '90%'
        }
    },
    center: {
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: 'auto'
    },
    videoWrapper: {
        fontFamily: '"HeadLand One", serif',
        height: '100%',
        marginTop: '130px',
        width: '100%',
        fontSize: '2vw',
        display: 'inline-table'
    },
    textOrange: {
        color: '#FF926B'
    },
    textGrey: {
        color: '#DCDCDC'
    },
    title: {
        fontFamily: '"Patua One", regular',
        fontSize: '6vW',
        marginBottom: '30px',
        marginTop: '0',
        '@media only screen and (max-width: 880px)': {
            fontSize: '6vw',
        },
        '@media only screen and (max-width: 440px)': {
            fontSize: '8vw',
        },
        '@media only screen and (max-height: 300px)': {
            fontSize: '8vh',
        }
    }, 
    normal: {
        fontFamily: '"Patua One", regular',
        fontSize: '2vW',
        '@media only screen and (max-width: 880px)': {
            fontSize: '3vw',
        },
        '@media only screen and (max-width: 440px)': {
            fontSize: '4vw',
        },
        '@media only screen and (max-height: 300px)': {
            fontSize: '4vh',
        },
    },
    secondaryHeaderChild: {
        margin: '30px 2%',
        display: 'inline-block'
    },
    secondaryHeaderText: {
        ':hover': {
            color: '#e85356'
        },
        textDecoration: 'none'
    },
    active: {
        color: '#424242',
    }
})

class ARFramework extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0
        };
    }
  
  secondaryHeader(e) {
    this.setState({ pageIndex: e });
  }

  showSelectedPage() {
      switch (this.state.pageIndex) {
          case 0 :
              return <ARInfo />;
          case 2 :
              return <ARChangelog />;
          case 3 :
              return <ARSupport />;
        }
  }

  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.videoWrapper) }>
                <div className={ css(styles.center) }>
                    <p className={ css(styles.textOrange, styles.title) }>**NAME**</p>
                    <video width="100%" autoPlay loop>
                        <source src={ broadcastVideo } type="video/mp4" />
                    </video>
                </div>
                <div className={ css(styles.normal) }>
                    <div className={ css(styles.secondaryHeaderChild) } onClick={ () => this.secondaryHeader(0) }>
                        <a className={ css(styles.secondaryHeaderText, styles.textOrange, this.state.pageIndex == 0 ? styles.active : null) }>Info</a>
                    </div>
                    <div className={ css(styles.secondaryHeaderChild) }>
                        <a className={ css(styles.textGrey) }>Documentation</a>
                    </div>
                    <div className={ css(styles.secondaryHeaderChild) }>
                        <a className={ css(styles.textGrey) }>Changelog</a>
                    </div>
                    <div className={ css(styles.secondaryHeaderChild) } onClick={ () => this.secondaryHeader(3) }>
                        <a className={ css(styles.secondaryHeaderText, styles.textOrange, this.state.pageIndex == 3 ? styles.active : null) }>Support Us</a>
                    </div>
                </div>
                <div>
                    {this.showSelectedPage()}
                </div>
            </div>
        </div>
    );
  }
}

export default ARFramework