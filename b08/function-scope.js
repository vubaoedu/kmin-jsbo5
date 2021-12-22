const log = console.log;
let academy = "Kmin"; // Global scope
// let academy = "Dev"; // Error: Không thể khai báo 2 biến trùng tên trong cùng 1 scope

function sayHi() {
    log(academy); // Kmin: Truy cập trong scope con
    let academy = "Dev"; // OK: Khai báo biến trùng tên ở scope con
    log(academy); // Dev: Chọn biến ở scope gần nhất

    let x = 1; // Local scope

    if (x > 0) {
        let y = 2; // Local scope
        log(y); // 2: Truy cập trong scope của nó
        log(x); // 1: Truy cập trong scope con
    }

    log(x); // 1: Truy cập trong scope của nó
    // log(y); // Error: Truy cập ngoài scope của nó
}

log(academy); // Kmin: Truy cập trong scope của nó
// log(x); // Error: Truy cập ngoài scope của nó

sayHi();

/**
 * ĐÚC KẾT:
 * Scope gắn liền với cặp dấu ngoặc nhọn -> Xác định lifetime của biến
 * Scope gồm 2 loại: global và local
 * Khai báo ở scope nào thì được dùng ở scope đó và scope con của nó
 * Không thể khai báo 2 biến trùng tên trong cùng 1 scope
 * Được phép khai báo biến trùng tên ở scope con
 * Khi truy cập, sẽ chọn biến đc khai báo ở scope gần nhất
 */