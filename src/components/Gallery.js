import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const styles = StyleSheet.create({
    wrapper: {
        fontFamily: '"Patua One", regular',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3vw',
        scrollSnapAlign: 'start',
        '@media only screen and (max-height: 700px) and (orientation: landscape)': {
          alignItems: 'flex-end',
        }
    },
    inner: {
      width: '80%',
      height: '70%',
      maxWidth: '80%',
      maxHeight: '70%',
      display: 'flex',
      justifyContent: 'center',
      '@media only screen and (max-height: 900px) and (orientation: landscape)': {
        // maxHeight: '65%',
        overflow: 'hidden',
      }
    }
})

class Gallery extends Component {

    _renderCustomControls() {
        return <a href='' className='image-gallery-custom-action' onClick={ this._customAction.bind(this) }/>
        }

    render() {

        const images = [
            {
              original: 'http://lorempixel.com/1920/1080/city/1//'
            },
            {
              original: 'http://lorempixel.com/1920/1080/city/2/'
            },
            {
              original: 'http://lorempixel.com/1920/1080/city/3/'
            }
          ]

        return (
            <div className={ css(styles.wrapper) }>
                <div className={ css(styles.inner) }>
                    <ImageGallery items={ images } showThumbnails={ false } showBullets={ true } showNav={ false } autoPlay={ true } lazyLoad={ true } showPlayButton={ false } />
                </div>
            </div>
        )
    }
}

export default Gallery