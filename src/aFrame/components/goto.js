import aframe from 'aframe'

const goto = aframe.registerComponent('goto', {
    schema: {
        default: ''
    },
    init: function() {
        const location = this.data
        const self = this
        this.el.addEventListener('click', (e) => { 
            console.log(self.el, self.el.style)
            self.el.emit('go-to', { location }, true)
        })

        this.el.addEventListener('mouseenter', (e) => { 
            document.body.style.cursor = 'pointer';
        })

        this.el.addEventListener('mouseleave', (e) => { 
            document.body.style.cursor = 'default';
        })
    }
})

export default goto