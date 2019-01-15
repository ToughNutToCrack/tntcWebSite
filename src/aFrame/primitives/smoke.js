import aframe from 'aframe'
import 'aframe-animation-component'
import { initElement, initSpecialElement } from '../lib/utils'

const smoke = aframe.registerPrimitive('cloud-smoke', {
    defaultComponents: {
        'smoke-particles': ''
    }
})

aframe.registerComponent('smoke-particles', {
    schema: {
        color: { type: 'array', default: [ '#F5F5F5']},
        particles: {type: 'number', default: 100},
        size:{type: 'number', default: 20},
        maxx: {type: 'number', default: 10},
        maxy: {type: 'number', default: 10},
        maxz: {type: 'number', default: 10},
        minx: {type: 'number', default: -10},
        miny: {type: 'number', default: -10},
        minz: {type: 'number', default: -10},
    },
    init: function() {
        let particles = new Array(this.data.particles)

        for (let i = 0; i < this.data.particles; i++) {

            let pos = `
            ${this.el.object3D.position.x + Math.random() * (this.data.maxx - this.data.minx + 1) +this.data.minx } 
            ${ this.el.object3D.position.y + Math.random() * (this.data.maxy - this.data.miny + 1)  + this.data.miny} 
            ${this.el.object3D.position.z + Math.random() * (this.data.maxz  - this.data.minz + 1) +this.data.minz }`
               
            let rot = `0 0 ${Math.random() * 360}`

            const col = this.data.color[0]
            if(this.data.color.length>1){
                col = this.data.color[Math.floor(Math.random() * this.data.color.length)]
            }

            const particle = initElement('a-entity',{
                position: pos,
                rotation: rot,
                height: this.data.size,
                width: this.data.size,
                material: `color:${col}; transparent: true; src:#smokeElement;`,
                geometry: `primitive:plane; height: ${this.data.size}; width: ${this.data.size}`,
                blendmode: 'mode: NormalBlending; depthWrite: false'
            })

            this.el.appendChild(particle)
            particles[i] = particle
        }

        this.particles = particles
    },
    tick: function (time, timeDelta) {
        this.particles.forEach(e => {
            e.object3D.rotation.z += timeDelta /10000
        })
    }
})

aframe.registerComponent('blendmode', {
    schema: {
        //Available Modes are: var blendings = [ "NoBlending", "NormalBlending", "AdditiveBlending", "SubtractiveBlending", "MultiplyBlending" ];
        mode: {default: 'AdditiveBlending'},
        depthWrite: {default: true}
    },
  
      dependencies: ['material'],
  
    update: function () {
      // entity data
      var el = this.el
      var data = this.data
  
        if (el.components.hasOwnProperty("material")) {
            var mat = el.components.material.material
            mat.blending = aframe.THREE[data.mode]
            mat.depthWrite = this.data.depthWrite
            
        }
    }
})

export default smoke