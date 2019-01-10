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
  duration: 500,
  easing: 'easeOutQuart',
}

var paths = (el) => {return {
    "0-1": {
      steps:[
        {
          ...clean,
          targets: el.object3D.position,
          y: 3,
        },
        {
          ...clean,
          targets: el.object3D.rotation,
          x: aframe.THREE.Math.degToRad(-90),
        },
        {
          ...clean,
          targets: el.object3D.position,
          y: -10
        }
      ]
    },
    "1-0": {
      steps:[
        {
          ...clean,
          targets: el.object3D.position,
          y: 3,
        },
        {
          ...clean,
          targets: el.object3D.rotation,
          x: aframe.THREE.Math.degToRad(0),
        },
        {
          ...clean,
          targets: el.object3D.position,
        }
      ]
    },
    "1-2": {
      steps:[
        {
          ...clean,
          targets: el.object3D.position,
          y: -14,
          easing: 'easeInOutBack'
        }
      ]
    },
    "2-1": {
      steps:[
        {
          ...clean,
          targets: el.object3D.position,
          y: -10,
          easing: 'easeInOutBack'
        }
      ]
    }
  }
}

const animate = (level, d) => {
  const player = document.querySelector('#player')

  const key = level + "-" + (level+d)

  console.log(level, d, key, paths(player) )

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

      tl.add(s)
    })
  
    tl.play()
  }
}

export default navigation