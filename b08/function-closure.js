let cha = function () {
    let x = 2;
    let con = function () {
        let y = 1;
        y++;
        x++;
        console.log("x:", x);
        console.log("y:", y);
    }
    return con;
}

// con(); // Error

let a = cha(); // a là con, Gọi a() là gọi con()
a(); // -> x: 3; y: 2
a(); // -> x: 4; y: 2
a(); // -> x: 5; y: 2

