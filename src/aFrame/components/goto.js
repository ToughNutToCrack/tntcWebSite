import aframe from 'aframe'

const goto = aframe.registerComponent('goto', {
    schema: {
        default: ''
    },
    init: function() {
        const location = this.data
        const self = this
        this.el.addEventListener('click', (e) => { 
            self.el.emit('go-to', { location }, true)
        })

    }
})

export default goto