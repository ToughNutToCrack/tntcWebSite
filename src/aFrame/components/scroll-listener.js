import aframe from 'aframe'

let throttling = false
const mouseWheelHandler = (e, self) => {
    let direction = 0
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        direction = Math.sign(e.detail)
    } else {
        direction = -Math.sign(e.wheelDelta)
    }
    if (!throttling) {
        throttling = true
        self.el.emit('on-scroll', { direction }, false)
        setTimeout(() => {
            throttling = false
        }, 2000)
    }
}

const scrollListener = aframe.registerComponent('scroll-listener', {
    init: function() {
        const myEl = this.el
        
        if (myEl.addEventListener) {
            myEl.addEventListener('scroll', (e) => mouseWheelHandler(e, this), false)
            myEl.addEventListener('mousewheel', (e) => mouseWheelHandler(e, this), false) // IE9, Chrome, Safari, Opera
            myEl.addEventListener('DOMMouseScroll', (e) => mouseWheelHandler(e, this), false) // Firefox 
        } else myEl.attachEvent('onmousewheel', (e) => mouseWheelHandler(e, this)) // IE 6/7/8
    }
})

export default scrollListener