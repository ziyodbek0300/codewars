function add(num1, num2) {
    let a = ("" + num1).split('');
    let b = ("" + num2).split('');
    let res = [];
    if (a.length > b.length) 
        a.map((n, i) => res.push(+a[a.length - (i + 1)] + ((+b[b.length - (i + 1)]) || 0)));
    else
        b.map((n, i) => res.push(((+a[a.length - (i + 1)]) || 0) + +b[b.length - (i + 1)]));

    return +res.reverse().join('');
}

// console.log(add(1222, 30277)); //31499
console.log(add(1236, 30977)); //31111013
// console.log(add(38810, 1383)); //391193


//////////// other solutions


// function add(a,b) {
//     let s = ""
    
//     while(a+b) {
//         s = a%10 + b%10 + s
//         a = a/10|0
//         b = b/10|0
//     }
    
//     return +s
// }

// function add(num1, num2) {
//     num1 = num1.toString().split("").reverse().join("");
//     num2 = num2.toString().split("").reverse().join("");

//     if (num1.length < num2.length) {
//         [num1, num2] = [num2, num1];
//     }

//     var returnString = "";
//     for (var i = 0; i < num1.length; i++) {
//         var int1 = parseInt(num1[i]);
//         var int2 = parseInt(num2[i] || 0);
      
//         returnString = (int1+ int2).toString()+returnString;
//     }
    
//     return parseInt(returnString);
// }