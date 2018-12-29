import AFRAME from 'aframe';
import { initElement } from '../utils'

const aRoom = AFRAME.registerPrimitive('a-room', {
    defaultComponents: {
        room: {},
        rotation: { x: 0, y: 0, z: 0 }
    }
})

AFRAME.registerComponent('room', {
    init: function() {

        let wall0 = initElement('a-box', {
            pos: { x: 0, y: 1.5, z: -1.45 },
            width: '3',
            height: '3',
            depth: '.1',
            color: '#5d91f7'
        })
        let wall1 = initElement('a-box', {
            pos: { x: -1.45, y: 1.5, z: 0 },
            rot: { x: 0, y: 90, z: 0 },
            width: '3',
            height: '3',
            depth: '.1',
            color: '#5d91f7'
        })
        let floor = initElement('a-plane', {
            pos: { x: 0, y: 0.005, z: 0 },
            rot: { x: -90, y: 0, z: 0 },
            width: '3',
            height: '3',
            depth: '.1',
            color: '#5d91f7'
        })
        let els = [wall0, wall1, floor]

        els.forEach(c => this.el.appendChild(c))
    }
})

export default aRoom