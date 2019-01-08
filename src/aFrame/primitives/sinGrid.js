import aframe from 'aframe'
import { initElement, initSpecialElement, rgbToHex } from '../lib/utils'
import colorOnMouseOver from '../components/color-on-mouse-hover'

const sinGrid = aframe.registerPrimitive('sin-grid', {
    defaultComponents: {
        'singrid': ''
    }
})

aframe.registerComponent('singrid', {
    init: function() {

        let rows = 30
        let cols = 30

        var points = new Array(rows * cols);

        for (let j=0; j<rows; j++){
            for (let i = 0; i < cols; i++) {

                let box = initElement('a-sphere', {
                    pos: { x: -7+(0.5 * i), y: 0, z: -6+(0.3*j) },
                    // depth: 0.01,
                    // height: 0.01,
                    // width: 0.01,
                    radius: 0.01,
                    color: '#424242'
                    // "color-on-mouse-over": ""
                })

                let circle = initElement('a-circle',{
                    material: 'color: #000000; transparent: true; opacity: 0',
                    geometry: 'primitive:circle; radius:0.1'

                })

                let animationIn = initSpecialElement('a-animation',{
                    attribute: 'scale',
                    begin: 'mouseenter',
                    direction: 'alternate',
                    repeat: '1',
                    to: '3 3 3',
                    duration: '0.1'
                })

                box.appendChild(circle)
                box.appendChild(animationIn)

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

export default sinGrid