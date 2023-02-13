function isValidWalk(walk) {
    //insert brilliant code here
    if (walk.length !== 10) return false
    let x = 0,
        y = 0;

    walk.forEach((val, index) => {
        switch (val) {
            case 'n':
                y++;
                break;
            case 's':
                y--;
                break;
            case 'w':
                x++;
                break;
            case 'e':
                x--;
                break;
        }
    })
    console.log(x, y)
    if (x === 0 && y === 0) {
        return true
    } else {
        return false
    }
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); //true

///others
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length

    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }

    return dt === 10 && dx === 0 && dy === 0
}


function isValidWalk(walk) {
    function count(val) {
        return walk.filter(function (a) { return a == val; }).length;
    }
    return walk.length == 10 && count('n') == count('s') && count('w') == count('e');
}

function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;

    return walk.length === 10 && north === south && east === west;
}

function isValidWalk(walk) {
    var res = {n:0, w:0, s:0, e:0};
    walk.forEach((c) => res[c]++);
    return walk.length === 10 && res.n == res.s && res.e == res.w;
  }
