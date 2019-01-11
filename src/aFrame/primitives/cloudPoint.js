import aframe from 'aframe'
import 'aframe-animation-component'
import { initElement } from '../lib/utils'

const cloudPoint = aframe.registerPrimitive('cloud-point', {
    defaultComponents: {
        'cloudpoint': ''
    }
})

aframe.registerComponent('cloudpoint', {
    schema: {
        maxx: {type: 'number', default: 2},
        maxy: {type: 'number', default: 2},
        maxz: {type: 'number', default: 2},
        size: {type: 'number', default: 0.3},
        point: {type: 'number', default: 7}
    },
    init: function() {

        const a = this.data.maxx
        const b = this.data.maxy
        const c = this.data.maxz
        const size = this.data.size

        const maxPoint = this.data.point
      
        for (let i = 0; i < maxPoint; i++) {
            const x = Math.random() * (a - (-a) + 1) -a 
            const y = Math.random() * (b - (-b) + 1) -b 
            const z = Math.random() * (c - (-c) + 1) -c
            
            const r = Math.random() * (size + 0.1) 
            const pos = x + " " + y + " " + z

            const point = initElement('a-dodecahedron',{
                color: '#FF926B',
                radius: r,
                position: pos
            })
    
            this.el.appendChild(point)
            
        }

    }
})

export default cloudPoint