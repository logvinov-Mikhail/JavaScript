//будем использовать ES6

// typeof возвращает строку, указывающую тип операнда.

// alert - сообщение в окне браузера. 
    // alert("Hello");

// prompt - модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.
    // let age = prompt('Сколько тебе лет?', 100);

// confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.
// Результат – true, если нажата кнопка OK. В других случаях – false.
    // let isBoss = confirm("Ты здесь главный?");

// Переменные 
    // const name = 'Misha';
    // let age = 30;

    // const ages = [40, 42]; //  в константе можно изменять значение! Но нельзя присваивать!!
    // ages.push(50);

// Операторы 
    // — Унарные (англ. unary);  let temp = -10;  // унарный - минус. 
    // — Бинарные (англ. binary); let distance = 1056; // оператор присвоения. 
    // — Тернарные (англ. ternary). let output = access ? 'Доступ разрешен' : 'Доступ запрещен'; 

// ШАБЛОННЫЕ СТРОКИ
    // const time = 5;
    // console.log(`Поезда встретятся через ${time} часов`);

// ДОСТУП К СИМВОЛАМ charAt() 
    // let myString = "моя строка";
    // console.log(myString[4]); // 'c'

// ДЛИНА СТРОКИ  length    
    // let myString2 = "моя строка";
    // console.log(myString2.length);// 10

// ПОДСТРОКИ: SUBSTRING
    // Метод substring(start, end) возвращает подстроку с позиции
    // start до, но не включая end:

// СМЕНА РЕГИСТРА
    //Методы toLowerCase() и toUpperCase() 
    
// ПОИСК СТРОКИ В СТРОКЕ 
    //indexOf(искомая_строка[,начальная_позиция]) .

// строгий режим 
    // "use strict"

// undefined является свойством глобального объекта,то есть это переменная в глобальной области видимости.
    //То есть, если объявить переменную и не присваивать ей значение,то в ней будет undefined.

// ТИП null
    //Значение null является литералом JavaScript, представляющим нулевое или «пустое» значение,то есть, когда нет никакого объектного значения.

// Равно a == b, строгое равенство a === b - без приведения к одному типу!
// неравно a != b, строгое неравенство a !== b - без приведения к одному типу!

// Возведение в степень **

// Взятие остатка %

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// || (ИЛИ), && (И) и ! (НЕ).

// Оператор объединения с null '??'
    // Результат выражения a ?? b будет следующим:
    // a, если значение a определено,
    // b, если значение a не определено.
        // let user = //"Иван";
        //alert(user ?? "Аноним"); 
    // Кроме этого, можно записать последовательность из операторов ??, 
    // чтобы получить первое значение из списка, которое не является null/undefined.

// ОПЕРАТОР if
    /*
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 12) {
        console.log("Доброе утро");
    } else if (hours >= 12 && hours < 18) {
        console.log("Добрый день");
    } else if (hours >= 18 && hours < 22) {
        console.log("Добрый вечер");
    } else {
        console.log("Доброй ночи");
    }
    */
// СИНТАКСИС switch
    /*
    let a = 5+7;
    switch (a) {
    case 12:
        alert('Верно!');
    break;
    case 11:
    case 13:
        alert('Неверно!');
        alert('Немного ошиблись, бывает.');
    break;
    default:
        alert('Странный результат, очень странный');
    }
    */
// МАССИВЫ 
    //let buildings = ["Pool", "Shop", "Market"];
// Методы
    //console.log(buildings.pop()); 
    //console.log(buildings.push("Hospital")); 
//indexOf - поиск индекса. 
    //let arr = [1, 2, 3];
    //console.log(arr.indexOf(2)
// join
    // объединяет элементы массива в строку с помощью переданного в качестве параметра
    // разделителя. По умолчанию этим разделителем является запятая;
// split
    // тут все то же самое — только в обратную сторону. Берем строку, говорим, что мы хотим
    // разделить ее, скажем по пробелам — получаем массив слов.

// SLICE
    // Метод slice(begin, end) копирует участок массива от begin до end, не включая end.

// SPLICE
    // Метод splice – это универсальный раскладной нож для работы с массивами. Умеет все: удалять элементы, 
    // вставлять элементы, заменять элементы – по очереди и одновременно.
    // let arr2 = ['Я', 'изучил', 'изучаю', 'JavaScript'];
    // arr2.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

