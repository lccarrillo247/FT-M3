const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print, args) {
    // print(__dirname);
    print(process.cwd())
};

function date(print, args) {
    print(Date())
};

function echo(print, args) {
    print(args)
};

function ls(print, args) {

}

function cat(print, args) {}

function head(print, args) {}

function tail(print, args) {}

function curl(print, args) {}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};