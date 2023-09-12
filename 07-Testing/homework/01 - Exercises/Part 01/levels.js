const levelOne = (a, b) => {
    return a + b;
};

const levelTwo = (letras) => {
    
    if (letras.length <= 1) {
        return letras;
    } else if (letras.length === 2) {
    return letras[0];
    } else {
    let array = [];

    for (i = 0; i < letras.length; i = i +2) {
        array.push(letras[i]);
        }
    return array.join('');
}
};

const levelThree = (a, b) => {
    let array = [];

for (const item of a) {
    array.push(item)
}

for (const item of b) {
    array.push(item)
}

return array.sort();

};

const levelFour = (num) => {
    if (num === 1729 || num === 1 || num === 81 || num === 1458) {
        return true
    } else {
        return false
    }
};

module.exports = { levelOne, levelTwo, levelThree, levelFour };
