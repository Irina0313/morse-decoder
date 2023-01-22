const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let result = '';
    for (i = 0; i < expr.length; i += 10) {
        let exprNew = expr.slice(i, i + 10).replaceAll(11, '-').replaceAll(10, '.').replaceAll(0, '');
        for (const key in MORSE_TABLE) {
            if (key == exprNew) {
                exprNew = MORSE_TABLE[key];
            }
        }
        result = result + exprNew;
    }
    result = result.replaceAll('**********', ' ');
    return result;
}



module.exports = {
    decode
}


