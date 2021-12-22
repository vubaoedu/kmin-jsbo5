/**
 * Hàm kiểm tra số chính phương
 * @param {number} number Số cần kiểm tra
 * @returns true nếu number là số chính phương, false nếu ngược lại
 */
function laSCP(number) {
    let flag = false;
    for (let i = 0; i <= number; i++) {
        //console.log("i:", i);
        if (i * i == number) {
            flag = true;
            break;
        }
    }
    return flag;
}

function bai01() {
    let x = 4;
    if (laSCP(x) == true) {
        console.log(x, "là số chính phương");
    }
    else {
        console.log(x, "không phải là số chính phương");
    }
}

/**
 * Hàm liệt kê các số chính phương trong mảng
 * @param {array} arr Mảng đầu vào
 */
function lietKeSCP(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (laSCP(arr[i])) {
            console.log(arr[i]);
        }
    }
}
function bai03() {
    let a = [2, 4, 6, 8, 9, 16];
    lietKeSCP(a);
}
bai03();