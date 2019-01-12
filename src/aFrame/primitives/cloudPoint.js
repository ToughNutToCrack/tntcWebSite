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

        preset: {type: 'number', default: -1},

        size: {type: 'number', default: 0.3},
        point: {type: 'number', default: 7},
        color: { type: 'array', default: [ '#FF926B', '#424242' ]},
        rotation: {type: 'boolean', default: true},
        movement: {type: 'boolean', default: false}
    },
    init: function() {

        const a = this.data.maxx
        const b = this.data.maxy
        const c = this.data.maxz
        const size = this.data.size

        const usePreset = this.data.preset > -1 && presets.length-1 >= this.data.preset

        const maxPoint = (usePreset)? presets[this.data.preset].positions.length : this.data.point

        let prevPos = '0 0 0'

        for (let i = 0; i < maxPoint; i++) {

            const x = 0
            const y = 0 
            const z = 0

            const pos = x + " " + y + " " + z
            const r = 0.1

            if(usePreset){

                pos = presets[this.data.preset].positions[i]
                r = presets[this.data.preset].sizes[i]
                console.log(pos)

            }else{

                x = this.data.offsetx + Math.random() * (a - (-a) + 1) -a 
                y = this.data.offsety + Math.random() * (b - (-b) + 1) -b 
                z = this.data.offsetz + Math.random() * (c - (-c) + 1) -c

                pos = x + " " + y + " " + z

                r = Math.random() * (size + 0.1) 

            }
            
            
            
           

            const col = this.data.color[Math.floor(Math.random() * this.data.color.length)]


            const point = initElement('a-dodecahedron',{
                color: col,
                radius: r,
                position: pos
            })
            
            if(this.data.rotation){
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
            }

            if(this.data.movement){

                point.setAttribute(
                    'animation__position',
                    {
                        property: 'position',
                        loop: 'true',
                        dir: 'alternate',
                        easing: 'easeInOutBack',
                        from: pos,
                        to: prevPos,
                        dur: '60000'
                    }
                )
                prevPos = pos
            }
    
            this.el.appendChild(point)  
            
        }

        console.log("-------------------")

    }
})

const presets = [
    {
        positions:[
            '2.25 -3.75 0.03',
            '-0.94 -1.96 0.27',
            '0.064 -0.34 0.46',
            '-1.22 -3.19 0.23',
            '-1.26 0.26 0.96',
            '0.05 -4.33 0.02',
            '2.06 -3.022 0.55',
            '2.33 1.94 0.18',
            '0.41 -3.45 0.17',
            '-0.44 -0.27 0.36',
            '-1.21 -2.15 0.95',
            '0.57 0.65 0.44',
            '-1.45 0.23 0.83',
            '0.02 -0.10 0.21',
            '-0.543 -1.73 0.58',
            '-1.04 1.85 0.98',
            '-1.11 0.07 0.85',
            '-0.97 -1.26 0.57',
            '2.24 0.37 0.64',
            '0.31 -1.59 0.60',
            '-1.01 -2.99 0.74',
            '-0.82 -0.72 0.61',
            '-0.36 -0.14 0.64',
            '1.55 -3.76 0.90',
            '0.58 -1.39 0.03',
            '1.88 -1.17 0.68',
            '1.91 -3.97 0.96',
            '1.06 -4.40 0.89',
            '0.23 -3.50 0.77',
            '-1.32 -3.49 0.44'
        ],
        sizes:[
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05',
            '0.05'
        ]
    },
    {
        positions:[
            '2.25 -3.75 0.03',
            '-0.94 -1.96 0.27',
            '0.064 -0.34 0.46'
        ],
        sizes:[
            '0.1',
            '0.1',
            '0.1'
        ]

    }

]

export default cloudPoint