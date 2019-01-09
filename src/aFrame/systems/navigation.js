import aframe from 'aframe'

import { initSpecialElement } from '../lib/utils'

const MAX_LEVEL = 2

const navigation = aframe.registerSystem('navigation', {
  init: function () {
    this.level = 0 
  },
  move: function (direction) {
    if(this.level + direction >= 0 && this.level + direction <= MAX_LEVEL) {
      this.level += direction
      animate(this.level)
    }
    
  }
});  

const positions = [
  "0 0 0",
  "0 0 3",
  "0 0 6"
]

const animate = (level) => {
  const animatePosition = initSpecialElement('a-animation', {
    attribute: 'position',
    begin: '1',
    to: positions[level],
    duration: '1000'
  })
  console.log('ANIMATING ', level)
  document.getElementById('player').appendChild(animatePosition)
}

export default navigation