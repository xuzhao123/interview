const intMap = {
};

for (let i = 0; i < 10; i++) {
    intMap[i + ''] = i;
}
function parseInt(str, radix = 10) {
    str += '';
    if (radix === 0) {
        radix = 10;
    }
    let result = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        const s = str.charAt(i);
        result += intMap[s] * Math.pow(10, (len - i - 1));
    }
    return result;
}

console.log(parseInt('123'))
console.log(parseInt(123))
console.log(parseInt(1e20))
console.log(parseInt('1e20'))
console.log(parseInt('1e21'))