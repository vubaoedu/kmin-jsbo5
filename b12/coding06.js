// Bai 9
// index 0  1  2  3  4  5  6  7
var a = [0, 1, 2, 3, 4, 5, 6, 7]
p = 2;
q = 3;
//   index    0  1  2  3  4  5  6  7
var ketqua = [0, 1, 2, 3, 2, 3, 6, 7];

// dau tien copy 0 -> q <=> = 0 -> 3
// copy 2 -> 3 qua mang ket qua <=> 0 -> 5 length = 6
// Copy phan duoi con du neu co


// bai 10

var mangGoc = [1, 2, 3, 4, 1, 2]
// lap qua mang goc de dem
// mang_da_dem = []
for (var i = 0; i < mangGoc.length; i++) {
    var n = mangGoc[i];
    // Kiem tra mang_da_dem co chua n hay khong
    // if co thi bo qua
    // else (chua co) thi dem (tang bien dem) va dong thoi them bien n vao mang_da dem
}


// bai 11
var a = [1, 2, 3, 4, 5]

for (i = 0 -> a.length - 2) {
    for (j = i +1 -> a.length - 1) {

    }
}

// a[i] = 1
// a[j] = 2 -> 5
// a[i] = 2
// a[j] = 3 -> 5
//a[i] =3 
// a[j] = 4 -> 5
// a[i] = 4
// a[j] = 5
// Khong can kiem tra khi a[i] = 5


// Bai 12
var dem = 0;
var a = [1, 2, 3]
var b = [2, 3, 1]

// So sanh chieu dai
for (i = 0 -> a.length - 1) {
    var giong = false;
    for (j = 0 -> b.length-2) {
        // Kiem tra a[i] vs b[j]
        // Neu bang thi giong = true;
        // Ngung vong lap // break
    }
    // Kiem tra bien giong 
    // Neu khac ngung vong lap va ket luan la 2 mang khac nhau
    // Neu giong nhau tang bien dem len
}

// SO sanh bien dem voi chieu dai cua 1 trong 2 mang 
// Neu bang nhau -> 2 mang bang nhau
// Neu khac => 2 mang khac nhau

// bai 14
var a = [1, 2, 3, 4];
var b = [2, 3, 10];

for (i = 0 -> b.length - 1) {
    var tonTai = false;
    for (j = 0 -> a.length - 1) {
        // Kiem tra a[i] va a[j]
        // Neu b[i] = a[j] thi tonTai = true va ngung vong lap
        // Neu b[i] != a[j] thi tiep tuc vong lap
    }
    // Kiem tra tonTai hay khong
    // Neu ma true Kiem tra b[i] tiep theo
    // Neu ma false thi ngung vong lap va ket luan a khong phai mang con cua b
}

// Ket luan b la mang con a


