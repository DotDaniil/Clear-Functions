const arr = [1,2,3,4,5,6];

function isEven(number) {
    return number % 2 === 0;
}

const filteredArr = arr.filter(isEven)
console.log(filteredArr)

function myFilter(array, callbackFn) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

console.log(myFilter(arr, isEven))