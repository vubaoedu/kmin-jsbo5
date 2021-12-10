// Quy tắc con lạc đà (camelCase)
function giamGia(sanPham, soTien) {
  sanPham.gia = sanPham.gia - soTien;
}

let giamGia2 = function (sanPham, soTien) {
  sanPham.gia = sanPham.gia - soTien;
};

let x = {
  // Thuộc tính = Property
  ten: "Sách lập trình",
  gia: 20000,
  banQuyen: true,

  // Phương thức = Method
  giamGia: function (soTien) {
    x.gia = x.gia - soTien;
  },
};

x.giamGia(2000);
console.log(x.ten);

// let a = {
//   ten: "Cái áo",
//   gia: 100000,
//   nhaSanXuat: "AoDep",
// };

// let t = 5000;
// let u = 2000;
// giamGia(x, t);
// giamGia(a, u);

// giamGia2(a, 3000);
// console.log(typeof giamGia2);
// console.log(x);
// console.log(a);
