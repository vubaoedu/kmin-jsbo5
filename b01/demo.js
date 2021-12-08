function bai01() {
  console.log("Hello world");
}

function bai02() {
  let toan = Number(prompt("Nhập điểm toán:"));
  let ly = Number(prompt("Nhập điểm lý:"));
  let hoa = Number(prompt("Nhập điểm hóa:"));

  let dtb = (toan + ly + hoa) / 3;
  console.log("Điểm trung bình:", dtb);
}

bai02();
