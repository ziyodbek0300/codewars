// complete the function
function solution(string) {
    let str = "";
    if (string === str) return str;
    for (let letter of string) {
        if (letter === letter.toUpperCase()) {
            str += (" " + letter);
        } else {
            str += letter
        }
    }
    return str;
}

console.log(solution("camesCase")); // "camel Case"

///// others
function solution(string) {
    return (string.replace(/([A-Z])/g, ' $1'));
}

function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}

const solution = string => {
    return [...string].map((char) => {
        return (char === char.toUpperCase()) ? ` ${char}` : char;
    }).join('');
}