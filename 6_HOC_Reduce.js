const users = [ 
    { name: 'Petr', age: 4 }, 
    { name: 'Igor', age: 19 }, 
    { name: 'Vovan', age: 4 }, 
    { name: 'Matvey', age: 16 }, 
];

const resultAge = users.reduce((acc, currentValue) => {
    return acc + currentValue.age
}, 0)

console.log(resultAge)

function myReduce (array, callbackFn, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < array.length; i++) {
        acc = callbackFn(acc, array[i]);
    }
    return acc;
}

console.log(myReduce( users, (acc, currentValue) => acc + currentValue.age, 0))
console.log(myReduce( [4,19,4,16], (acc, currentValue) => acc + currentValue, 0))