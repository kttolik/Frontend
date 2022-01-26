import {mappings} from "./morseTabl";

export default function encodeMorse(string:string):string {
    let result = '';
    if('SOS' === string) {
        mappings.forEach(el => {
            if (el.translation === "SOS") {
                result = el.symbol;
            }
        });
        return  result;
    }

    const encodeArr = string.toUpperCase().split('');

    encodeArr.forEach(x => {
        mappings.forEach(el => {
            if (el.translation === x) {
                result += el.symbol + " ";
            }
        })
    })

    return result.trim();
}
