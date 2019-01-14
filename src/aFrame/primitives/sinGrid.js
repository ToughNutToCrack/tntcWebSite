import aframe from 'aframe'
import 'aframe-animation-component'
import { initElement } from '../lib/utils'

const sinGrid = aframe.registerPrimitive('sin-grid', {
    defaultComponents: {
        'singrid': ''
    }
})

aframe.registerComponent('singrid', {
    init: function() {

        this.selectedPoint = {'i': -100, 'j': -100}

        const rows = 15
        const cols = 30

        var points = new Array(rows * cols);

        for (let j=0; j<rows; j++){
            for (let i = 0; i < cols; i++) {

                const xCoord = -7.25+(0.5 * i)
                const zCoord = -6+(0.3*j)

                // const xCoord = -2.45+(0.1 * i)
                // const zCoord = -4+(0.1 * j)

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
                    material: 'color: #ffffff; transparent: true; opacity: 0',
                    geometry: 'primitive:circle; radius:0.1'
                })

                sphere.setAttribute(
                    'animation',
                    {
                        property: 'scale',
                        startEvents: 'mouseenter',
                        dir: 'alternate',
                        loop: '1',
                        from: '1 1 1',
                        to: '3 3 3',
                        dur: '500'
                    }
                )

                sphere.setAttribute(
                    'animation__color',
                    {
                        property: 'color',
                        startEvents: 'mouseenter',
                        dir: 'alternate',
                        loop: '1',
                        from: colorPoint,
                        to: '#e85356',
                        dur: '500'
                    }
                )

                sphere.appendChild(circle)
                sphere.addEventListener("mouseenter", ()=> {
                    this.animFrom(xCoord, zCoord)
                })
                sphere.addEventListener("mouseleave", ()=> {
                    this.animFrom(-100, -100)
                })
                points[ i+(j*cols) ] = sphere 
                                  
            }
        }

        points.forEach(c => this.el.appendChild(c))
        this.els = points;
    },

    tick: function (time, timeDelta) {
        this.els.forEach(e => {
            e.object3D.position.y = Math.sin(e.object3D.position.z + time/1000) * 0.2
        });

        // this.els.forEach(e => {
        //     let d = Math.sqrt(Math.pow(e.object3D.position.x - this.selectedPoint.i, 2) + Math.pow(e.object3D.position.z - this.selectedPoint.j, 2))
            
        //     let r = 0.5
        //     let maxY = 0.5

        //     if(this.selectedPoint.i != -100){
        //         if(d<=r){
        //             if(e.object3D.position.y< maxY){
        //                 e.object3D.position.y += 0.02 * (1/ (d +0.1) + 0.1)
        //             }
        //         }else{

        //             if(e.object3D.position.y > 0){
        //                 e.object3D.position.y -=  0.1
        //             } 
        //             if(e.object3D.position.y < 0){
        //                 e.object3D.position.y =  0
        //             }

        //         }
        //     }else{
        //         if(e.object3D.position.y > 0){
        //             e.object3D.position.y -=  0.1
        //         } 
        //         if(e.object3D.position.y < 0){
        //             e.object3D.position.y =  0
        //         }
        //     }
        // })

        
    },
    animFrom: function(i, j){
        this.selectedPoint = {'i': i, 'j': j}
    }
})

export default sinGrid