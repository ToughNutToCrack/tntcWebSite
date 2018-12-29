import { AFRAME, Color } from '../aframe';
import { initElement } from '../utils'

const calculateOriginInCameraDir = function(point, magnitude) {
    const player = document.getElementById("player")
    const cameraPos = player.object3D.position.clone().add(document.getElementById("player-camera").object3D.position)
    return cameraPos.sub(point).normalize().multiplyScalar(magnitude)
}

const cursorListener = AFRAME.registerComponent('cursor-listener', {
    schema: { type: 'array' },
    init: function() {
        const modelsFlat = this.data
        let isEmpty = true

        this.el.addEventListener('click', function(e) {
            if (isEmpty) {
                let origin = calculateOriginInCameraDir(e.detail.intersection.point, 5)
                let colorPicker = initElement('a-color-picker', { pos: origin })
                this.appendChild(colorPicker)
            }
        })

        this.el.addEventListener('color-picked', function(evt) {
            // TODO stopPropagation ?
            const hex = evt.detail.color
            const color = new Color(`rgb(${hex[0]}, ${hex[1]}, ${hex[2]})`).getHexString()

            const randomIndexModel = Math.floor(Math.random() * modelsFlat.length)
            const box = initElement('a-entity', {
                'obj-model': 'obj: ' + modelsFlat[randomIndexModel],
                'material': `color: #${color}`,
                'scale': '1.3 1.3 1.3'
            })
            this.appendChild(box)
            this.setAttribute('material', 'opacity', '0')
            isEmpty = false
        })

        this.el.addEventListener('mouseenter', function() {
            if (isEmpty) {
                this.setAttribute('material', 'color', '#330044')
            }
        })

        this.el.addEventListener('mouseleave', function() {
            if (isEmpty) {
                this.setAttribute('material', 'color', '#003344')
            }
        })
    }
})

export default cursorListener