const appendToDOM = function(data) {
    const { name, path } = data
    const id = `${name}-obj`

    console.debug('[OBJ-LOADER] loading: ', id)

    const getSingletonElem = function(tag, id) {
        let elem = document.querySelector(`${tag}#${id}`)

        if (!elem) {
            elem = document.createElement(tag)
            elem.id = id
        }

        return elem
    }

    document.addEventListener("DOMContentLoaded", function() {
        const scene = document.getElementsByTagName('a-scene')[0]
        const assets = getSingletonElem('a-assets', 'models')
        const item = getSingletonElem('a-asset-item', id)
        item.setAttribute('src', path)

        assets.appendChild(item)
        scene.appendChild(assets)
    })

    return '#' + id
}

module.exports = function loader(content, map, meta) {
    // TODO import mlt if needed

    // this.resourcePath = "/path/to/mind-palace/assets/models/cube/model.obj"
    // this.rootContext = "/path/to/mind-palace"
    const path = this.resourcePath.replace(`${this.rootContext}/`, '')
    const pathSplit = this.resourcePath.split('/')
    const name = pathSplit[pathSplit.length - 2]

    const data = { name, path }

    return `export default (${appendToDOM})(${JSON.stringify(data)})`
}