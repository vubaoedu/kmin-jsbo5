function sleep(milliseconds) {
  var start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) {}
}

let a, b, c, d, e;
Math.random();
a = 1;
b = 2;
c = 3;
d = 4;
e = 5;
console.log(a, b, c, d, e);
sleep(2000);
console.clear();
console.log("Nhập đi ku: ");
