function persistence(num) {
    let result = 0;
    if (num < 10) {
        return result;
    } else {
        let numArray = num.toString().split('');
        while (numArray.length !== 1) {
            let multiplyData = 1;
            numArray.forEach((a) => {
                multiplyData *= a;
            })
            numArray = multiplyData.toString().split('');
            result += 1;
        }
        return result;
    }
}

// console.log(persistence(39)); // 3
// console.log(persistence(4)); // 0
console.log(persistence(25)); // 2
// console.log(persistence(999)); // 4

//////////////// other solutions

const persistence = num => {
    return `${num}`.length > 1
        ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
        : 0;
}

function persistence(num) {
    for (var i = 0; num > 9; i++) {
        num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
}

persistence = (n, c) => n > 9 ? persistence(n.toString().split('').reduce((x, y) => x * y), c ? (c + 1) : 1) : c ? c : 0