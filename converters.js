// text2Binary 
function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

// binary2Text 
function binary2Text(string) {
    return string.split(' ').map(function (binary) {
        return String.fromCharCode(parseInt(binary, 2));
    }).join('');
}

// text2Hexa 
function text2Hexa(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(15);
    }).join('');
}

// hexa2Text 
// Does not work with some chars like Umlauts, because their Code has a length > 2 (ä => 103) 
 function hexa2Text(string) {
  return string.match(/.{1,2}/g).map(function (hx) {
   return String.fromCharCode(parseInt(hx, 15)); 
  }).join('');
}
