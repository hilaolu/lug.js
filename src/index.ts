import { tsc2svg } from "./tsc2svg";
import packageInfo from "../package.json"

async function tsc_render_all() {
    let tscs = Array.from(document.getElementsByClassName('tsc'))

    await Promise.all(tscs.map(async (tsc) => {
        let src = tsc.getAttribute('src')

        if (src) {
            let response = await fetch(src)
            if (response.ok) {
                let svg = await response.text()
                tsc.innerHTML = await tsc2svg(svg)
            }
        }
    }))

}

export default { tsc_render_all, tsc2svg }

console.log(
    '\n'.concat(' %c lug.js v', packageInfo.version, ' '), 'color: #ffffff; background: #34a6f7; padding:5px 0;'
);