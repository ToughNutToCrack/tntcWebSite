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
                    const mod = j % 4
                    if(mod === 0){ colorPoint = '#818285'}
                    if(mod === 1){ colorPoint = '#000000'}
                    if(mod === 2){ colorPoint = '#ed1c24'}
                    if(mod === 3){ colorPoint = '#fcd703'}
                }

                const sphere = initElement('a-sphere', {
                    pos: { x: xCoord , y: 0, z: zCoord },
                    radius: 0.01,
                    color: colorPoint
                })

                const circle = initElement('a-circle',{
                    material: 'color: #000000; transparent: true; opacity: 0',
                    geometry: 'primitive:circle; radius:0.1'
                })

                const animationSize = initSpecialElement('a-animation', {
                    attribute: 'scale',
                    begin: 'mouseenter',
                    direction: 'alternate',
                    repeat: '1',
                    to: '3 3 3',
                    duration: '0.1'
                })

                const animationColor = initSpecialElement('a-animation', {
                    attribute: 'color',
                    begin: 'mouseenter',
                    direction: 'alternate',
                    repeat: '1',
                    from: colorPoint,
                    to: '#e85356',
                    duration: '0.1'
                })

                sphere.appendChild(circle)
                sphere.appendChild(animationSize)
                sphere.appendChild(animationColor)

                points[ i+(j*cols) ] = sphere 
                                  
            }
        }

        points.forEach(c => this.el.appendChild(c))
        this.els = points;
    },

    tick: function (time) {
        this.els.forEach(e => {
            e.object3D.position.y = Math.sin(e.object3D.position.z + time/1000) * 0.2
        });
    }
})

export default sinGrid