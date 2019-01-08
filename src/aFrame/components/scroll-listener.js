import aframe from 'aframe'

const mouseWheelHandler = function(e){
    const delta = Math.sign(e.wheelDelta);
    console.log('scroll', delta)

    //update camera state
}

const scrollListener = aframe.registerComponent('scroll-listener', {
    init: function() {
        //let myEl = this.el
        const myEl = window

        if (myEl.addEventListener) {
            myEl.addEventListener('mousewheel', mouseWheelHandler, false) // IE9, Chrome, Safari, Opera
            myEl.addEventListener('DOMMouseScroll', mouseWheelHandler, false) // Firefox 
        } else myEl.attachEvent('onmousewheel', mouseWheelHandler) // IE 6/7/8

    }
})

export default scrollListener