// CONCAT  
    // Метод arr.concat(value1, value2, ... valueN) создаёт новый массив, в который копируются элементы из arr,
    // а также value1, value2, ... valueN .
  
// ЦЫКЛЫ 
    // Цикл «while»
        // let i = 0;
        // while (i < 3) { // выводит 0, затем 1, затем 2
        // alert( i );
        // i++;
        // }

    // for 
    for (let i = 0; i <= 10; i++) {
        console.log(i);
        }

    let names = ["Sasha", "Katya", "Vika", "Maria"];
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
            // (i % 2 === 0) - остаток от деления.
    // for of 
    let buildings = ["Pool", "Shop", "Market"];
        for (building of buildings){
            console.log(building)
        }
    // while 
    let i = 0;
    while (i<10) {
        console.log(i);
        i++;
    }
// ПРЕРЫВАНИЕ ЦИКЛА: break
// СЛЕДУЮЩАЯ ИТЕРАЦИЯ continue Директива continue прекращает выполнение текущей итерации цикла.

// ТИПЫ ДАННЫХ
    // let a = 5; // number
    // let b = "это строка"; // string
    // let c = true; // boolean
    // let d; // undefined
    // let e = null; // null
    // let f = { a:1, b:false }; // object
    // let g = function(){}; // function

    // Symbol https://learn.javascript.ru/symbol
    // BigInt https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/BigInt

// МЕТОД valueOf() позволяет получить значение примитива.

// ФУНКЦИЯ toFixed(digits) форматирует число, используя запись с фиксированной запятой.

// ЗНАЧЕНИЕ Infinity - Это значение ведёт себя как математическая бесконечность; например,
    //любое положительное число, умноженное на Infinity даёт Infinity , а любое число, делённое на Infinity, даёт 0.

// NaN является значением, представляющим не-число (Not-A-Number).

//parseFloat() и parseInt() 
    // Функция parseInt() принимает строку в качестве аргумента и возвращает 
    // целое число в соответствии с указанным основанием системы счисления.

    // Функция parseFloat() принимает строку в качестве аргумента и возвращает 
    // десятичное число (число с плавающей точкой)

// ОБЪЕКТЫ 
    let person = {
        name: "Иван", 
        age: 30, 
        isMarried: false 
    }
    console.log(person); // { name: "Иван", age: 30 }
//ЧТЕНИЕ СВОЙСТВ
    console.log(person.name); // "Иван"
    console.log(person[ 'age' ]); 
    let myProperty = 'age';
    console.log(person[ myProperty ]); 
    // НЕСУЩЕСТВУЮЩИЕ СВОЙСТВА
    // console.log(person.fatherName); // undefined

// УДАЛЕНИЕ delete person.age;
//ПРОВЕРКА НАЛИЧИЯ СВОЙСТВА В ОБЪЕКТЕ IN - console.log('name' in person);

//ОБХОД СВОЙСТВ for in
    let ivan = {
        firstName: 'Иван',
        lastName: 'Зайцев'
        }
    for (let prop in ivan) {
        let value = ivan[ prop ];
        console.log(`Свойство ${prop}, значение: ${value}`);
    }

//МЕТОДЫ
    // Если в свойстве объекта значением будет функция,такое свойство
    // называется методом.
    let person2 = {
        firstName: 'Иван',
        showName: function() {
        console.log(`Имя: ${person2.firstName}`)
        }
    }
    person2.showName(); 
        
// ФУНКЦИИ 
    // function имяФункции() {
    //     // тело функции
    // }

    function showVacancy() {
        console.log('Здравствуйте! Вы умеете пользоваться консолью!');
    }
    showVacancy();
//ВОЗВРАТ ЗНАЧЕНИЙ return
    function getFuelExpense() {
        let fuelPer100km = 10;
        let distance = 284;
        let expense = distance / fuelPer100km;
        return expense;
    }
// ПОЛУЧЕНИЕ ЗНАЧЕНИЙ
    // let fuelData = getFuelExpense();
    // или выведите выражение сразу!
    // console.log(getFuelExpense());
//…REST
    // В случае, если функция имеет неопределённое число аргументов,
    // на помощь приходит оператор взятия остатка …:
    //…rest должен быть в конце списка аргументов!
    function getArgs(...data) {
        console.log(data);
        }
    getArgs(2, 4, 5, 6, 7, 10, 45, 11);

// ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
    // В переменную можно поместить всё что угодно, даже функцию! (вспомним
    // пример, где возвращается console.log )
    //     let sum = function (a, b) {
    //     return a + b;
    //     }
    // Такая конструкция называется функциональным выражением. Это просто
    // ещё один способ объявить функцию.

// СТРЕЛОЧНЫЕ ФУНКЦИИ
    //Если в функции 1 аргумент,то скобки не обязательны:
    let sum = function (a, b){
    return a + b;
    }
    let sumArrow = (a, b) => a + b;
    // краткий синтаксис, используется если в функции одно действие
    let sumArrowBlock = (a, b) => { return a + b };
    // блочный синтаксис

// КОНТЕКСТ. this
    function showName() {
        console.log( `Имя: ${this.firstName}` );
    }
    let ivan2 = {
        firstName: 'Иван',
        showName
    }
// КОНСТРУКТОР ОБЪЕКТА
    function Person(name, gender) {
        this.name = name;
        this.gender = gender;
    }

//ОПЕРАТОР new
    function Car(engine) {
        this.engine = engine;
    }
    const car = new Car('v8');
    
//ПРОТОТИП ОБЪЕКТА
    const predator = {
        food: 'meat',
    };
    function Tiger(name) {
        this.name = name;
    }
    Tiger.prototype = predator; // определяем прототип
    const tiger = new Tiger('Vasya');

// Object.hasOwnProperty() - Метод определяет, содержит ли объект указанное свойство в качестве собственного свойства объекта.
// Object.create(protype) - Создаёт новый объект с указанным объектом прототипа (protype).
// Object.assign(target, … sources) - оздаёт новый объект путём копирования значений всех собственных
    //перечисляемых свойств из одного или более исходных объектов в целевой объект. В новом стандарте есть аналог — ... .
// Object.keys(obj) | Object.values(obj) - keys — возвращает массив, содержащий имена всех собственных
    // перечисляемых свойств переданного объекта. values — возвращает массив значений.
// Object.entries(obj) - Метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]

// КОНСТРУКТОР Date //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
    // Отсчёт месяцев начинается с нуля.
    // Отсчёт дней недели (для getDay() ) тоже начинается с нуля (и это воскресенье).
    const date = new Date();
// МЕТОД Date.now() - возвращает дату сразу в виде миллисекунд. 
// Intl - позволяющий с легкостью интернационализовать даты.
    const formatter = new Intl.DateTimeFormat("ru");

//МЕТОДЫ ОБЪЕКТА Math
    // Math.random(); // Случайное число от 0 до 1
    // Math.max(12, 13, 432, -1); // 432
    // Math.min(12, 13, 432, -1); // -1
// ОКРУГЛЕНИЕ ЧИСЕЛ
    // Math.floor() // Округляет в меньшую сторону
    // Math.round() // Округляет к ближайшему целому
    // Math.ceil() // Округляет в большую сторону
    // Math.trunc() // Убирает дробную часть

// ООП
    // ООП — методология разработки программ, в которой все важные вещи
    // представляются объектами. Каждый объект построен по определенным
    // правилам, которые называют классом. Классы основываются друг на друге,
    // что называют наследованием.

// class
    class Book {
        constructor(name) {
        this.name = name;
        }
    }
    const book = new Book('Понедельник начинается в субботу');
    console.log(book.name);;
// МЕТОДЫ
    //Как и свойства, у классов можно предопределить методы для всех создаваемых экземпляров этого типа.

// ГЕТТЕРЫ И СЕТТЕРЫ ОБЪЕКТОВ
// Сеттеры и геттеры, заданные в классе, появляются во всех экземплярах:
class Person1 {
    constructorname(birthYear) {
        this.name = name;
        // сработает сеттер
        this.birthYear = birthYear;
    }
    set birthYear(year) {
        const date = new Date();
        this.age = date.getFullYear() - year;
        this._birthYear = year;
    }
    get birthYear() {
        return this._birthYear;
    }
}
const ivan1 = new Person1('Иван', 1980);
    // сработает сеттер
ivan1.birthYear = 1990;
    // сработает геттер
console.log(ivan1.birthYear);
console.log(ivan1);

