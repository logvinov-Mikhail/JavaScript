// Конспект 
// Array.isArray

function logArray(arr) {

    if (!Array.isArray(arr)) {
        throw new Error('Аргумент не является массивом!');

    }
    console.log(`Массив размером ${arr.length}: [`);
    for(let item of arr) {
        console.log(`${item} (${typeof item})`)
    }
    console.log(']');
}

try {
    logArray([13, 12, 'a'])
} catch (a) {
console.log(a)
}

// ПРЕОБРАЗОВАНИЕ В МАССИВ СТРОК С ПОМОЩЬЮ 
// Array.from

const str = 'НЕ массив!';
const simbols = Array.from(str);
console.log(simbols);

// МАССИВОПОДОБНЫЙ ОБЪЕКТ
// arguments

function logArgs() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(Array.isArray(arguments));
    //console.log(arguments.join(', '));

    console.log(Array.from(arguments).join(', '));


}

logArgs(1, 2, 3);

// Проверка наличия элемента 

function pushOnce(arr, item){
    if //(arr.indexOf(item) === -1){ 
        // лучше использовать includes
        (!arr.includes(item)){
        arr.push(item)
    }
}
const uniqNumbers = [];
pushOnce(uniqNumbers, 1);
pushOnce(uniqNumbers, 1);
pushOnce(uniqNumbers, 2);
console.log(uniqNumbers);

// ЕСЛИ ИСКОМЫХ ЭЛЕМЕНТОВ НЕСКОЛЬКО indexOf  вернет первый с лева на право! 
// ПОИСК СПРАВА НАЛЕВО lastIndexOf

// ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
// Функция, принимающая в качестве аргументов другие функции или
// возвращающая другую функцию в качестве результата.
// High ordered function или HOF — функция высшего порядка в переводе с английского.

//МЕТОД findIndex

const numbers = [ 127, 41, 454, 296, 489 ];
const numbersWithoutEven = [ 127, 41, 365, 7, 489 ];
//  дополнительно мы можем получить index, arr
        //console.log('---');
        //console.log({number});
        //console.log({index});
        //console.log({arr});
        //console.log({nextEl: arr[index + 1]});
function isEven(number) {
    return number % 2 === 0; 
} 

console.log(numbers.findIndex(isEven));
console.log(numbersWithoutEven.findIndex(isEven));

// МЕТОД find  найдет само значение

const numbers2 = [ 127, 41, 454, 296, 489 ];

function isEven2(number) {
    return number % 2 === 0; 
} 

console.log(numbers2.find(isEven2));

//ЧАСТАЯ ОШИБКА С find

const numbers3 = [ 127, 0, 41, 365, 7, 489 ];
function isEven3(number) {
return number % 2 === 0;
}
if (!numbers3.find(isEven3)) {
    // Метод `find` на самом деле нашел четное число 0, но !0 === true
    console.log('В массиве все числа нечетные');
}
if (numbers3.find(isEven3) === undefined) {
    // Правильная проверка
    console.log('В массиве все числа нечетные');
}

// МЕТОД some хотя бы один

const numbers4 = [ 127, 0, 41, 365, 7, 489 ];
function isEven4(number) {
return number % 2 === 0;
}
console.log(numbers4.some(isEven4)); // true


// МЕТОД every каждый  

function isEven(number) {
    return number % 2 === 0;
}
function isEvenArray(arr) {
    return arr.every(isEven);
}

console.log(isEvenArray([ 24, 42, 176 ])); // true
console.log(isEvenArray([ 24, 41, 176 ])); 

// ПОИСК В МАССИВЕ ОБЪЕКТОВ

const employees = [
    { name: 'Мария', department: 'IT', salary: 75000 },
    { name: 'Иван', department: 'Продажи', salary: 55000 },
    { name: 'Николай', department: 'IT', salary: 92000 },
    { name: 'Мария', department: 'Маркетинг', salary: 35000 }
];

const task1 = console.log(employees.find(employee => employee.name === 'Мария' && employee.department === 'IT'));
const task2 = console.log(employees.some(employee => employee.salary > 95000));
const task3 = employees.every(employee => employee.salary > 50000);

// МЕТОД filter

const maries = employees.filter(employee => employee.name === 'Мария');
console.log(maries); // ВСЕГДА МАССИВ ! даже если ничего не найдено!

// ПРЕОБРАЗОВАНИЕ МАССИВА

const timeIntervals = [1800, 3600, 86400];
const secondsInHour = 3600;

//МЕТОД МАССИВА map

const timeIntervalsInHours = timeIntervals.map(sec => sec / secondsInHour);
console.log(timeIntervalsInHours); // [ 0.5, 1, 24 ]
// размер преобразованного массива всегда равен размеру исходного массива!!!!
// Пример 
const numbers6 = [1, 2, 3, 4, 5];
const squareEven6 = numbers6.map(function (number) {
if (number % 2 === 0) {
return number * number;
}
});
console.log(squareEven6); // [ undefined, 4, undefined, 16, undefined ]
// Правильнее применить еще и filter
const numbers7 = [1, 2, 3, 4, 5];
const squareEven7 = numbers7
    .filter(number => number % 2 === 0)
    .map(number => number * number);

console.log(squareEven7); // [ 4, 16 ]

// МЕТОД reduce 

const prakt = [
    { name: 'Мария', department: 'IT', salary: 7500 },
    { name: 'Иван', department: 'Продажи', salary: 5500 },
    { name: 'Николай', department: 'IT', salary: 9200 },
    { name: 'Мария', department: 'Маркетинг', salary: 3500 }
];
const testeduce = prakt.reduce((acc, emploee, index) => {
    console.log('index', index);
    console.log('acc', acc);
    console.log('---');
    return acc + emploee.salary;
}, 0);
console.log(testeduce);

