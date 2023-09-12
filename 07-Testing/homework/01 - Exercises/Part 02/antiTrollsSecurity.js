const antiTrollsSecurity = (string) => {

    const regExConsonantes = /[^aeiouAEIOU]/g;
    const arrayConsonantes = string.match(regExConsonantes);

    if (arrayConsonantes) {
        return arrayConsonantes.join('');
    } else {
        return '';
    }
};

module.exports = antiTrollsSecurity;
