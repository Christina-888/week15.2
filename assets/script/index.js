const numbers = [];

//Заполняем массив:
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
  };
  
//Убираем отрицательные числа:
const plusNumbers = [];
for (number of numbers) {
  if (number >= 0) {
    plusNumbers.push(number);
  }
};

//Возводим каждое число в квадрат:
const squaredNumbers = [];
for (let i = 0; i < plusNumbers.length; i++) {
  squaredNumbers.push(i * i);
};

//Сортируем числа в порядке убывания:
squaredNumbers.reverse();

//Выводим в консоль:
console.log(squaredNumbers);

