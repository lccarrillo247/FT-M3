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

    const numString = num.toString();

    let suma = 0;

    for (let i = 0; i < numString.length; i++) {
        suma += Number(numString[i]);
    }

    let reverso = suma.toString().split('').reverse().join('');

    if (suma * reverso === num) {
        return true;
    } else {
        return false;
    }


    // if (num === 1729 || num === 1 || num === 81 || num === 1458) {
    //     return true
    // } else {
    //     return false
    // }
    // min 34
};

module.exports = { levelOne, levelTwo, levelThree, levelFour };
