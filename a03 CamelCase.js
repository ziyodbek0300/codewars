String.prototype.camelCase = function () {
    if (this.indexOf(' ') === -1) {
        return this.slice(0, 1).toUpperCase() + this.slice(1, this.length);
    }
    let array = this.split(' ');
    return array.reduce((a, b) => {
        return (a.slice(0, 1).toUpperCase() + a.slice(1, a.length)) + ((b.slice(0, 1).toUpperCase()) + b.slice(1, b.length))
    });
}

console.log("yuustkxud".camelCase())
// console.log("camel Case".camelCase())
// console.log("hello w".camelCase())
// console.log("hel l0".camelCase())

////// others

String.prototype.camelCase = function () {
    return this.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

String.prototype.camelCase = function () {
    return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}

String.prototype.camelCase = function () {
    const capitalize = (word) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1)
    }

    return this
        .split(' ')
        .map(capitalize)
        .join('')
}

String.prototype.camelCase = function () {
    return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
}