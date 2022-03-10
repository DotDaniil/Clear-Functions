const arr = [1,2,5,7,4,6,9,8,11,10];

function compare(a, b) {
    return a < b ? -1 : 1
}

function compare_2(a, b) {
    return a - b
}

function compare_3(a, b) {
    return b - a
}


arr.sort(compare_3)

console.log(arr)
