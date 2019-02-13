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
        debug: { type: 'boolean', default: false },
        maxx: { type: 'number', default: 2 },
        maxy: { type: 'number', default: 2 },
        maxz: { type: 'number', default: 2 },

        offsetx: { type: 'number', default: 0 },
        offsety: { type: 'number', default: 0 },
        offsetz: { type: 'number', default: 0 },

        preset: { type: 'number', default: -1 },

        size: { type: 'number', default: 0.3 },
        point: { type: 'number', default: 7 },
        color: { type: 'array', default: [ '#FF926B', '#424242' ] },
        rotation: { type: 'boolean', default: true },
        movement: { type: 'boolean', default: false }
    },
    init: function() {

        const a = this.data.maxx
        const b = this.data.maxy
        const c = this.data.maxz
        const size = this.data.size

        const usePreset = this.data.preset > -1 && presets.length - 1 >= this.data.preset

        const maxPoint = (usePreset) ? presets[this.data.preset].positions.length : this.data.point

        let prevPos = '0 0 0'

        for (let i = 0; i < maxPoint; i++) {

            let x = 0
            let y = 0 
            let z = 0

            let pos = x + ' ' + y + ' ' + z
            let r = 0.1

            if (usePreset) {

                pos = presets[this.data.preset].positions[i]
                r = (presets[this.data.preset].sizes.length - 1 >= i) ? presets[this.data.preset].sizes[i] : Math.random() * (size + 0.1) 

            } else {

                x = this.data.offsetx + Math.random() * (a - (-a) + 1) - a 
                y = this.data.offsety + Math.random() * (b - (-b) + 1) - b 
                z = this.data.offsetz + Math.random() * (c - (-c) + 1) - c

                pos = x + ' ' + y + ' ' + z

                r = Math.random() * (size + 0.1) 

            }

            if (this.data.debug) {
                console.log(pos)
            }
            
            const col = this.data.color[Math.floor(Math.random() * this.data.color.length)]

            const point = initElement('a-dodecahedron', {
                color: col,
                radius: r,
                position: pos
            })
            
            if (this.data.rotation) {
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

            if (this.data.movement) {

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

        if (this.data.debug) {
            console.log('-------------------')
        }

    }
})

const presets = [
    {
        positions: [
            '0 -2.280 0.397',
             '1.691 -0.576 0.351',
             '1.449 0.225 0.052',
             '-1.255 -0.857 0.961',
             '-1.441 -1.962 0.611',
             '1.758 -2.029 0.5274305155572832',
             '-1.284 1.672 0.8589264470830671',
             '0.068 -1.857 0.6464722220554118',
             '-1.663 -1.58565721374095059 0.6669918384660554',
             '-2.545 1.1313503213993812 0.3814114237954953',
             '1.201 0.7082412932238666 0.053196099988984225',
             '0.6608452547841868 -2.0839689982661573 0.2622904258390286',
             '1.352 1.9448021286529587 0.39046075552398296',
             '-1.485 -2.450 0.46892121338031556',
             '1.143519401148782 1.75728517738496 0.9487369016304086',
             '1.390511115583422 -2.4216846209294323 0.015630731898123917',
             '-1.731 0.055 0.030512777483777453',
             '0.449725842255197 2.088 0.5122628400577378',
             '1.455 -2.240 0.105577538882069',
             '-1.074 -0.130 0.7191148150897615',
             '1.10922218051061083 1.119 0.7169489663973592',
             '-1.2681959544456225 -2.441 0.35498835821236563',
             '1.7283039472859887 -1.4055051945149164 0.7845572737492654',
             '-1.643 -1.104 0.9199919030403862',
             '1.5149172650790064 -2.5450472063399343 0.6237135309690784',
             '1.523288790706859 1.620003582355496 0.19230558583947488',
             '-1.4355161065207458 1.5148748941359598 0.1165630480268327',
             '-2.404365953217698 1.5890054468181711 0.26331194484255604',
             '-1.694 0.71749999108629 0.03842683720571638',
             '-1.4853030419009068 0.6157767054405783 0.38824835392578927'
        ],
        sizes: []
    },
    {
        positions: [
            '0 -2.280 0.397',
             '1.691 -0.576 0.351',
             '1.449 0.225 0.052',
             '-2.604 -0.280 0.961',
             '-1.441 -1.962 0.611',
             '1.758 -2.029 0.5274305155572832',
             '-1.284 1.672 0.8589264470830671',
             '0.068 -1.857 0.6464722220554118',
             '-1.663 -1.58565721374095059 0.6669918384660554',
             '-2.545 1.1313503213993812 0.3814114237954953',
             '2.206 0.7082412932238666 0.053196099988984225',
             '0.6608452547841868 -2.0839689982661573 0.2622904258390286',
             '1.352 1.9448021286529587 0.39046075552398296',
             '-1.485 -2.450 0.46892121338031556',
             '1.143519401148782 1.75728517738496 0.9487369016304086',
             '1.390511115583422 -2.4216846209294323 0.015630731898123917',
             '-1.731 0.055 0.030512777483777453',
             '0.449725842255197 2.088 0.5122628400577378',
             '1.455 -2.240 0.105577538882069',
             '-1.074 -0.130 0.7191148150897615',
             '1.10922218051061083 1.119 0.7169489663973592',
             '-1.2681959544456225 -2.441 0.35498835821236563',
             '1.7283039472859887 -1.4055051945149164 0.7845572737492654',
             '-1.643 -2.072 0.9199919030403862',
             '1.5149172650790064 -2.5450472063399343 0.6237135309690784',
             '1.523288790706859 1.620003582355496 0.19230558583947488',
             '-1.4355161065207458 1.5148748941359598 0.1165630480268327',
             '-2.404365953217698 1.5890054468181711 0.26331194484255604',
             '-1.694 0.71749999108629 0.03842683720571638',
             '-1.4853030419009068 0.6157767054405783 0.38824835392578927'
        ],

        sizes: []
    }

]

export default cloudPoint