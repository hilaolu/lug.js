import { tsc2svg } from "./tsc2svg";
import packageInfo from "../package.json"
const { diagramToSVG } = require("aasvg/markdeep-diagram");

async function tsc_render_all() {
    let tscs = Array.from(document.getElementsByClassName('tsc'))

    await Promise.all(tscs.map(async (tsc) => {
        let src = tsc.getAttribute('src')
        let cols = parseInt(tsc.getAttribute('cols'))
        let rows = parseInt(tsc.getAttribute('rows'))

        if (src) {
            let response = await fetch(src)
            if (response.ok) {
                let svg = await response.text()
                tsc.innerHTML = await tsc2svg(svg, cols, rows)
            }
        }
    }))

}

async function aa_render_all() {
    let aas = Array.from(document.getElementsByClassName('aa'))

    await Promise.all(aas.map(async (aa) => {
        let src = aa.getAttribute('src')
        if (src) {
            let response = await fetch(src)
            if (response.ok) {
                let svg = await response.text()
                let options = { style: {} }
                aa.innerHTML = await diagramToSVG(svg, options)
                aa.firstElementChild.removeAttribute('width')
                aa.firstElementChild.removeAttribute('height')
            }
        }
    }))

}





export default { tsc_render_all, tsc2svg, aa_render_all }

console.log(
    '\n'.concat(' %c lug.js v', packageInfo.version, ' '), 'color: #ffffff; background: #34a6f7; padding:5px 0;'
);