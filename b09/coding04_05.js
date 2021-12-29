const readLine = require("readline-sync");
// Bai 1
function bai1 () {
    var n = readLine.question("Nhap so duong n: ");
    while (n <= 0) {
        n = readLine.question("Nhap so duong n: ");
    }
    for (var i = 1; i<= n / 2; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
    console.log(n);
}
// bai1();

function bai1NangCao() {
    var n = readLine.question("Nhap so duong n: ");
    while (n <= 0) {
        n = readLine.question("Nhap so duong n: ");
    }
    var danhsach = [];
    for (var i = 1; i<= Math.sqrt(n); i++) {
        if (n % i == 0) {
            // console.log(i);
            // console.log(n/i);
            danhsach.push(i);
            danhsach.push(n/i);
        }
    }
    danhsach.sort(function(a, b){return a - b;});
    var output = "";
    for (var i = 0; i < danhsach.length - 1; i++) {
        output += danhsach[i] + "---";
    }
    output += danhsach[danhsach.length - 1];
    // console.log(danhsach);
    console.log(output);
}

// bai1NangCao();

// 123
// danhsach = [1, 2, 3];
// var mang = [130, 24] ;
// for (var i = 0; i < mang.length; i++) {
//     var soHienTai = mang[i];
//     console.log("So hien tai", soHienTai);

//     // Kiem tra so hien tai co al so vb hay khong
//     var danhSachSoDonVi = [];
//     var chuoi = soHienTai + ""; // chuoi "20"
//     for (var j = 0; j < chuoi.length; j++) {
//         danhSachSoDonVi.push(Number(chuoi[j])); // j = 1 -> chuoi[j] = "0", 
//         // danhsachDonVi.push("0") => ["2", "0"];
//     }
    
//     var tongCacChuSo = 0;
//     var tichCacChuSo = 1;

//     for (var k = 0; k < danhSachSoDonVi.length; k++) {
//         tongCacChuSo = tongCacChuSo + danhSachSoDonVi[k];
//         tichCacChuSo = tichCacChuSo * danhSachSoDonVi[k];
//     }

//     console.log("Tong cac chu so", tongCacChuSo);
//     console.log("Tich cac chu so", tichCacChuSo);
//     console.log("Danh sach chu so", danhSachSoDonVi);

//     var laSoVb = true;
//     if (soHienTai % tichCacChuSo != 0) {
//         laSoVb = false;
//     }

//     if (soHienTai % tongCacChuSo != 0) {
//         laSoVb = false;
//     }

//     for (var m = 0; m < danhSachSoDonVi.length; m ++) {
//         console.log("sohientai:", soHienTai);
//         console.log("soDonVi", danhSachSoDonVi[m]);
//         if (soHienTai % danhSachSoDonVi[m] != 0) {
//             laSoVb = false;
//             break;
//         }
//     }

//     if (laSoVb) {
//         console.log(soHienTai, "la so vb");
//     }

//     // danhSachSoDonVi = ["1", "2"];
//     // true thi ra
//     // false thi bo qua
// }
// var chuoi =  "abcd";
// chuoi[0] == "a"
// chuoi[1] == "b"

// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     if (i == 2) {
//         break;
//     }
    
// }

function bai15() {
    var mang = [2, 3,  5, 7, 8];
    var tangDan = true;
    for (var i = 0; i < mang.length - 1; i++) {
        console.log("i = ", i);
        console.log("mang[i]=", mang[i]);
        console.log("mang[i+1]=", mang[i+1]);
        if (mang[i+1] < mang[i]) {
            tangDan = false;
            break;
        }
    }
    if (tangDan) {
        console.log("Mang tang dan");
    }
}
// bai15();

// var mang = [1, 2, 3];
// for (var i = 0; i < mang.length; i++) {
//     if (mang[i] == 2) {
//         continue;
//     }
//     console.log(mang[i]);
// }

var mang = [1, 2, 3];
for (var i = 0; i < mang.length; i++) {
    if (mang[i] % 2 == 1) {
        continue;
    }
    console.log(mang[i]);
}