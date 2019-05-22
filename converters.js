// text2Binary 
function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(10);
    }).join(' ');
}

// binary2Text 
function binary2Text(string) {
    return string.split(' ').map(function (binary) {
        return String.fromCharCode(parseInt(binary, 2));
    }).join('');
}
