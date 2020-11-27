// ПОНЯТИЕ АСИНХРОННОСТИ
/*
// setTimeout(fn, ms) , где fn - функция, которую нужно запустить через ms миллисекунд (1000 миллисекунд = 1 секунде).
    const showGreeting = () => console.log('Поздравляем, вы стали обладателем $1000!');
    setTimeout(showGreeting, 1000);
// НЕТОЧНОСТЬ ВЫЗОВА
    // Тем не менее, showGreeting из прошлого примера выполнится не обязательно через 1 секунду.

    const checkDelay = (index, delay) => {
        const start = new Date();
    setTimeout(() => {
        const end = new Date();
        const realDelay = end - start;
    console.log(`${index}: Задержка между вызовом : ${realDelay} мс`);
    }, delay);
    }
    for (let i = 0; i < 10; i++) {
        checkDelay(i, 10);
    }
    
// ОДИН ПОТОК
    // Данная особенность связана с тем, что код JavaScript выполняется в одном
    // потоке. Проще говоря, в нашем случае, showGreeting выполнится,
    // только если в настоящий момент не выполняется вообще ничего.
    // Если же параллельно с showGreeting выполняется какой-либо другой
    // код, интерпретатор JavaScript сначала закончит выполнять его и только
    // потом возьмётся за showGreeting .

// ФУНКЦИИ ОБРАТНОГО ВЫЗОВА
    // Это всего лишь термин и ничего кроме. Функцией обратного вызова
    // (callback) называется такая, которая:
    // 1. Передаётся в другую функцию высшего порядка (HOF) как аргумент.
    // 2. HOF должен вызвать эту функцию по достижению определённого
    // условия.
    // Рассмотрим прошлый пример:
        const showGreeting2 = () => console.log('Добрый день, я консольный бог!');
        setTimeout(showGreeting2, 1000);
    // В нашем случае функцией высшего порядка является setTimeout , а
    // функцией обратного вызова является showGreeting .

//clearTimeout
    // Запланированную задачу можно отменить с помощью функции clearTimeout .Для этого необходимо передать 
    // идентификатор таймаута, возвращаемый от setTimeout.
            // сообщение в консоль не будет выведено
    const id = setTimeout(() => console.log('Я хочу жить :('), 500);
    clearTimeout(id);
            // сообщение в консоль не будет выведено
    const sendPayment = () => console.log( 'Вам начислена зарплата!' );
    const isCrisis = false;
    const id2 = setTimeout(sendPayment, 1000);
            // не выплачиваем сотрудникам деньги. У нас кризис!
    if (isCrisis) {
    clearTimeout(id2);
    }

// setInterval (
    // Аналогично с setTimeout , setInterval запускает функцию обратного вызова. Но делает это постоянно!
    //const areWeHome = () => console.log( 'Мы уже приехали?' );
    // будет запускать areWeHome до посинения
    //setInterval( areWeHome, 1000 );

// БОЛЕЗНЬ ЗАПУСКА
    // Как и у setTimeout , setInterval также «болеет» непредсказуемым временем запуска функций обратного вызова.
    let start = new Date();
    setInterval(() => {
        const end = new Date();
        const delay = end - start;
        console.log(`Задержка: ${delay}`);
        start = new Date;
    }, 1000 );

// ПЕРЕДАЧА АРГУМЕНТОВ
    //Все аргументы, которые передаются в setTimeout и setInterval после второго, становятся аргументами callback-функции в момент вызова:
        // выведет сообщение «Блиц, скорость без границ!» через 1с.
        setTimeout(console.log, 1000, 'Блиц, скорость без границ!');
        const sum = (a, b) => a + b;
        // Выведет 29 через 1с.
        setTimeout(sum, 1000, 10, 19);
*/
        class Person {
            constructor(firstName, lastName, phone) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            }
            }
            const phonebook = [
            new Person('Владислав', 'Иванов', '+74993412233'),
            new Person('Леонида', 'Петрова', '+74993412232'),
            ];
            console.log(phonebook);