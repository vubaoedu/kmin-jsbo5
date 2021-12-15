function demo01() {
  let i = 1;
  while (i <= 3) {
    console.log("Hello");
    i++;
  }
}
function demo02() {
  // for (khởi tạo; điều kiện lặp; bước nhảy)
  for (let i = 1; i <= 5; i = i + 2) {
    console.log(i);
  }
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) {}
}
demo02();
