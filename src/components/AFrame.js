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
                    <a-entity id="level0">
                        <a-entity obj-model="obj: #logo-obj; mtl: #logo-mtl" position="0 2.5 -10" scale="1 1 1"></a-entity>
                        <sin-grid></sin-grid>
                    </a-entity>
                    

                    <a-entity id="level1" position="0 -12 0" rotation="-90 0 0">
                        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
                        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
                        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
                    </a-entity>

                    <a-entity id="level2"></a-entity>

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