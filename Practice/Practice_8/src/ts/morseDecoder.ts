import {mappings} from "./morseTabl";


export default function decodeMorse(string:string):string {
    const decodeArr = string.split('   ');
    let result = '';
    decodeArr.forEach(item => {
        let el = item.split(' ');
        el.forEach(x => {
            mappings.forEach(elem => {
                if (elem.symbol === x) {
                    result += elem.translation;
                }
            })
        })
        result += " ";
    })

    return result.trim();
}

