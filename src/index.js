const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    let morseCode = [];

    // перевод из нулей и единиц в морзянку
    for (let i = 0; i < expr.length; i += 10) {
        let slice = expr.slice(i, i + 10);
        if(slice === '**********') morseCode.push(' ');
        else {
            slice = parseInt(slice)
            .toString()
            .replaceAll('10', '.')
            .replaceAll('11', '-');
            morseCode.push(slice);
        }
    }

    // перевод морзянки в текст
    morseCode.forEach((item) => {
        item === ' ' ? result.push(' ') : result.push(MORSE_TABLE[item]);
    });

    return result.join('');
}

module.exports = {
    decode
}