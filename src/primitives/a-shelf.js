import { AFRAME, Vector3 } from '../aframe';

import shelfObj from '../../assets/models/shelf/model.obj'
import shelfMtl from '../../assets/models/shelf/model.mtl'

let spawnPoints = [
    new Vector3(-.3, 1.35, .1),
    new Vector3(0.0, 1.35, .1),
    new Vector3(0.3, 1.35, .1),

    new Vector3(-.3, .75, .1),
    new Vector3(0.0, .75, .1),
    new Vector3(0.3, .75, .1),

    new Vector3(-.3, .15, .1),
    new Vector3(0.0, .15, .1),
    new Vector3(0.3, .15, .1)
]

const aShelf = AFRAME.registerPrimitive('a-shelf', {
    defaultComponents: {
        // TODO nicer import as module
        'obj-model': `obj: ${shelfObj}; mtl: ${shelfMtl}`,
        'spawn-register': spawnPoints
    }
})

export default aShelf