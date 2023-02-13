function validParentheses(parens) {
    let opens = 0;
    for (let c of parens) {
        if (c == "(") {
            opens += 1;
        } else {
            opens -= 1;
            if (opens < 0) {
                return false;
            }
        }
    }
    return opens == 0;
}


// others

function validParentheses(parens) {
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }

    return n == 0;
}

function validParentheses(string) {
    var tokenizer = /[()]/g, // ignores characters in between; parentheses are
        count = 0,           // pretty useless if they're not grouping *something*
        token;
    while (token = tokenizer.exec(string), token !== null) {
        if (token == "(") {
            count++;
        } else if (token == ")") {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    return count == 0;
}

function validParentheses(parens) {
    var re = /\(\)/;
    while (re.test(parens)) parens = parens.replace(re, "");
    return !parens;
}