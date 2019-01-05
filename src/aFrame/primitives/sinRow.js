import aframe from 'aframe'
import { initElement, rgbToHex } from '../lib/utils'

const sinRow = aframe.registerPrimitive('sin-row', {
    defaultComponents: {
        'sinRow': ''
    }
})

aframe.registerComponent('sinRow', {
    init: function() {

        var points = new Array(30);

        for (let i = 0; i < points.length; i++) {

            let cube = initElement('a-box', {
                pos: { x: -3 +0.2 * i, y: 2, z: -5 },
                width: '0.2',
                height: '0.2',
                depth: '0.2',
                color: '#5d91f7'
            })

            points[i] = cube
            
        }

        points.forEach(c => this.el.appendChild(c))
        this.els = points;
    },

    tick: function (time, timeDelta) {
        this.els.forEach(e => {
           e.object3D.position.y = 3 * Math.sin(Math.PI/4 * (e.object3D.position.x + time/200))
           
           let color = rgbToHex(e.object3D.position.x, e.object3D.position.y, 0)

            e.setAttribute('color', color)
        });
    }
})

export default sinRow