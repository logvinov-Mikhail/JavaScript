
// МУТАБЕЛЬНОСТЬ И ИММУТАБИЛЬНОСТЬ
    // Объекты, имеющие методы, которые позволяют менять сам объект, или
    // свойства, которые можно менять напрямую, являются изменяемыми,
    // мутабельными (от слова мутация, мутант).
    // В JavaScript все объекты, в том числе и массивы — изменяемы,т.е.
    // мутабельны (mutable).

// ФУНКЦИЯ Array.isArray И
    //ПЕРЕХВАТ ИСКЛЮЧЕНИЙ
    function logArray(arr) {
        if (!Array.isArray(arr)) {
            throw new Error('Аргумент не является массивом'); // выкидываем исключение
        }
        console.log(`Массив размером ${arr.length}: [`);
        for (let item of arr) {
            console.log(`${item} (${typeof item})`);
        }
        console.log(`]`);
    }
    try {
        logArray(12);
    } catch (e) { // отлавливаем исключение
        console.log(e);
    }
    // Error: Аргумент не является массивом

// Array.from - Функция Array.from , позволяет создавать массивы из итерируемых и массивоподобных объектов:
    const str = 'Не массив!';
    const simbols = Array.from(str);
    console.log(simbols);
    // ["Н", "е", " ", "м", "а", "с", "с", "и", "в", "!"]

// МАССИВОПОДОБНЫЙ ОБЪЕКТ arguments
    function logArgs() {
        console.log(arguments);
        // Arguments[1,2,3]
        }
    logArgs(1, 2, 3);
// ПРЕОБРАЗУЕМ arguments В МАССИВ
// Array.from
    function logArgs2() {
        console.log(Array.from(arguments).join(', '));
    }
    logArgs2(1, 2, 3); // 1, 2, 3

// ПОИСК В МАССИВЕ
// МЕТОД МАССИВА indexOf -  строго сравнивает аргумент с каждым элементом массива и возвращает индекс 
    //первого элемента, сравнение с которым вернет истину
    // Когда элемент не найден, indexOf возвращает -1

// МЕТОД includes - Он идентичен методу indexOf ,только вместо индекса он возвращает true , если искомый
    //элемент есть в массиве, иначе возвращает false 

// МЕТОД lastIndexOf - Если в массиве искомых элементов не один, и нам нужен индекс последнего из них.

// ФУНКЦИИ ВЫСШЕГО ПОРЯДКА - High ordered function или HOF — функция высшего порядка в переводе с английского.
    // Функция, принимающая в качестве аргументов другие функции или возвращающая другую функцию в качестве результата.

    function example1(){
        const innerExample1Func = () => "innerExample1Func_result";
        return innerExample1Func();
        }
        function example2(){
        const innerExample2Func = () => "innerExample2Func_result";
        return innerExample2Func;
        }
       console.log(example1());
       console.log(example2());
      
       const result = example2();
       console.log(result);
       console.log(result());

// ИМПЕРАТИВНОСТЬ И ДЕКЛАРАТИВНОСТЬ
    // Императивный код — полностью описывает каждое необходимое действие,
    // чтобы достигнуть поставленной задачи.
    // Декларативный код — описывает задачу и ожидаемый результат. Как должен
    // быть достигнут ожидаемый результат, может быть вообще не описано.

// РАСШИРЕННЫЙ ПОИСК В МАССИВЕ 

// Что если мы хотим найти индекс первого четного элемента в массиве?
    //const numbers = [ 127, 41, 454, 296, 489 ];

// МЕТОД findIndex
    // позволяет найти индекс искомого элемента, описав условие функцией.

    const numbers = [ 127, 41, 454, 296, 489 ];
    const numbersWithoutEven = [ 127, 41, 365, 7, 489 ];
    function isEven(number, index, arr ) { //  дополнительно мы можем получить index, arr
        //console.log('---');
        //console.log({number});
        //console.log({index});
        //console.log({arr});
        //console.log({nextEl: arr[index + 1]});

        return number % 2 === 0;
    }
    console.log('result')
    console.log(numbers.findIndex(isEven)); // 2
    //console.log(numbersWithoutEven.findIndex(isEven)); // -1
    //Обратите внимание: несмотря на то, что четных элементов в массиве несколько, возвращается индекс первого.
    // Метода findLastIndex у массивов нет. Потому что всегда можно воспользоваться методом reverse,
    // который переставляет элементы массива в обратном порядке.

// МЕТОД find - возвращает не индекс, а сам элемент. 
    const numbers2 = [ 127, 41, 454, 296, 489 ];
    function isEven2(number) {
        return number % 2 === 0; // обязательно === строгое равенство 
    }
    console.log(numbers2.find(isEven));

// ХОТЯ БЫ ОДИН метод some 
    console.log(numbers.some(isEven));  // true

// КАЖДЫЙ метод every 
    function isEven3(number) {
    return number % 2 === 0;
    }
    function isEvenArray(arr) {
    return arr.every(isEven);
    }
    console.log(isEvenArray([ 24, 42, 176 ])); // true
    console.log(isEvenArray([ 24, 41, 176 ])); // folse

// Практика 
const employees = [
    { name: 'Мария', department: 'IT', salary: 75000 },
    { name: 'Иван', department: 'Продажи', salary: 55000 },
    { name: 'Николай', department: 'IT', salary: 92000 },
    { name: 'Мария', department: 'Маркетинг', salary: 35000 }
    ];
    // Давайте решим следующие простые задачи:
    // 1. Найдем Марию из отдела IT.
    // 2. Выясним, есть ли у кого-то зарплата более 90000.
    // 3. Проверим, все ли получают более 50000.

    const task1 = employees.find(employee =>
        employee.name === 'Мария' && employee.department === 'IT'
    );
    const task2 = employees.some(employee =>
        employee.salary > 90000
    );
    const task3 = employees.every(employee =>
        employee.salary > 50000
    );

// МЕТОД filter
    const maries = employees.filter(employee => employee.name === 'Мария');
    console.log(maries);

    const noItBelow90K = employees.filter(employee => employee.department !== 'IT' && employee.salary < 90000);
    console.log(noItBelow90K);

    // ВСЕГДА МАССИВ Даже если ничего не найдено или найден один элемент:

// МЕТОД МАССИВА map  - Создает новый массив, поместив в него результат вызова переданной
    // функции для каждого элемента исходного массива.
    // Метод map принимает функцию, создает и возвращает новый массив:
    const timeIntervals = [1800, 3600, 86400];
    const secondsInHour = 3600;
    const timeIntervalsInHours = timeIntervals.map(sec => sec / secondsInHour);
    console.log(timeIntervalsInHours); // [ 0.5, 1, 24 ]

// РАЗМЕР МАССИВА РАВЕН ИСХОДНОМУ
    //Попробуем возвести в квадрат только четные числа, а нечетные проигнорировать:
    const numbers3 = [1, 2, 3, 4, 5];
    const squareEven = numbers3.map(function (number) {
        if (number % 2 === 0) {
        return number * number;
        }
    });
    console.log(squareEven); // [ undefined, 4, undefined, 16, undefined ]
    //Просто откинем undefined после, собрав вызовы map и filter в цепочку:
        const numbers4 = [1, 2, 3, 4, 5];
        const squareEven1 = numbers4
        .filter(number => number % 2 === 0)
        .map(number => number * number);
        console.log(squareEven1); // [ 4, 16 ]

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