//НАСЛЕДОВАНИЕ
    //С помощью ключевого слова extends
    // Конструкция super (
    // Мы обязаны пользоваться конструкцией super до первого обращения к this
    class Human {
        constructor(name) {
            this.name = name;
        }
    }
    class Man extends Human {
        constructor(name) {
            // вызываем родительский конструктор (Human)
            super(name)
            this.gender = 'male';
        }
    }
    const human = new Man('Николай Петрович');
    console.log(human.gender); // 'male'
    console.log(human.name); // 'Николай Петрович'
// НАСЛЕДОВАНИЕ МЕТОДОВ
    // Точно как и со свойствами и конструкторами, классы могут наследовать и
    // методы:    
    class TextMessage {
        read() {
        console.log('Вам письмо, танцуйте!');
        }
    }
    class SMS extends TextMessage {
    }
    const textMsg = new TextMessage();
    const msg = new SMS();
    textMsg.read(); // 'Вам письмо, танцуйте!'
    msg.read(); // 'Вам письмо, танцуйте!'
// СОБСТВЕННЫЕ МЕТОДЫ
    // Методы, созданные в расширенном классе, недоступны для родителя
        // class SiteForm {
        // }
        // class CallbackForm extends SiteForm {
        //     onSend() {
        //     console.log('Спасибо за заявку! Мы свяжемся с вами в ближайшее время');
        //     }
        // }
        // const form = new SiteForm();
        // const callbackForm = new CallbackForm();
        // console.log(typeof form.onSend); // undefined
        // console.log(typeof callbackForm.onSend); // function
//ПОЛИМОРФИЗМ
    // Второй принцип, который есть в ООП — полиморфизм. Собака и улитка
    // передвигаются, но каждый делает это по-разному. Так и объекты могут
    // иметь одни и те же методы, но реализация этих методов может отличаться.
        // class VideoItem {
        //     constructor(title) {
        //     this.title = title;
        //     }
        //     play() {
        //     console.log(`Начинаю воспроизводить видео ${this.title}`);
        //     }
        // }
        // // видео c рекламой
        // class AdsVideoItem extends VideoItem {
        //     play() {
        //     alert('Исландский морж улетел в космос! Кликай сюда!');
        //     console.log(`Начинаю воспроизводить видео ${this.title}`);
        //     }
        // }
        // const video = new VideoItem('Как разбогатеть на чтении!');
        // const adsVideo = new AdsVideoItem('Ванга рассказала Киркорову про ЭТО!');
        // video.play(); // 'Начинаю воспроизводить видео Как разбогатеть на чтении!'
        // adsVideo.play(); // 'Исландский морж улетел в космос! Кликай сюда!' 

// super В ПОЛИМОРФИЗМЕ
    // С помощью super можно обращаться к методам родительского класса:
    class VideoItem {
        constructor(title) {
        this.title = title;
        }
        play() {
        console.log(`Начинаю воспроизводить видео ${this.title}`);
        }
    }
    class AdsVideoItem extends VideoItem {
        play() {
        //alert('Исландский морж улетел в космос! Кликай сюда!');
        // Вызываем play у VideoItem
        super.play();
        }
    }
    const video = new VideoItem('Как разбогатеть на чтении!');
    const adsVideo = new AdsVideoItem('Ванга рассказала Киркорову про ЭТО!');
    // тот же результат
    video.play();
    adsVideo.play();

// СТАТИЧЕСКИЕ МЕТОДЫ
    // Так как класс — это обычная функция, а функция в JS представлена
    // объектом, у этого объекта можно определить методы. Такие методы в
    // терминологии ES6 называются статическими:
    class Text {
    static isText(str) {
    return typeof str === 'string';
    }
    }
    Text.isText('В чём смысл жизни?'); // true
    Text.isText(42); // false
//СТАТИЧЕСКИЕ МЕТОДЫ ОТСУТСТВУЮТ В ЭКЗЕМПЛЯРАХ!
    const text = new Text();
    console.log(text.isText); 
    // this В СТАТИЧЕСКИХ МЕТОДАХ
    // this в статических методах указывает на сам класс (или функциюконструктор),
    // так как статические методы вызываются вне экземпляра:
    class Test {
    static showThis() {
    console.log(this);
    }
    }
    Test.showThis(); // [Function: Test]

// СТАТИЧЕСКИЕ СВОЙСТВА
    // Внимание! Так как это нововведения,то не во всех браузерах они могут
    // работать.
    class Text2 {
    static TYPE_TEXT = 'text';
    static TYPE_EMAIL = 'email';
    static TYPE_PHONE = 'phone';
    }
    console.log(Text2.TYPE_TEXT); // 'text'

