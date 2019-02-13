import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { withRouter } from 'react-router'

/* eslint-disable no-unused-vars */
import AFRAME from 'aframe'
import sinGrid from '../aFrame/primitives/sinGrid'
import scrollListener from '../aFrame/components/scroll-listener'
import navigation from '../aFrame/systems/navigation'
import logoHandler from '../aFrame/components/logo-handler'
import cloudPoint from '../aFrame/primitives/cloudPoint'
import parallax from '../aFrame/components/parallax'
import smoke from '../aFrame/primitives/smoke'
import goto from '../aFrame/components/goto'
/* eslint-enable no-unused-vars */

// import 'aframe-particle-system-component'

import ScrollPls from './SrcollPls'

import Scrittalogo from '../assets/models/text3D/ScrittaLogo.obj'
import ScrittalogoMat from '../assets/models/text3D/ScrittaLogo.mtl'
import Torri from '../assets/models/towers/TorriMedie.obj'
import TorriMat from '../assets/models/towers/TorriMedie.mtl'
import Cloud1 from '../assets/models/clouds/Cloud1.obj'
import Cloud1Mat from '../assets/models/clouds/Cloud1.mtl'
import Cloud2 from '../assets/models/clouds/Cloud2.obj'
import Cloud2Mat from '../assets/models/clouds/Cloud2.mtl'
import Cloud3 from '../assets/models/clouds/Cloud3.obj'
import Cloud3Mat from '../assets/models/clouds/Cloud3.mtl'

import LogoBroadcast from '../assets/images/LogoSoloFacciaBroadcast.png'
import LogoStudio from '../assets/images/LogoSoloFacciaStudio.png'
import GreetingsImage from '../assets/images/Greetings.png'
import SmokeImage from '../assets/images/Smoke-Element.png'

const styles = StyleSheet.create({
    aFrame: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
})

class AFrame extends Component {

    constructor(props) {
        super(props)
        this.loaded = false
        
        // Teoricamente da sottrarre l'altezza dell'Header
        this.dAspect = 1920 / (1080);
        this.dFov = 80;

        const currRes = window.innerWidth;
        let isMob = false;
        if (currRes < 624)
            isMob = true;

        this.state = {
            customFov: this.dFov,
            isPortMobile: isMob
        }
    }

