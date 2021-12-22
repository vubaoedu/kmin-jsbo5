/**
 * Hàm kiểm tra số chính phương
 * @param {number} number Số cần kiểm tra
 * @returns true nếu number là số chính phương, false nếu ngược lại
 */


function bai01() {

    let laSCP = function (number) {
        let flag = false;
        for (let i = 0; i <= number; i++) {
            if (i * i == number) {
                flag = true;
            }
        }
        return flag;
    }

    let x = 3;
    if (laSCP(x) == true) {
        console.log(x, "là số chính phương");
    }
    else {
        console.log(x, "không phải là số chính phương");
    }
}

bai01();