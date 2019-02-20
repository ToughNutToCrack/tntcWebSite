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
        fontFamily: '"HeadLand One", serif', 
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
        fontFamily: '"HeadLand One", serif',
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
        fontFamily: '"Patua One", regular',
        fontSize: '5vW',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '40px',
        }
    },
    little: {
        fontFamily: '"HeadLand One", serif',
        fontSize: '2vw',
        '@media only screen and (min-width: 880px) and (max-width: 1280px) and (orientation: landscape)': {
            // fontSize: '15px',
            fontSize: '2vh'
        },
        '@media only screen and (min-width: 1280px) and (orientation: landscape)': {
            // fontSize: '15px',
            fontSize: '2.5vh'
        },
        '@media only screen and (min-width: 880px) and (orientation: portrait)': {
            fontSize: '3vw',
        }
    },
    normal: {
        fontFamily: '"Patua One", regular',
        fontSize: '4vW',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '35px',
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
        fontFamily: '"HeadLand One", serif',
        fontSize: '1.5vw',
        display: 'block',
        position: 'relative',
        top: '150px',
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            fontSize: '2vw',
            top: '100px',
        },
        '@media only screen and (max-height: 600px) and (orientation: landscape)': {
            top: '50px'
        },
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
        // marginTop: '300px',
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            flexDirection: 'column',
            // marginTop: '10px',
        }
    },
    singleImageContainer: {
        padding: '20px',
        '@media only screen and (max-height: 600px) and (orientation: landscape)': {
            paddingBottom: '200px'
        },
    },
    singleImage: {
        width: '30vw',
        maxWidth: '400px',
        height: 'auto',
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            maxWidth: '30vh',
            width: '25vh',
        },
        '@media only screen and (max-height: 600px) and (orientation: landscape)': {
            width: '18vw'
        },
        '@media only screen and (max-height: 400px) and (orientation: landscape)': {
            display: 'none'
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
        '@media only screen and (max-height: 600px) and (orientation: landscape)': {
            height: '22vh'
        },
        '@media only screen and (max-height: 400px) and (orientation: landscape)': {
            display: 'none'
        }
    },
    scrollWrapper: {
        height: 80,
        width: '100%',
        position: 'absolute',
        bottom: 15,
    }
})

class Studio extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <div className={ css(styles.mainText) }>
                    <p className={ css(styles.normal) }><span className={ css(styles.textRed, styles.big) }>Studio </span> division realizes project based on your ideas.</p>
                    <p className={ css(styles.little) }>3D Visualization</p>
                    <p className={ css(styles.little) }>Configurators</p>
                    <p className={ css(styles.little) }>Training experiences</p>
                    <p className={ css(styles.little) }>Videogames</p>
                    <p className={ css(styles.little) }>Animated Videos</p>
                    <p className={ css(styles.little) }>Custom experiences</p>
                </div>
                <div className={ css(styles.scrollWrapper) }>
                    <ScrollPls color='#424242' visible={ true } />
                </div>
            </div>

            <div className={ css(styles.section, styles.grey, styles.overflow) }>
                <div className={ css(styles.imagesText) }>
                    <p>Visualize <span className= { css(styles.textOrange, styles.normal) }>your products</span>, no matter what.</p> <p>We guide you through new technologies. </p>
                </div>
                <div className={ css(styles.imagesContainer, styles.wrapper) }>
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
                    <p>Shader development let us <span className= { css(styles.textOrange, styles.normal) }>customize</span> how your models are represented.</p> <p>We create tailored solutions <span className= { css(styles.textOrange, styles.normal) }>based on your needs.</span></p>
                </div>
                <div className={ css(styles.imagesContainer, styles.wrapper) }>
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
                    <p>Handheld Augmented Reality is changing how we perceive the world.</p>  <p>See the <span className= { css(styles.textOrange, styles.normal) }>difference.</span></p>
                </div>
                <div className={ css(styles.imagesContainer, styles.wrapper) }>
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

            {/* <div className={ css(styles.section, styles.white, styles.overflow) }>
                <div className={ css(styles.imagesText) }>
                    <p>Videogames are <span className= { css(styles.textOrange, styles.normal) }>art.</span></p>
                </div>
                <div className={ css(styles.imagesContainer, styles.wrapper) }>
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
            </div> */}

        </div>
    );
  }
}

export default Studio