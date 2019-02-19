import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import ImageZoom from 'react-medium-image-zoom'

import ScrollPls from './SrcollPls'

import Car1 from '../assets/images/studio/Car1.jpg'
import Car2 from '../assets/images/studio/Car2.jpg'
import Car3 from '../assets/images/studio/Car3.jpg'

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
        '@media only screen and (min-width: 880px) and (max-width: 1920px) and (orientation: landscape)': {
            // fontSize: '22px',
            fontSize: '3vh'
        },
        '@media only screen and (min-width: 880px) and (orientation: portrait)': {
            fontSize: '3vw',
        },
        '@media only screen and (max-width: 530px)': {
            fontSize: '4vw',
        }
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
    imageGalleryContainer: {
        marginTop: '100px',
        width: '90%',
        height: 'auto',
        maxWidth: '1280px',
        overflow: 'hidden',
        display: 'flex'
    },
    imagesContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flex: '100%',
        padding: '20px'
    },
    singleImageContainer: {
        padding: '20px'
    },
    singleImage: {
        maxWidth: '350px',
        height: 'auto',
        // padding: '20px',
    }
})

class Studio extends Component {
  render() {
    return (
        <div className={ css(styles.container) }>
            <div className={ css(styles.wrapper, styles.section, styles.white) }>
                <div className={ css(styles.mainText) }>
                    <p className={ css(styles.little) }>With <span className={ css(styles.textRed, styles.big) }>Studio </span> division realizes project based on your ideas.</p>
                    <p className={ css(styles.little) }>3D Visualization</p>
                    <p className={ css(styles.little) }>Configurators</p>
                    <p className={ css(styles.little) }>Training experiences</p>
                    <p className={ css(styles.little) }>Videogames</p>
                    <p className={ css(styles.little) }>Animated Videos</p>
                    <p className={ css(styles.little) }>Custom experiences</p>
                </div>
                <ScrollPls color='#424242' visible={ true } />
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.grey) }>
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

                    {/* <img className={ css(styles.singleImage) } src={Car1} alt=''/>
                    <img className={ css(styles.singleImage) } src={Car2} alt=''/>
                    <img className={ css(styles.singleImage) } src={Car3} alt=''/> */}
                </div>
            </div>

            {/* <div className={ css(styles.wrapper, styles.section, styles.grey) }>
                <img className={ css(styles.imageGalleryContainer) } src={Car1} alt=''/>
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.orange) }>
                <img className={ css(styles.imageGalleryContainer) } src={Car2} alt=''/>
            </div>

            <div className={ css(styles.wrapper, styles.section, styles.grey) }>
                <img className={ css(styles.imageGalleryContainer) } src={Car3} alt=''/>
            </div> */}

        </div>
    );
  }
}

export default Studio