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
const path = (el) => [
  [{
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
    y: -10,
  }]
]
 

const animate = (level, d) => {
  const player = document.querySelector('#player')

  const tl = aframe.anime.timeline()
  const steps = path(player)[0]

  steps.forEach((step, i) => {
    const s = { ...step }
    
    if( i == 0)
      s.begin = () => isMoving = true
    else if( i == steps.length-1)
      s.complete = () => isMoving = false

    tl.add(s)
  })
}

export default navigation