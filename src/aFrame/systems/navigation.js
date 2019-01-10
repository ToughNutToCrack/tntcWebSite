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

const animate = (level, direction) => {
  const player = document.querySelector('#player')
 
  const tl = aframe.anime.timeline();

  tl.add({
      targets: player.object3D.position,
      x: 0,
      y: 3,
      z: 0,
      duration: 500,
      easing: 'easeOutQuart',
      begin: function(anim) {
        console.log('begin')
        isMoving = true
      }
  }) 
  .add({
    targets: player.object3D.rotation,
    x: aframe.THREE.Math.degToRad(-90),
    y: 0,
    z: 0,
    duration: 500,
    easing: 'easeOutQuart'
  })    
  .add({
    targets: player.object3D.position,
    x: 0,
    y: -10,
    z: 0,
    duration: 500,
    easing: 'easeOutQuart',
    complete: function(anim) {
      console.log('complete')
      isMoving = false
    }
  })
  
}

export default navigation