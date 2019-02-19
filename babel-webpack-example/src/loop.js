let message = require("./message")

let loop = function(){
    for(let i = 0; i < 10; i++){
        console.log(message);
    }
}

module.exports = loop;
