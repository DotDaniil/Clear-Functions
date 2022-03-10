const PI_1 = 3.14;

function calculateArea(radius) {
  return radius * radius * PI_1;
}

calculateArea(10); // возвращает 314

/// Почему эту функцию нельзя назвать чистой? Она использует глобальную константу, которая не передаётся ей в качестве аргумента.

const PI_2 = 3.14;

function calculateArea(radius, pi) {
  return radius * radius * pi;
}

calculateArea(10, PI_2); // возвращает 314

/// ===> Clear function.

/// -------------------------------------------

function charactersCounter(text) {
  return `Character count: ${text.length}`;
}

function analyzeFile(filename) {
  let fileContent = open(filename);
  return charactersCounter(fileContent);
}

// Если наша функция выполняет чтение файлов, то чистой она не будет. Дело в том, что содержимое файлов может меняться.

function yearEndEvaluation() {
  if (Math.random() > 0.5) {
    return "You get a raise!";
  } else {
    return "Better luck next year!";
  }
}

// Любая функция, которая полагается на генератор случайных чисел, не может быть чистой.