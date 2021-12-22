function timMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function bai08() {
    let a = [4, 5, 2, 16, 8];
    console.log(timMax(a));
}

bai08();