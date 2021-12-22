function square(number) {
    return number * number;
}

function say(name) {
    console.log("Hello", name);
}

function sayCouple(nameA, nameB) {
    console.log("Hello", nameA + nameB);
}

let a = 3;
let x = square(a);
//square(a);
console.log(x);
console.log(square(a));
console.log(square(a) + 2*square(a));

say("Bao");
let y = say("Bao");
console.log(y);

sayCouple("Bao", "Ngoc");
sayCouple("Ngoc", "Bao");
sayCouple(2, 4);

say();
say("Bao", "Ngoc");

