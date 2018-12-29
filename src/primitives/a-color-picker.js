import { AFRAME } from '../aframe';
import { initElement, getColor } from '../utils'

const aColorPicker = AFRAME.registerPrimitive('a-color-picker', {
    defaultComponents: {
        'color-picker': '',
        'look-at': '[camera]'
    }
})

AFRAME.registerComponent('color-picker', {
    init: function() {
        let self = this
        let root = initElement('a-entity')

        let img = initElement('a-image', {
            pos: { x: 0, y: 0, z: 0 }
        })
        img.addAttributes({
            src: '#picker-img',
            scale: '5 5 5'
        })

        root.appendChild(img)
        this.el.appendChild(root)

        img.addEventListener('click', (evt) => {
            evt.stopPropagation()
            let point = evt.detail.intersection.uv

            getColor(point, 'assets/images/picker.png')
                .then((color) => {
                    self.el.parentNode.emit('color-picked', { color })
                    self.el.parentNode.removeChild(self.el)
                })
        })

        img.addEventListener('mouseleave', () => {
            if (self.el.parentNode) {
                self.el.parentNode.removeChild(self.el)
            }
        })
    }
})

export default aColorPicker