import React, { Component } from 'react';
import aframe from 'aframe'
import { StyleSheet, css } from 'aphrodite';

import sinRow from '../aFrame/primitives/sinRow'
import scrollListener from "../aFrame/components/scroll-listener"

const styles = StyleSheet.create({
    aFrame: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#ECECEC'
    }
})

class AFrame extends Component {
    render() {
        return ( 
            <div className={css(styles.aFrame)}>
                <a-scene vr-mode-ui="enabled: false" scroll-listener="">
                    <sin-row></sin-row>
                    <a-sky color="#ECECEC"></a-sky>
                    <a-entity position="0 -1 0">
                        <a-camera look-controls-enabled="false" wasd-controls-enabled="false" ></a-camera>
                    </a-entity>
                </a-scene>
            </div>
        );
    }
}

export default AFrame;