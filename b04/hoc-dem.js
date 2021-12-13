// Nhập vào một số nguyên trong đoạn [1, 5]. Hãy in ra cách đọc của số nguyên này.
// Dùng if-else

// 1 => Mot
// 2 => Hai
// 3 => Ba
// 4 => Bon
// 5 => Nam

// Cách 2
if (x == 1) {
  console.log("Mot");
}

if (x == 2) {
  console.log("Hai");
}

if (x == 3) {
  console.log("Ba");
}

if (x == 4) {
  console.log("Bon");
}

if (x == 5) {
  console.log("Nam");
}

// Cách 1
if (x == 1) {
  console.log("Một");
} else {
  if (x == 2) {
    console.log("Hai");
  } else {
    if (x == 3) {
      console.log("Ba");
    } else {
      if (x == 4) {
        console.log("Bốn");
      } else {
        console.log("Năm");
      }
    }
  }
}


// Cách 3
switch (GT/Biến/Biểu thức) {
    case GT1:
        A
        break;
    case GT2:
        B
        break;
    ...
    default: 
        Z
}


switch (x) {
    case 1:
        console.log("Mot");
        break;
    case 2:
        console.log("Hai");
        break;
    case 3:
        console.log("Ba");
        break;
    case 4:
        console.log("Bon");
        break;
    case 5:
        console.log("Nam");
        break;
    default:
        console.log("Du lieu khong hop le");
}