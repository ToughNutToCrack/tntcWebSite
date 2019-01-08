import aframe from 'aframe'
import { initElement, rgbToHex } from '../lib/utils'

const sinRow = aframe.registerPrimitive('sin-row', {
    defaultComponents: {
        'sinrow': ''
    }
})

aframe.registerComponent('sinrow', {
    init: function() {

        let rows = 30
        let cols = 30

        var points = new Array(rows * cols);

        for (let j=0; j<rows; j++){
            for (let i = 0; i < cols; i++) {

                let box = initElement('a-box', {
                    pos: { x: -7+(0.5 * i), y: 0, z: -6+(0.3*j) },
                    depth: 0.01,
                    height: 0.01,
                    width: 0.01,
                    color: '#424242'
                })

                points[i+(j*cols)] = box 
                                  
            }
        }

        points.forEach(c => this.el.appendChild(c))
        this.els = points;
    },

    tick: function (time, timeDelta) {
        this.els.forEach(e => {
        //    e.object3D.position.y = 3 * Math.sin(Math.PI/4 * (e.object3D.position.x + time/200))
            e.object3D.position.y =  Math.sin(1 * (e.object3D.position.z + time/1000)) * 0.2
            //let multycolor = rgbToHex(e.object3D.position.x, e.object3D.position.y, 0)
            //let color = e.object3D.position.x >0 ? multycolor : "#424242"  

            //e.setAttribute('color', color)
        });
    }
})

export default sinRow