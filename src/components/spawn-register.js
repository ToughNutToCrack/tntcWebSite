import { AFRAME } from '../aframe';
import { initElement } from '../utils'

import cubeObj from '../../assets/models/cube/model.obj'
import shelfObj from '../../assets/models/shelf/model.obj'
import gramObj from '../../assets/models/gram/model.obj'
import tableObj from '../../assets/models/table/model.obj'

const spawnRegister = AFRAME.registerComponent('spawn-register', {
    schema: { type: 'array' },
    init: function() {
        let spawnPoints = this.data
        let parent = this.el.parentNode
        let spawnsWrapper = initElement('a-entity', {
            pos: this.el.object3D.position,
            id: this.el.id + '-spawns'
        })

        for (let i = 0; i < spawnPoints.length; i++) {
            const spawn = spawnPoints[i];

            var modelsFlat = [
                tableObj,
                gramObj,
                cubeObj,
                shelfObj
            ]

            let spawnPoint = initElement('a-entity', {
                pos: spawn,
                'cursor-listener': modelsFlat,
                'obj-model': 'obj:' + cubeObj,
                'material': 'color: #003344; opacity:0.3; transparent: true',
                'scale': '.1 .1 .1'
            })

            spawnsWrapper.appendChild(spawnPoint)
        }
        parent.appendChild(spawnsWrapper)
    }
})

export default spawnRegister