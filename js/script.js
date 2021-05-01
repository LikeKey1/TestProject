"use strict";

const box = document.getElementById("box"),
      buttons = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector("button"),
      wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px;"

buttons[1].style.borderRadius = "100%";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
const text = document.createTextNode("Тут был я");

div.classList.add("black");

// wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[1].before(div);
hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();

// hearts[2].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello world</h1>";
// div.textContent = "Hello";

div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>")