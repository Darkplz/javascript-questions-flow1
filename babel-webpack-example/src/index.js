import _ from 'lodash';

let loop = require("./loop");

loop()

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());