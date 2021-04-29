'use strict';

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        background: "red"
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(Object.keys(options).length);

const {border, background} = options.colors;
console.log(border);