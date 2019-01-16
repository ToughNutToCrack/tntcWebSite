import aframe from 'aframe'

const parallax = aframe.registerComponent('parallax', {
    schema: {
        rangex: { type: 'number', default: 0.3 },
        rangey: { type: 'number', default: 0.3 },
        speed: { type: 'number', default: 2 },

    },
    init: function() {
        this.minx = this.el.object3D.position.x - this.data.rangex
        this.maxx = this.el.object3D.position.x + this.data.rangex

        this.miny = this.el.object3D.position.y - this.data.rangey
        this.maxy = this.el.object3D.position.y + this.data.rangey

        this.speed = 2000 / this.data.speed

        this.currentX = ''
        this.currentY = ''

        window.addEventListener('mousemove', (e) => { this.mousehandler(e.clientX, e.clientY) })

    },
    mousehandler(x, y) {

        if (this.currentX == '') 
            this.currentX = x

        if (this.currentY == '') 
            this.currentY = y

        const xdiff = x - this.currentX
        const ydiff = y - this.currentY

        this.currentX = x
        this.currentY = y
 
        if (xdiff < 0) {
            this.el.object3D.position.x += Math.abs(xdiff / this.speed)
        } else if (xdiff > 0) {
            this.el.object3D.position.x -= Math.abs(xdiff / this.speed)
        }

        if (this.el.object3D.position.x > this.maxx) {
            this.el.object3D.position.x = this.maxx
        }
        if (this.el.object3D.position.x < this.minx) {
            this.el.object3D.position.x = this.minx
        }

        if (ydiff < 0) {
            this.el.object3D.position.y -= Math.abs(ydiff / this.speed)
        } else if (ydiff > 0) {
            this.el.object3D.position.y += Math.abs(ydiff / this.speed)
        }

        if (this.el.object3D.position.y > this.maxy) {
            this.el.object3D.position.y = this.maxy
        }
        if (this.el.object3D.position.y < this.miny) {
            this.el.object3D.position.y = this.miny
        }
    }
})

export default parallax