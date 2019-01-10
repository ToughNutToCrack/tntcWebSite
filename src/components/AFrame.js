import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import 'aframe'

/* eslint-disable no-unused-vars */
import sinGrid from '../aFrame/primitives/sinGrid'
import scrollListener from '../aFrame/components/scroll-listener'
import navigation from '../aFrame/systems/navigation'
import logoHandler from '../aFrame/components/logo-handler'
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
                        <a-asset-item id="logo-obj" src={process.env.PUBLIC_URL + '/assets/models/text3D/Scrittalogo.obj'}></a-asset-item>
                        <a-asset-item id="logo-mtl" src={process.env.PUBLIC_URL + '/assets/models/text3D/Scrittalogo.mtl'}></a-asset-item>
                        <a-asset-item id="towers-obj" src={process.env.PUBLIC_URL + '/assets/models/towers/Torri.obj'}></a-asset-item>
                        <a-asset-item id="towers-mtl" src={process.env.PUBLIC_URL + '/assets/models/towers/Torri.mtl'}></a-asset-item>
                        <img id="logoBroadcast" src={process.env.PUBLIC_URL + '/assets/images/LogoSoloFacciaBroadcast.png'}></img>
                        <img id="logoStudio" src={process.env.PUBLIC_URL + '/assets/images/LogoSoloFacciaStudio.png'}></img>
                    </a-assets>
                    <a-entity id="level0">
                        <a-entity obj-model="obj: #logo-obj;" position="0 2.5 -10" material="color: #424242" scale="1 1 1" logo-handler></a-entity> 
                        <sin-grid></sin-grid>
                    </a-entity>
                    

                    <a-entity id="level1" position="0 -10 0" rotation="-90 0 0">
                        <a-entity obj-model="obj: #towers-obj; mtl: #towers-mtl" position="-3 -4 -10" rotation="0 20 0" scale="0.8 0.8 0.8"></a-entity> 
                        {/* <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
                        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
                        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane> */}
                    </a-entity>

                    <a-entity id="level2" position="0 -30 0" rotation="-90 0 0">
                        <a-plane id="divisor" position="0 1.5 -4" rotation="0 0 0" width="0.01" height="3" color="#9E9E9E"></a-plane>
                        <a-image id="studioImg"src="#logoStudio" position="-3 2.5 -4" width="1" height="1.48"></a-image>
                        <a-image id="broadcastImg" src="#logoBroadcast" position="3 2.5 -4" width="1" height="1.48"></a-image>
                    </a-entity>

                    <a-sky color="#FFFFFF"></a-sky>
                    <a-entity id="player" position="0 0 0" rotation="0 0 0">
                        <a-camera look-controls-enabled="false" wasd-controls-enabled="false"></a-camera>
                        {/* <a-dodecahedron color="#FF926B" radius="5"></a-dodecahedron> */}

                    </a-entity>
                </a-scene>
            </div>
        );
    }
}

export default AFrame;