    componentDidMount() {
        const self = this
        const el = document.querySelector('a-scene')

        el.addEventListener('on-scroll', (e) => {
            if (self.loaded) {    
                const direction = e.detail.direction
                el.systems['navigation'].move(direction)
                if (el.systems['navigation'].level > 0) {      
                    window.dispatchEvent(new Event('stop-scroll-pls'))
                }
            }
        })

        el.addEventListener('loaded', () => {
            setTimeout(() => {
                self.loaded = true
                window.dispatchEvent(new Event('content-loaded'))
            }, 1)

            setTimeout(() => {
                if (el.systems['navigation'].level === 0) {
                    window.dispatchEvent(new Event('scroll-pls'))
                }
            }, 5000)
            
        })

        el.addEventListener('go-to', (e) => { this.redirectToTarget(e.detail.location) })

        window.addEventListener('resize', this.updateDimensions.bind(this));
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    updateDimensions() {
        var desFov = this.dFov;
        var newRatio = window.innerWidth / (window.innerHeight);
        if (newRatio <= this.dAspect)
            desFov = this.dFov + (this.dFov - (this.dFov * newRatio) / this.dAspect);
        this.setState({ 
            customFov: desFov,
            isPortMobile: window.innerWidth < 624
        });
    }

    redirectToTarget = (target) => {
        this.props.history.push(target)
    }

    render() {
        return ( 
            <div className={ css(styles.aFrame) }>
                <a-scene embedded fog="type: exponential; color: #fff;" vr-mode-ui="enabled: false" scroll-listener="" cursor="rayOrigin: mouse" inspector="url: xxx">
                    <a-assets>
                        <a-asset-item id="logo-obj" src={ Scrittalogo }></a-asset-item>
                        <a-asset-item id="logo-mtl" src={ ScrittalogoMat }></a-asset-item>

                        <a-asset-item id="towers-obj" src={ Torri }></a-asset-item>
                        <a-asset-item id="towers-mtl" src={ TorriMat }></a-asset-item>

                        <a-asset-item id="cloud-1-obj" src={ Cloud1 }></a-asset-item>
                        <a-asset-item id="cloud-1-mtl" src={ Cloud1Mat }></a-asset-item>

                        <a-asset-item id="cloud-2-obj" src={ Cloud2 }></a-asset-item>
                        <a-asset-item id="cloud-2-mtl" src={ Cloud2Mat }></a-asset-item>

                        <a-asset-item id="cloud-3-obj" src={ Cloud3 }></a-asset-item>
                        <a-asset-item id="cloud-3-mtl" src={ Cloud3Mat }></a-asset-item>

                        <img id="logoBroadcast" src={ LogoBroadcast } alt=""></img>
                        <img id="logoStudio" src={ LogoStudio } alt=""></img>
                        <img id="logoGreetings" src={ GreetingsImage } alt=""></img>
                        <img id="smokeElement" src={ SmokeImage } alt=""></img>
                    </a-assets>

                    <a-entity id="level0">
                        <a-entity obj-model="obj: #logo-obj;" position="0 2.5 -10" material="color: #424242" scale="1 1 1" logo-handler="" ></a-entity>
                        <sin-grid></sin-grid>
                    </a-entity>

                    <a-entity id="level1-middle" position="0 -20 -25" rotation="0 0 0">
                        <cloud-point cloudpoint="point:50; maxx:5; maxy:4; maxz:10;"></cloud-point>
                    </a-entity>
                    
                    <a-plane id="level-1-filter" position="0 -3 0" rotation="-90 0 0" height="200" width="200" color="#fff"></a-plane>

                    <a-entity id="level1" position="0 -20 -35" rotation="0 0 0">
                        <a-entity obj-model="obj: #towers-obj; mtl: #towers-mtl"  position="-3 -4 -10" rotation="0 20 0" scale="0.8 0.8 0.8"></a-entity>
                        <a-circle color="#CCC" position="0 -4 -10"  rotation="-90 0 0" radius="15"></a-circle>
                        <a-image id="greetingsImg" src="#logoGreetings" position="5.5 0 -9" width="6" height="6" parallax="rangex:0.1; rangey:0.1; speed:0.5" alphatest= 'val: 0.5'></a-image>
                        <a-entity obj-model="obj: #cloud-1-obj; mtl: #cloud-1-mtl" position="7 3 -12" rotation="0 0 0" scale="0.1 0.1 0.1" parallax="rangex:0.2; rangey:0.2; "></a-entity>
                        <a-entity obj-model="obj: #cloud-2-obj; mtl: #cloud-2-mtl" position="12 6 -15" rotation="0 0 0" scale="0.3 0.3 0.3" parallax="rangex:0.1; rangey:0.1; speed:1"></a-entity>
                        <a-entity obj-model="obj: #cloud-3-obj; mtl: #cloud-3-mtl" position="-13 5.5 -16" rotation="0 0 0" scale="0.5 0.3 0.1" parallax="rangex:0.2; rangey:0.2; speed:1"></a-entity>
                        <cloud-smoke position="0 4.5 -10" smoke-particles="particles:80; size:10; minx:-100; maxx:100; miny:-1; maxy:1; minz:-1; maxz:-4;" parallax="rangex:1; rangey:1; speed:2.5"></cloud-smoke> 
                    </a-entity>
                   
                    <a-plane id="level-2-filter" position="0 -25 -60" rotation="0 0 0" height="100" width="100" color="#fff"></a-plane>

                    <a-entity id="level2" position="-0.65 -25 -70" rotation="0 0 0">
                        <a-plane id="divisor" position="0 1.5 -4" rotation={ this.state.isPortMobile ? '0 90 0' : '0 0 0' } width="0.01" height="3" color="#9E9E9E"></a-plane>
                        <a-image id="studioImg"src="#logoStudio" position={ this.state.isPortMobile ? '0 5 -4' : '-3 2.5 -4' } width={ this.state.isPortMobile ? '4.5' : '2.5' } height={ this.state.isPortMobile ? '4.7' : '2.7' } goto="/studio" ></a-image>
                        <a-image id="broadcastImg" src="#logoBroadcast" position={ this.state.isPortMobile ? '0 -1 -4' : '3 2.5 -4' } width={ this.state.isPortMobile ? '4.5' : '2.5' } height={ this.state.isPortMobile ? '4.7' : '2.7' } goto="/broadcast"></a-image>
                        <cloud-point position={ this.state.isPortMobile ? '0 5 -6' : '-4 2.5 -6' } cloudpoint="maxx:1.5; maxy:3; maxz:0; offsety: -1.5; point:30; size:0.07; movement: true; preset: 0"></cloud-point>
                        <cloud-point position={ this.state.isPortMobile ? '0 -1 -6' : '4 2.5 -6' } cloudpoint="maxx:1.5; maxy:3; maxz:0; offsety: -1.5; point:30; size:0.07; color:#818285, #000000, #ed1c24, #fcd703; movement: true; preset: 1"></cloud-point>
                    </a-entity>

                    <a-sky color="#fff"></a-sky>
                    <a-entity id="player" position="0 0 0" rotation="0 0 0">
                        <a-camera fov={ this.state.customFov } look-controls-enabled="false" wasd-controls-enabled="false"></a-camera>
                    </a-entity> 
                </a-scene>
                <ScrollPls color='#FF926B' visible={ false }/>
            </div>
        );
    }
}

export default withRouter(AFrame)