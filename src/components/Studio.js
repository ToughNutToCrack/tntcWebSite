import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import ImageZoom from 'react-medium-image-zoom'

import ScrollPls from './SrcollPls'

import Car1 from '../assets/images/studio/Car1.jpg'
import Car2 from '../assets/images/studio/Car2.jpg'
import Car3 from '../assets/images/studio/Car3.jpg'

import Shader1 from '../assets/images/studio/Shader1.jpg'
import Shader2 from '../assets/images/studio/Shader2.png'
import Shader3 from '../assets/images/studio/Shader3.jpg'

import AR1 from '../assets/images/studio/AR1.jpg'
import AR2 from '../assets/images/studio/AR2.jpg'
import AR3 from '../assets/images/studio/AR3.jpg'

import Game1 from '../assets/images/studio/Game1.jpg'
import Game2 from '../assets/images/studio/Game2.jpg'
import Game3 from '../assets/images/studio/Game3.jpg'

const styles = StyleSheet.create({
    container: {
        // scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    wrapper: {
        fontFamily: '"Patua One", regular',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3vw',
        // scrollSnapAlign: 'start'
    },
    section: {
        width: '100%',
        height: '100%',
        // scrollSnapAlign: 'start'
    },
    divisionsWrapper: {
        fontFamily: '"Patua One", regular',
        height: '100%',
        width: '100%',
        fontSize: '3vh'
    },
    divisionHeader: {
        width: '100%',
        height: '30%',
        float: 'left',
    },
    division: {
        width: '50%',
        height: '70%',
        float: 'left',
    },
    black: {
        backgroundColor: '#000000',
        color: '#ffffff',
    },
    white: {
        backgroundColor: '#ffffff',
        color: '#424242',
    },
    grey: {
        backgroundColor: '#424242',
        // backgroundColor: '#9E9E9E',
        color: '#ffffff',
    },
    red: {
        backgroundColor: '#ed1c24',
        color: '#ffffff',
    },
    yellow: {
        backgroundColor: '#fcd703',
        color: '#000000',
    },
    orange: {
        backgroundColor: '#FF926B',
        color: '#ffffff',
    },
    box: {
        boxSizing: 'border-box'
    },
    mainText: {
        display: 'block',
        fontSize: '3vw',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '30px',
            
        }
    },
    text: {
        display: 'block',
        
        // scrollSnapAlign: 'start',
        // fontSize: '3vh',
        // '@media screen and (max-width: 880px) and (orientation: portrait)': {
        //     fontSize: '3vw',
        // }
        fontSize: '3vw',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '30px',
        }
    },
    paddingTop: {
        paddingTop: '150px'
    },
    big: {
        fontSize: '5vW',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '40px',
        }
    },
    little: {
        fontSize: '2vw',
        '@media only screen and (min-width: 880px) and (max-width: 1280px) and (orientation: landscape)': {
            // fontSize: '15px',
            fontSize: '2vh'
        },
        '@media only screen and (min-width: 1280px) and (orientation: landscape)': {
            // fontSize: '15px',
            fontSize: '3vh'
        },
        '@media only screen and (min-width: 880px) and (orientation: portrait)': {
            fontSize: '3vw',
        },
        // '@media only screen and (max-width: 530px)': {
        //     fontSize: '4vw',
        // }
    },
    normal: {
        fontSize: '3vW',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '30px',
        }
    },
    textRed: {
        color: '#ed1c24'
    },
    textOrange: {
        color: '#FF926B'
    },
    overflow: {
        overflow: 'hidden'
    },
    imagesText: {
        fontFamily: '"Patua One", regular',
        fontSize: '2vw',
        display: 'block',
        position: 'relative',
        top: '150px',
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            fontSize: '3vw',
            top: '10px',
        }
    },
    imagesContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // flexWrap: 'wrap',
        flexDirection: 'row',
        flex: '100%',
        maxWidth: '100%',
        padding: '20px',
        marginTop: '300px',
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            flexDirection: 'column',
            marginTop: '10px',
        },
    },
    singleImageContainer: {
        padding: '20px'
    },
    singleImage: {
        width: '30vw',
        maxWidth: '400px',
        height: 'auto',
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            maxWidth: '30vh',
            width: '25vh',
        },
    },
    singleVerticalImage: {
        width: 'auto',
        maxHeight: '300px',
        height: '30vh',
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            maxHeight: '200px',
            height: '15vh',
        },
    }
})

