import aframe from 'aframe'

const colorOnMouseOver = aframe.registerComponent('color-on-mouse-over', {
    init: function() {
        this.el.addEventListener('mouseenter', function() {
            this.setAttribute('color', '#e85356')
            this.object3D.scale.set(5, 5, 5)
        })
        this.el.addEventListener('mouseleave', function() {
            this.setAttribute('color', '#424242')
            this.object3D.scale.set(1, 1, 1)

        })
    }
})

export default colorOnMouseOver