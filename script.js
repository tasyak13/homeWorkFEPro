"use strict";

const numberInHtml = window.localStorage.getItem("count");
count.innerText = numberInHtml;

function increment() {
    count.innerText = +count.innerText + 1;
    const numberOfCount = count.innerText;
    window.localStorage.setItem("count", numberOfCount);
};

function descrement() {
    count.innerText = +count.innerText - 1;
    const numberOfCount = count.innerText;
    window.localStorage.setItem("count", numberOfCount);
};