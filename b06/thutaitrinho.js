// npm install readline-sync
const readLine = require("readline-sync");

function game() {
    var maxLuot = 5;
    var luotHienTai = 0;
    var tiepTuc = true;
    for (; luotHienTai < maxLuot; luotHienTai++) {
        var danhsach = taoDanhSachSoNgauNhien(luotHienTai + 1);
        console.log(danhsach);
        sleep(5);
        var soThuNhat = readLine.question("Nhap soThuNhat: ");
        var soThuHai = readLine.question("Nhap soThuNhat: ");
        var soThuBa = readLine.question("Nhap soThuNhat: ");
        var soThuTu = readLine.question("Nhap soThuNhat: ");
        var soThuName = readLine.question("Nhap soThuNhat: ");   
        // Kiem tra dap an     
    }
    // Kiem tra luotChoi == maxLuot va tiepTuc = true
};

function taoDanhSachSoNgauNhien(soChuSo) {
    var min = Math.pow(10, soChuSo-1);
    var max = Math.pow(10, soChuSo) -1 ;
    var danhsach = [];
    for (var i = 0; i < 5; i++) {
        var soRandom = Math.floor(Math.random() * (max - min +1));
        danhsach.push(soRandom);
    }
    return danhsach;
}

function sleep(n) {
    var hienTai = new Date();
    while(new Date().getTime() - hienTai.getTime() < n * 1000){}
}

var txt = readLine.question("Nhap so: ");
console.log("so: " + txt);