class Studio extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <div className={ css(styles.mainText) }>
                    <p><span className={ css(styles.textRed, styles.big) }>Studio </span> division realizes project based on your ideas.</p>
                    <p className={ css(styles.little) }>3D Visualization</p>
                    <p className={ css(styles.little) }>Configurators</p>
                    <p className={ css(styles.little) }>Training experiences</p>
                    <p className={ css(styles.little) }>Videogames</p>
                    <p className={ css(styles.little) }>Animated Videos</p>
                    <p className={ css(styles.little) }>Custom experiences</p>
                </div>
                <ScrollPls color='#424242' visible={ true } />
            </div>

            <div className={ css(styles.section, styles.grey, styles.overflow) }>
                <div className={ css(styles.imagesText) }>
                    <p>Visualize your products, no matter what.</p> <p>We guide you through new technologies. </p>
                </div>
                <div className={ css(styles.imagesContainer) }>
                    
                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: Car1,
                                alt: '',
                                className: css(styles.singleImage)
                            } }
                            zoomImage={ {
                                src: Car1,
                                alt: ''
                            } }
                        />
                    </div>
                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: Car2,
                                alt: '',
                                className: css(styles.singleImage)
                            } }
                            zoomImage={ {
                                src: Car2,
                                alt: ''
                            } }
                        />
                    </div>
                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: Car3,
                                alt: '',
                                className: css(styles.singleImage)
                            } }
                            zoomImage={ {
                                src: Car3,
                                alt: ''
                            } }
                        />
                    </div>
                </div>
            </div>

            <div className={ css(styles.section, styles.white, styles.overflow) }>
                <div className={ css(styles.imagesText) }>
                    <p>Shader development let us customize how your models are represented.</p> <p>We create tailored solutions based on your needs.</p>
                </div>
                <div className={ css(styles.imagesContainer) }>
                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: Shader1,
                                alt: '',
                                className: css(styles.singleImage)
                            } }
                            zoomImage={ {
                                src: Shader1,
                                alt: ''
                            } }
                        />
                    </div>
                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: Shader3,
                                alt: '',
                                className: css(styles.singleImage)
                            } }
                            zoomImage={ {
                                src: Shader3,
                                alt: ''
                            } }
                        />
                    </div>
                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: Shader2,
                                alt: '',
                                className: css(styles.singleImage)
                            } }
                            zoomImage={ {
                                src: Shader2,
                                alt: ''
                            } }
                        />
                    </div>
                </div>
            </div>

            <div className={ css(styles.section, styles.grey, styles.overflow) }>
                <div className={ css(styles.imagesText) }>
                    <p>Handheld Augmented Reality is changing how we perceive the world.</p>  <p>See the difference.</p>
                </div>
                <div className={ css(styles.imagesContainer) }>
                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: AR1,
                                alt: '',
                                className: css(styles.singleVerticalImage)
                            } }
                            zoomImage={ {
                                src: AR1,
                                alt: ''
                            } }
                        />
                    </div>
                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: AR2,
                                alt: '',
                                className: css(styles.singleVerticalImage)
                            } }
                            zoomImage={ {
                                src: AR2,
                                alt: ''
                            } }
                        />
                    </div>
                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: AR3,
                                alt: '',
                                className: css(styles.singleVerticalImage)
                            } }
                            zoomImage={ {
                                src: AR3,
                                alt: ''
                            } }
                        />
                    </div>
                </div>
            </div>

            <div className={ css(styles.section, styles.white, styles.overflow) }>
                <div className={ css(styles.imagesText) }>
                    <p>Videogames are art.</p>
                </div>
                <div className={ css(styles.imagesContainer) }>
                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: Game1,
                                alt: '',
                                className: css(styles.singleImage)
                            } }
                            zoomImage={ {
                                src: Game1,
                                alt: ''
                            } }
                        />
                    </div>

                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: Game2,
                                alt: '',
                                className: css(styles.singleImage)
                            } }
                            zoomImage={ {
                                src: Game2,
                                alt: ''
                            } }
                        />
                    </div>

                    <div className={ css(styles.singleImageContainer) }>
                        <ImageZoom
                            image={ {
                                src: Game3,
                                alt: '',
                                className: css(styles.singleImage)
                            } }
                            zoomImage={ {
                                src: Game3,
                                alt: ''
                            } }
                        />
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default Studio