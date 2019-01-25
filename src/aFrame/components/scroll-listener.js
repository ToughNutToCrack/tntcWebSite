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

const previous = window.scrollY
const touchhandler = (self, d) => {
    const direction = d

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
        
        let ts;
        window.addEventListener('touchstart', (e) => {
           ts = e.touches[0].clientY;
        })
        
        window.addEventListener('touchend', (e) => {
           const te = e.changedTouches[0].clientY;
           if (ts > te + 5) {
                touchhandler(this, -1);
           } else if (ts < te - 5) {
                touchhandler(this, 1);
           }
        })
        
        if (myEl.addEventListener) {
            // window.addEventListener('touchmove', () => touchhandler(this), false) // for mobile
            // window.addEventListener('scroll', () => touchhandler(this), false)

            myEl.addEventListener('mousewheel', (e) => mouseWheelHandler(e, this), false) // IE9, Chrome, Safari, Opera
            myEl.addEventListener('DOMMouseScroll', (e) => mouseWheelHandler(e, this), false) // Firefox 
        } else myEl.attachEvent('onmousewheel', (e) => mouseWheelHandler(e, this)) // IE 6/7/8
    }
})

export default scrollListener