let counter_1 = 1;

function increaseCounter(value) {
  counter_1 = value + 1;
}

increaseCounter(counter_1);
console.log(counter_1); // 2

// Глобальная переменная меняется, подобное в функциональном программировании не приветствуется.

let counter_2 = 1;

function increaseCounter(value) {
  return value + 1;
}

increaseCounter(counter_2); // 2
console.log(counter_2); // 1

// Функция возвращает переданное ей значение, увеличенное на 1, при этом ничего не изменяя. == > Clear function.