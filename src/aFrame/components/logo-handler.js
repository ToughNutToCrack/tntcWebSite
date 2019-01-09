import aframe from 'aframe'
import 'aframe-animation-component'
import { initElement } from '../lib/utils'

const logoHandler = aframe.registerComponent('logo-handler', {
    init: function() {

        const quad = initElement('a-entity',{
            material: 'color: #000000; transparent: true; opacity: 0',
            geometry: 'primitive:plane; height: 2; width: 14'
        })

        this.el.setAttribute(
            'animation',
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

        this.el.appendChild(quad)

    }
})

export default logoHandler