import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import 'aframe'

/* eslint-disable no-unused-vars */
import sinGrid from '../aFrame/primitives/sinGrid'
import scrollListener from '../aFrame/components/scroll-listener'
import navigation from '../aFrame/systems/navigation'
/* eslint-enable no-unused-vars */

const styles = StyleSheet.create({
    aFrame: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    }
})

class AFrame extends Component {
    componentDidMount() {
        const el = document.querySelector('a-scene')
        el.addEventListener('on-scroll', (e) => {
            const direction = e.detail.direction
            el.systems['navigation'].move(direction)
        })
    }
    render() {
        return ( 
            <div className={ css(styles.aFrame) }>
                <a-scene fog="type: exponential; color: #FFF; near: 0.1" vr-mode-ui="enabled: false" scroll-listener="" cursor="rayOrigin: mouse">
                    <a-assets>
                        <a-asset-item id="logo-obj" src={process.env.PUBLIC_URL + '/assets/models/Scrittalogo.obj'}></a-asset-item>
                        <a-asset-item id="logo-mtl" src={process.env.PUBLIC_URL + '/assets/models/Scrittalogo.mtl'}></a-asset-item>
                    </a-assets>
                    <a-entity obj-model="obj: #logo-obj; mtl: #logo-mtl" position="0 1 -10" scale="1 1 1"></a-entity>
                    {/* <a-entity obj-model="obj: #logo-obj; mtl: #logo-mtl"></a-entity> */}
                    <sin-grid></sin-grid>
                    <a-sky color="#FFFFFF"></a-sky>
                    <a-entity id="player" position="0 0 0">
                        <a-camera look-controls-enabled="false" wasd-controls-enabled="false"></a-camera>
                    </a-entity>
                </a-scene>
            </div>
        );
    }
}

export default AFrame;