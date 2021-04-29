'use strict';

// let a = 5,
//       b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(main) {
    let objCopy = {};

    let key;
    for (key in main) {
        objCopy[key] = main[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
// console.log(newNumbers);

newNumbers.c.x = 5;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign(numbers, add);
clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "Hello";
console.log(newArray);
console.log(oldArray);

const videos = ["youtube", "vimeo", "rutube"],
      blogs = ["wordpress", "livejournal", "blogger"],
      internet = [...videos, ...blogs, "vk", "facebook"];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);