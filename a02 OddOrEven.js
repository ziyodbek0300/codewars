function oddOrEven(array) {
    //enter code here
    if (array.length === 0) {
        return "even";
    } else {
        let sum = array.reduce((a, b) => a + b) % 2;
        return sum === 0 ? "even" : "odd";
    }
}

console.log(oddOrEven([1]))
// console.log(oddOrEven([]))
// console.log(oddOrEven([0]))
// console.log(oddOrEven([1, 2]))

///////////////// others

function oddOrEven(arr) {
    return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}

function oddOrEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    if (result % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

const oddOrEven = a => a.reduce((s, n) => s + n, 0) % 2 == 0 ? "even" : "odd";

const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';
Ï