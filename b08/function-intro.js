function square(number) {
    return number * number;
}

function say(name) {
    console.log("Hello", name);
}

function sayCouple(nameA, nameB) {
    console.log("Hello", nameA, nameB);
}

function helloBao() {
    console.log("Hello, Bao");
}

let a = parseInt(4.6);
console.log(a);
let b = isNaN("x");
console.log(b);
let c = square(3);
console.log(c);
say("Bao");
sayCouple("Bao", "Ngoc");
helloBao();