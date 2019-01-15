import aframe from 'aframe'
import 'aframe-animation-component'
import 'aframe-animation-timeline-component'

const MAX_LEVEL = 2
let isMoving = false

const navigation = aframe.registerSystem('navigation', {
  init: function () {
    this.level = 0 
  },
  move: function (direction) {
    if(this.level + direction >= 0 && this.level + direction <= MAX_LEVEL) {
      if(!isMoving){   
        animate(this.level, direction)
        this.level += direction
      }
    }
  },
  _toggleMove: function(val){
    this.isMoving = val
  }
});  

const clean = {
  x: 0,
  y: 0,
  z: 0,
  duration: 1000,
  easing: 'easeInQuad'
  // easing: 'easeInOutQuart',
  // easing: 'easeOutQuart',
}

var paths = (el) => {return {
    "0-1": {
      steps:[
        {
          ...clean,
          targets: el.object3D.rotation,
          x: aframe.THREE.Math.degToRad(-90),
          duration: 500
        },
        {
          ...clean,
          targets: el.object3D.position,
          y: -6,
          duration: 500
        },
        {
          ...clean,
          targets: el.object3D.rotation,
          x: aframe.THREE.Math.degToRad(0),
          duration: 700,
          offset: '-=700'
        },
        {
          ...clean,
          targets: el.object3D.position,
          y: -20,
          z: -20,
          duration: 700,
          offset: '-=700'
        },
        {
          ...clean,
          targets: el.object3D.position,
          y: -20,
          z: -35,
          duration: 700,
          easing: 'easeOutExpo'
        }
      ]
    },
    "1-0": {
      steps:[
        {
          ...clean,
          targets: el.object3D.position,
          y: -20,
          z: -20,
          duration: 500 
        },
        {
          ...clean,
          targets: el.object3D.rotation,
          x: aframe.THREE.Math.degToRad(-90),
          duration: 500
        },
        {
          ...clean,
          targets: el.object3D.position,
          // z: -5,
          y: -6,
          duration: 700,
          offset: '-=500'
        },
        {
          ...clean,
          targets: el.object3D.rotation,
          x: aframe.THREE.Math.degToRad(0),
          duration: 500,
          easing:'linear'
        },
        {
          ...clean,
          targets: el.object3D.position,
          duration: 400,
          easing: 'easeOutExpo'
        },
      ]
    },
    "1-2": {
      steps:[
        {
          ...clean,
          targets: el.object3D.position,
          x: -0.65,
          y: -25,
          z: -35,
          duration: 800,
          easung: 'easeInOutSine'
        },
        {
          ...clean,
          targets: el.object3D.position,
          x: -0.65,
          y: -25,
          z: -70,
          duration: 500,
          easing:'easeInOutSine'
        }
      ]
    },
    "2-1": {
      steps:[
        {
          ...clean,
          targets: el.object3D.position,
          x: -0.65,
          y: -25,
          z: -35,
          duration: 500,
          easung: 'easeInOutSine'
        },
        {
          ...clean,
          targets: el.object3D.position,
          y: -20,
          z: -35,
          duration: 800,
          easung: 'easeInOutSine'
        }
      ]
    }
  }
}

const animate = (level, d) => {
  const player = document.querySelector('#player')

  const key = level + "-" + (level+d)

  let p = paths(player)
 
  if(key in p){
    const tl = aframe.anime.timeline({
      direction: 'normal',
      autoplay: false
    })
    const steps = p[key].steps 
  
    steps.forEach((step, i) => {
      const s = { ...step }

      if( i == 0)
        s.begin = () => isMoving = true
      if( i == steps.length-1)
        s.complete = () => isMoving = false

      if('offset' in step){
        tl.add(s, step.offset)
      }else{
        tl.add(s)
      }
      
    })

    tl.play()
  }
}

export default navigation