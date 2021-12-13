// Nếu ĐK đúng thì sẽ làm việc A, ngược lại sẽ làm việc B => Dạng rẽ nhánh => If đủ

if (ĐK) {
  A1;
  A2;
} else {
  B1;
  B2;
}

if (ĐK) A;
else B;

// Nếu ĐK đúng thì sẽ làm việc A => If thiếu
if (ĐK) {
  A1;
  A2;
}

if (ĐK) A;

// Nếu ĐK1 đúng thì sẽ làm A, ngược lại nếu ĐK 2 đúng thì sẽ làm B, ngược lại sẽ làm C.
// => If lồng
if (ĐK1) {
  A1;
  A2;
} else {
  if (ĐK2) {
    B1;
    B2;
  } else {
    C1;
    C2;
  }
}

if (ĐK1) A;
else if (ĐK2) B;
else C;

if (ĐK1) A;
else if (ĐK2) B;
else C;

if (ĐK1) {
  A1;
  A2;
} else if (ĐK2) {
  B1;
  B2;
} else {
  C1;
  C2;
}

// Nếu ĐK1 đúng thì
// + làm A
// + nếu điều 2 đúng thì làm B, ngược lại thì làm C
// Ngược lại: thì làm D

if (ĐK1) {
  A;
  if (ĐK2) {
    B;
  } else {
    C;
  }
} else {
  D;
}
// Nếu x > 0 thì x là số dương, ngược lại x là số không dưong

if (x > 0) {
  console.log("Duong");
} else {
  console.log("Khong duong");
}

if (x > 0) console.log("Duong");
else console.log("Khong duong");

// Nếu x > 0  thì x là số dương, nếu x < 0 thì x là số âm, nếu x = 0 thì x là số 0

// Nếu x > 0 thì x là số dương, ngược lại, nếu x < 0 thì x là số âm, ngược lại thì x là số 0
if (x > 0) {
  console.log("Duong");
} else {
  if (x < 0) {
    console.log("Am");
  } else {
    console.log("So 0");
  }
}

// Bài tập:
// Nếu ĐK1 đúng thì
// + làm A
// + nếu điều 2 đúng thì làm B, ngược lại thì làm C
// Ngược lại:
// + thì làm D
// + Nếu ĐK 3 đúng thì làm E, ngược lại:
//    - Nếu điều kiện 4 đúng thì làm F

if (DK1) {
  A;
  if (Dk2) {
    B;
  } else {
    C;
  }
} else {
  D;
  if (DK3) {
    E;
  } else {
    if (DK4) {
      F;
    }
  }
}