// ПРИВАТНЫЕ СВОЙСТВА (ДЕМО)
    // В современном JS была добавлена возможность приватных полей, к
    // которым можно обратиться только внутри класса.
        // class Cat {
        // #health;
        // constructor() {
        // this.#health = 9;
        // this.#hungry = 0;
        // // SyntaxError: Private field '#hungry' must be declared in an enclosing class
        // }
        // getHealth(){
        // return this.#health;
        // }
        // }
        // const kitty = new Cat();
        // console.log(kitty.#health);
        // // SyntaxError: Private field '#health' must be declared in an enclosing class
        // console.log(kitty.getHealth());
        // // 9
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Class_fields
//https://learn.javascript.ru/class

///////////////////////////////////////////////////////////////////////////////
// СОЗДАНИЕ СОБСТВЕННЫХ ИСКЛЮЧЕНИЙ
    //Для выбрасывания исключения используется конструкция throw .

//ОБЪЕКТ ОШИБКИ
    //Примитивы, вроде текста или чисел не используются как ошибки.Для
    //ошибок существует класс Error.
    const divider = (a, b) => {
        if(b == 0){
        const divideError = new Error("Ошибка деления на 0");
        throw divideError;
        // или throw new Error("Ошибка деления на 0");
        }
        return a / b;
    };  
    console.log(divider(5, 2)); // 0.5;
    //console.log(divider(1,0)); // "Ошибка деления на 0";

// Конструкция try..catch состоит из блоков:
    // — try ;
    // — catch ;
    // — finally .
    try {
        console.lo('Ошибка не произошла!'); // .. код, который может выполниться неверно
    } catch(e) {
        console.log('Ошибка произошла!'); // .. код, который в этом случае выполнится
    } finally {
        console.log('ошибка не повлияла на этот код в блоке finally');// .. код, который выполнится в любом случае
    }
// ОГРАНИЧЕНИЯ ДЛЯ try...catch
    // Перехват ошибки НЕ СРАБОТАЕТ:
    // — если имеется синтакcическая ошибка;
    // Перехват ошибки НЕ СРАБОТАЕТ:
    // — если код, в котором произошла ошибка работает асинхронно по
    // отношению к try...catch .

// КОНСОЛЬНЫЕ МЕТОДЫ ДЛЯ УДОБНОЙ РАБОТЫ
    // console.log() - ВЫВОД НА КОНСОЛЬ
    // console.clear() - ОЧИСТКА КОНСОЛИ
    // console.table() - ФОРМАТИРОВАННЫЙ ВЫВОД
    // console.time() и console.timeEnd() - ЗАМЕР ВРЕМЕНИ ВЫПОЛНЕНИЯ КОДА
    // (в метод передаётся id таймера). Таким образом можно получить время выполнения цикла из 10000 итераций.

// ЗАМЫКАНИЯ      
    // Замыкания—это функция вместе со всеми внешними переменными,
    // которые ей доступны.Другими словами, функция, определённая в
    // замыкании, «запоминает» окружение, в котором она была создана.
    // В нашем случае замыканием является функция tick .
    let start3 = 1;
    function tick3() {
        console.log( start3++ );
    }
////////////////////////////////////////////////////////////////////////////
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
       console.log(example2()());
      
       const result = example2();
       console.log(result);
       console.log(result());

// ИМПЕРАТИВНОСТЬ И ДЕКЛАРАТИВНОСТЬ
    // Императивный код — полностью описывает каждое необходимое действие,
    // чтобы достигнуть поставленной задачи.
    // Декларативный код — описывает задачу и ожидаемый результат. Как должен
    // быть достигнут ожидаемый результат, может быть вообще не описано.

// РАСШИРЕННЫЙ ПОИСК В МАССИВЕ 

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
        { name: 'Мария', department: 'IT', salary: 75000 },
        { name: 'Иван', department: 'Продажи', salary: 55000 },
        { name: 'Николай', department: 'IT', salary: 92000 },
        { name: 'Мария', department: 'Маркетинг', salary: 35000 }
    ];
    const testeduce = prakt.reduce((acc, emploee, index) => {
        console.log('index', index);
        console.log('acc', acc);
        console.log('---');
        return acc + emploee.salary;
    }, 0);
    console.log(testeduce);

// ПОНЯТИЕ АСИНХРОННОСТИ