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
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainWrapper: {
        '@media only screen and (max-height: 330px)': {
            position: 'relative',
            top: '10%'
        }
    },
    section: {
        width: '100%',
        height: '100%'
    },
    divisionsWrapper: {
        height: 'calc(100% - 100px)',
        width: '100%',
    },
    division: {
        width: '100%',
        height: 'calc(100% - 100px)'
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
    paddingTop: {
        paddingTop: '150px'
    },
    big: {
        fontSize: '4vW',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '3vw',
        }
    },
    little: {
        fontSize: '2vw',
        '@media only screen and (min-width: 880px) and (orientation: landscape)': {
            fontSize: '22px',
        }
    },
    normal: {
        fontSize: '2vW',
        '@media only screen and (max-width: 880px)': {
            fontSize: '3vw',
        },
        '@media only screen and (max-width: 440px)': {
            fontSize: '4vw',
        },
        '@media only screen and (max-height: 400px)': {
            fontSize: '4vh',
            lineHeight: '5px'
        },
        '@media screen and (max-height: 460px) and (max-width: 426px) and (orientation: portrait)': {
            lineHeight: '20px'
        }
    },
    normalxs: {
        fontSize: '1.3vW',
        '@media only screen and (max-width: 880px)': {
            fontSize: '2vw',
        },
        '@media only screen and (max-width: 440px)': {
            fontSize: '3vw',
        },
        '@media only screen and (max-height: 440px)': {
            fontSize: '3vh',
            lineHeight: '5px'
        }
    },
    responsiveFont: {
        position: 'relative',
        top: '10%',
        fontSize: '1.5vW',
        '@media only screen and (max-width: 880px)': {
            fontSize: '2vw',
        },
        '@media only screen and (max-width: 440px)': {
            fontSize: '3vw',
        },
        '@media only screen and (max-height: 440px)': {
            fontSize: '3vh',
            lineHeight: '5px'
        },
        '@media screen and (max-height: 460px) and (max-width: 426px) and (orientation: portrait)': {
            top: '30%',
            lineHeight: '20px'
        },
        '@media only screen and (max-height: 400px) and (orientation: landscape)': {
            top: '38%',
            lineHeight: '10px'
        }
    },
    responsiveTop: {
        '@media screen and (max-width: 880px) and (orientation: portrait)': {
            paddingTop: '30%'
        }
    },
    hideObject: {
        '@media screen and (max-height: 460px) and (max-width: 426px) and (orientation: portrait)': {
            display: 'none'
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
    imagesContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: '100%',
        maxWidth: '100%',
        position: 'relative',
        bottom: '10%',
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {
            flexDirection: 'column'
        }
    },
    imagesContainerVertical: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: '100%',
        maxWidth: '100%',
        position: 'relative',
        bottom: '10%'
    },
    center: {
        verticalAlign: 'middle'
    },
    singleImageContainer: {
        padding: '5px'
    },
    singleImage: {
        width: '30vw',
        height: 'auto',
        '@media only screen and (max-height: 400px) and (orientation: landscape)': {
            display: 'none'
        },
        '@media only screen and (max-width: 880px) and (orientation: portrait)': {	
            maxWidth: '30vh',	
            width: 'auto',	
            height: '12vh',	
        },
        '@media only screen and (max-height: 600px) and (orientation: landscape)': {	
            width: '18vw'	
        },
    },
    singleVerticalImage: {
        width: 'auto',
        height: '40vh',
        '@media only screen and (max-height: 400px) and (orientation: landscape)': {
            display: 'none'
        },
        '@media only screen and (max-width: 800px) and (orientation: portrait)': {
            height: '25vh'
        }
    },
    scrollWrapper: {
        height: 80,
        width: '100%',
        position: 'absolute',
        bottom: 15,
    },
    font1: {
        fontFamily: '"HeadLand One", serif'
    },
    font2: {
        fontFamily: '"Patua One", regular'
    }
})

class Studio extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.wrapper, styles.section, styles.white, styles.font1) }>
                <div className={ css(styles.mainWrapper) }>
                    <p className={ css(styles.normal, styles.font2) }><span className={ css(styles.textRed) }>Studio </span> division realizes project based on your ideas.</p>
                    <p className={ css(styles.normalxs) }>Virtual and Augmented Reality</p>
                    <p className={ css(styles.normalxs) }>3D Visualization</p>
                    <p className={ css(styles.normalxs) }>Configurators</p>
                    <p className={ css(styles.normalxs) }>Training experiences</p>
                    <p className={ css(styles.normalxs) }>Videogames</p>
                    <p className={ css(styles.normalxs) }>Animated Videos</p>
                    <p className={ css(styles.normalxs) }>Custom experiences</p>
                </div>
                <div className={ css(styles.scrollWrapper) }>
                    <ScrollPls color='#424242' visible={ true } />
                </div>
            </div>

            <div className={ css(styles.division, styles.grey, styles.overflow, styles.font1) }>
                <div className={ css(styles.responsiveFont) }>
                    <p>Visualize <span className= { css(styles.textOrange) }>your products</span>, no matter what.</p> <p>We guide you through new technologies. </p>
                </div>
                <div className={ css(styles.imagesContainer, styles.wrapper, styles.hideObject, styles.center) }>
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

            <div className={ css(styles.division, styles.white, styles.overflow, styles.font1) }>
                <div className={ css(styles.responsiveFont) }>
                    <p>Shader development let us <span className= { css(styles.textOrange) }>customize</span> how your models are represented.</p> <p>We create tailored solutions <span className= { css(styles.textOrange) }>based on your needs.</span></p>
                </div>
                <div className={ css(styles.imagesContainer, styles.wrapper, styles.hideObject) }>
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

            <div className={ css(styles.division, styles.grey, styles.overflow, styles.font1) }>
                <div className={ css(styles.responsiveFont) }>
                    <p>Handheld Augmented Reality is changing how we perceive the world.</p>  <p>See the <span className= { css(styles.textOrange) }>difference.</span></p>
                </div>
                <div className={ css(styles.imagesContainerVertical, styles.wrapper, styles.hideObject) }>
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