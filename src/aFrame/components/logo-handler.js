import aframe from 'aframe'
import 'aframe-animation-component'
import { initElement } from '../lib/utils'

const logoHandler = aframe.registerComponent('logo-handler', {
    init: function() {

        this.currentX = ''
        this.currentY = ''

        const quad = initElement('a-entity',{
            material: 'color: #000000; transparent: true; opacity: 0',
            geometry: 'primitive:plane; height: 2; width: 14'
        })

        this.el.setAttribute(
            'animation__scale',
            {
                property: 'scale',
                startEvents: 'click',
                dir: 'alternate',
                loop: '1',
                from: '1 1 1',
                to: '1.2 1.2 1.2',
                dur: '500'
            }
        )

        this.el.setAttribute(
            'animation__color',
            {
                property: 'material.color',
                startEvents: 'click',
                dir: 'alternate',
                loop: '1',
                from: '#424242',
                to: '#e85356',
                dur: '500'
            }
        )

        window.addEventListener('mousemove', (e) => {this.mousehandler(e.clientX, e.clientY)})

        this.el.appendChild(quad)
    },

    mousehandler(x, y){

        if(this.currentX == '') 
            this.currentX = x

        if(this.currentY == '') 
            this.currentY = y

        let xdiff = x - this.currentX
        let ydiff = y - this.currentY

        this.currentX = x
        this.currentY = y

        const minx = -0.3
        const maxx = 0.3

        const miny = 2.5-0.3
        const maxy = 2.5+0.3
 
        if(xdiff < 0){
            this.el.object3D.position.x += Math.abs(xdiff/1000)
        }else if(xdiff>0){
            this.el.object3D.position.x -= Math.abs(xdiff/1000)
        }

        if(this.el.object3D.position.x > maxx){
            this.el.object3D.position.x = maxx
        }
        if(this.el.object3D.position.x < minx){
            this.el.object3D.position.x = minx
        }


        if(ydiff < 0){
            this.el.object3D.position.y += Math.abs(ydiff/1000)
        }else if(ydiff>0){
            this.el.object3D.position.y -= Math.abs(ydiff/1000)
        }

        if(this.el.object3D.position.y > maxy){
            this.el.object3D.position.y = maxy
        }
        if(this.el.object3D.position.y < miny){
            this.el.object3D.position.y = miny
        }


        console.log(ydiff)
    }

})

export default logoHandler