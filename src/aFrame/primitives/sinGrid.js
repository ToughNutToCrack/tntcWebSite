import aframe from 'aframe'
import { initElement, initSpecialElement } from '../lib/utils'

const sinGrid = aframe.registerPrimitive('sin-grid', {
    defaultComponents: {
        'singrid': ''
    }
})

aframe.registerComponent('singrid', {
    init: function() {

        const rows = 30
        const cols = 30

        var points = new Array(rows * cols);

        for (let j=0; j<rows; j++){
            for (let i = 0; i < cols; i++) {

                const xCoord = -7.25+(0.5 * i)
                const zCoord = -6+(0.3*j)

                let colorPoint = '#424242'
                if( xCoord> 0){
                    const module = j%4
                    if(module === 0){ colorPoint = '#818285'}
                    if(module === 1){ colorPoint = '#000000'}
                    if(module === 2){ colorPoint = '#ed1c24'}
                    if(module === 3){ colorPoint = '#fcd703'}
                }

                const box = initElement('a-sphere', {
                    pos: { x: xCoord , y: 0, z: zCoord },
                    // depth: 0.01,
                    // height: 0.01,
                    // width: 0.01,
                    radius: 0.01,
                    color: colorPoint
                    // "color-on-mouse-over": ""
                })

                const circle = initElement('a-circle',{
                    material: 'color: #000000; transparent: true; opacity: 0',
                    geometry: 'primitive:circle; radius:0.1'

                })

                const animationSize = initSpecialElement('a-animation',{
                    attribute: 'scale',
                    begin: 'mouseenter',
                    direction: 'alternate',
                    repeat: '1',
                    to: '3 3 3',
                    duration: '0.1'
                })

                const animationColor = initSpecialElement('a-animation',{
                    attribute: 'color',
                    begin: 'mouseenter',
                    direction: 'alternate',
                    repeat: '1',
                    from: colorPoint,
                    to: '#e85356',
                    duration: '0.1'
                })

                box.appendChild(circle)
                box.appendChild(animationSize)
                box.appendChild(animationColor)

                points[ i+(j*cols) ] = box 
                                  
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