function nhapMang() {
    let a = [];
    let n = Number(prompt("Nhap SLPT"));
    for (let i = 0; i < n; i++) {
        a[i] = Number(prompt("Nhap PT thứ " + i));
    }
    return a;
}

function demSoAm(arr) {
    let dem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            dem++;
    }
    return dem;
}


let x = nhapMang();
let d = demSoAm(x);
console.log(d);