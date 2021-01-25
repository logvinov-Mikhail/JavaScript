// setTimeout
const showGreeting = () => console.log('Поздравляем, вы стали обладателем $1000!');
setTimeout(showGreeting, 3000);

// НЕТОЧНОСТЬ ВЫЗОВА

const checkDelay = (index, delay) => {
    const start = new Date();
    setTimeout(() => {
    const end = new Date();
    const realDelay = end - start;
    console.log(`${index}: Задержка между вызовом : ${realDelay} мс`);
    }, delay);
}
for (let i = 0; i < 10; i++) {
    checkDelay(i, 1000);
}
// Данная особенность связана с тем, что код JavaScript выполняется в одном потоке!!!!

// clearTimeout 
// Запланированную задачу можно отменить с помощью функции clearTimeout .Для этого необходимо 
//передать идентификатор таймаута, возвращаемый от setTimeout 

    // сообщение в консоль не будет выведено
const sendPayment = () => console.log( 'Вам начислена зарплата!' )
const isCrisis = true;

const id = setTimeout(sendPayment, 1000);
        // не выплачиваем сотрудникам деньги. У нас кризис!
if (isCrisis) {
    clearTimeout(id);
    console.log('не выплачиваем сотрудникам деньги. У нас кризис!')
}

// setInterval 
// Аналогично с setTimeout , setInterval запускает функцию обратного вызова. Но делает это постоянно!

const areWeHome = () => console.log( 'Мы уже приехали?' );
// будет запускать areWeHome до посинения
//setInterval( areWeHome, 2000 );

let start = new Date();
setInterval(() => {
    const end = new Date();
    const delay = end - start;
    //console.log(`Задержка: ${delay}`);
    start = new Date;
}, 1000 );

// ПЕРЕДАЧА АРГУМЕНТОВ
//Все аргументы, которые передаются в setTimeout и setInterval
//после второго, становятся аргументами callback-функции в момент вызова:

setTimeout(console.log, 1000, 'Блиц, скорость без границ!');

const sum = (a, b) => a + b;
// Выведет 29 через 1с.
setTimeout(sum, 1000, 10, 19);

// РАБОТА С HTTP
//РАССМОТРИМ ЭТОТ КОД
// 1. Создаем запрос
    var xhr = new XMLHttpRequest();
    // 2. Опрелеяем функцию обратного вызова
    xhr.onreadystatechange = processResponse;
    // Этот код выполниться кода запрос будет в пути
    function processResponse(e) {
    if (xhr.readyState === 4) {
    // Запрос выпонился!
    console.log(xhr.responseText);
    } else {
    // Запрос еще выполняется
    console.log('Загружаем ...')
    }
    }
    // 3. Определяем куда и как отправлять запрос
    xhr.open('GET', 'employees.json', true);
    // 4. Отправляем запрос
    xhr.send();
    console.log('Другая важная работа ...');

    // ЖИВОЙ ПРИМЕР https://repl.it/repls/CourteousPoisedBrace

// ОПТИМИЗАЦИЯ ВЫЧИСЛЕНИЙ
    // Интервалы и таймеры - идеальное решение для долгих или рекурсивных вычислений. С помощью них мы можем 
    // проделывать полезную работу небольшими порциями, не нагружая страницу

//  вычисляем сумму от 0 до n по itemsPerStep элиментов за раз 
const sumStep = (n, itemsPerStep, onLoad) => {
    const size = Math.ceil(n / itemsPerStep); // кол-во шагов
    let index = 0; // текущий шаг
    let sum = 0; // сумма вычислений
}

// эта функция будет вызыватся  каждые 500 мс