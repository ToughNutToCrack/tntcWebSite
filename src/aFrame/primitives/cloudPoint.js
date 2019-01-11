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

        offsetx: {type: 'number', default: 0},
        offsety: {type: 'number', default: 0},
        offsetz: {type: 'number', default: 0},

        size: {type: 'number', default: 0.3},
        point: {type: 'number', default: 7},
        color: { type: 'array', default: [ '#FF926B', '#424242' ]}
    },
    init: function() {

        const a = this.data.maxx
        const b = this.data.maxy
        const c = this.data.maxz
        const size = this.data.size

        const maxPoint = this.data.point
      
        for (let i = 0; i < maxPoint; i++) {
            const x = this.data.offsetx + Math.random() * (a - (-a) + 1) -a 
            const y = this.data.offsety + Math.random() * (b - (-b) + 1) -b 
            const z = this.data.offsetz + Math.random() * (c - (-c) + 1) -c
            
            const r = Math.random() * (size + 0.1) 
            const pos = x + " " + y + " " + z

            const col = this.data.color[Math.floor(Math.random() * this.data.color.length)]

            const point = initElement('a-dodecahedron',{
                color: col,
                radius: r,
                position: pos
            })

            point.setAttribute(
                'animation__rotation',
                {
                    property: 'rotation',
                    loop: 'true',
                    easing: 'linear',
                    from: '0 0 0',
                    to: '0 360 0',
                    dur: '5000'
                }
            )
    
            this.el.appendChild(point)
            
        }

    }
})

export default cloudPoint