/**
 * Đếm số lẻ
 * Input: Mảng arr
 * Output: Số lượng số lẻ có trong mảng arr
 */
function demLe(arr) {
  // arr = c
  let dem = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      dem++;
    }
  }
  //   console.log(dem);
  return dem;
}
function bai12() {
  let b = [8, 7, 5, 6];
  //let d = demLe(b);
  console.log("Số lượng số lẻ: ", demLe(b));
}

function baiX() {
  let c = [4, 5, 6, 7, 8, 2, 3];
  let d = demLe(c);
}

// ===================================
function hamY(arr, num) {
  for (let i = 0; i < arr.length; i += 2) {
    arr[i] += num;
  }
}
function baiY() {
  let e = [7, 5, 9, 8, 4];
  hamY(e, 3);
  console.log(g);
  console.log(e);
}
baiY();

// function bai12() {
//   let a = [4, 7, 8, 6];
//   let dem = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 != 0) {
//       dem++;
//     }
//   }
//   console.log(dem);
// }
