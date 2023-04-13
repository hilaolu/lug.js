import { typescript2svg } from "./typescript2svg";

async function ts_render_all() {
    let tscs = document.getElementsByClassName('tsc')

    for (var tsc of tscs) {
        let response = await fetch(tsc.getAttribute('src'))
        if (response.ok) {
            let svg = await response.text()
            tsc.innerHTML = await typescript2svg(svg)
        }
    }
}

export default { ts_render_all, typescript2svg }

console.log(
    '\n'.concat(' %c lug.js v', LUGJS_VERSION, ' '), 'color: #ffffff; background: #34a6f7; padding:5px 0;'
);