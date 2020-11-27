/*
// без this
let ivan = {
        firstName: 'Иван',
        showName() {
        console.log( `Имя: ${ivan.firstName}` );
        }
}
let oleg = {
        firstName: 'Олег',
        showName() {
        console.log( `Имя: ${oleg.firstName}` );
        }
}
oleg.showName(); 

// С использованием this
function showName() {
    console.log( `Имя: ${this.firstName}` );
}
let ivan1 = {
    firstName: 'Иван',
    showName
}   
let oleg1 = {
    firstName: 'Олег',
    showName
} 
ivan1.showName()
*/
// Использования this и new для упрощения и оптимизации кода. 
/*
// ОПЕРАТОР new
// Позволяет создавать объекты через вызов функций.
// Особенности работы функций, вызванных через оператор new :
// — Создаётся новый пустой объект;
// — Ключевое слово this получает ссылку на этот объект;
// — Функция выполняется;
// — Возвращается this без явного указания.

//Конструктор - специальный блок инструкций, вызываемый при создании объекта.
function person(name, gender) {
    this.name = name;
    this.gender = gender;
}

const jeck = new person('jeck', 'M');
console.log(jeck)

function car(engine){
    this.engine = engine;
}

const cars = new car('v8');
console.log(cars);
*/
//ПРИМЕР ПРОТОТИПА
const Predator = {
    food: 'meat',
};
function Tiger(name) {
    this.name = name;
}
const tiger = new Tiger('Vasya');
// console.log(tiger.name); // 'Vasya'
// console.log(tiger.food); // undefined

const Predator1 = {
    food: 'meat',
};
function Tiger1(name) {
    this.name = name;
}
Tiger1.prototype = Predator1; // определяем прототип
const tiger1 = new Tiger1('Vasya');
 console.log(tiger1.name); // 'Vasya'
 console.log(tiger1.food); // 'meat'

 // Еще пример 
let animal = {
    eats: true,
    walk() {            ////// ВАЖНО КОРОТКИЙ СИНТЕКСИС ФУНКЦИИ-МЕТОДА!!!!!  Функция в объекте называется МЕТОД!
      alert("Animal walk");
    }
};


//Object.prototype.hasOwnProperty()
// Метод определяет, содержит ли объект указанное свойство в качестве
// собственного свойства объекта.
    const Predator3 = {
        food: 'meat',
    };
    function Tiger3(name) {
        this.name = name;
    }
    Tiger3.prototype = Predator3; // определяем прототип
    const tiger3 = new Tiger3('Vasya');
    tiger3.hasOwnProperty('name'); // true
    tiger3.hasOwnProperty('food'); // false

//Object.create(protype)
//Создаёт новый объект с указанным объектом прототипа (protype) .
    const tiger4 = Object.create(Predator3);
    tiger4.food; // meat
    //Эквивалетно предыдущему примеру.

// Object.assign(target, … sources)
// Создаёт новый объект путём копирования значений всех собственных
// перечисляемых свойств из одного или более исходных объектов в
// целевой объект. В новом стандарте есть аналог — ... .
    const person = {
        name: 'Frederic',
    };
    const account = {
        balance: 14000,
    };
    const info1 = Object.assign({}, preson, account);
    info1.name; // 'Frederic'
    info1.balance; // '14000
    const info2 = {
        ...person,
        ...account,
    };
    info2.name; // 'Frederic'
    info2.balance; // '14000

//Object.keys(obj) |
//Object.values(obj)
//keys — возвращает массив, содержащий имена всех собственных
//перечисляемых свойств переданного объекта.
//values — возвращает массив значений перечисляемых свойств объекта
//в том же порядке что и цикл for...in .
    Object.keys(info); // ["name", "balance"]
    Object.values(info); // ["Frederic", 14000]

//Object.entries(obj)
// Метод возвращает массив собственных перечисляемых свойств
// указанного объекта в формате [key, value] , в том же порядке, что и в
// цикле for...in (разница в том, что for-in также перечисляет
// свойства из цепочки прототипов).
    Object.entries(info); // [ ["name", "Frederic"], ["balance", 14000] ]
    //Он не идет вглубь по прототипам!!!!!
    
    // РАБОТА С ДАТАМИ   
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
//Дата и время представлены в JavaScript одним объектом: Date .
    new Date();
    //ВАЖНО!!! 
// Отсчёт месяцев начинается с нуля.
// Отсчёт дней недели (для getDay() ) тоже начинается с нуля (и это воскресенье).
// с 1 января 1970 г. UTC

//УСТАНОВКА КОМПОНЕНТА ДАТ
    date.setFullYear(year [ month, date])
    date.setMonth(month [ date])
    date.setDate(date)
    date.setHours(hour [ min, sec, ms])
    date.setMinutes(min [ sec, ms])
    //date.setSeconds(sec [, ms])
    date.setMilliseconds(ms)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date

//ПОЛУЧЕНИЕ КОМПОНЕНТА ДАТ
    const date = new Date();
    date.getFullYear() // 2018
    date.getMonth() // 10
    date.getDate() // 22
    date.getHours() // 21
    date.getMinutes() // 32
    date.getSeconds() // 41
    date.getMilliseconds() // 122

//Метод Date.now() возвращает дату сразу в виде миллисекунд.
    Date.now() // 1542912986688
//Такого результата можно добиться.
    Number(new Date());// 1542912986688

//Неправильные компоненты даты автоматически распределяются по остальным.

//Intl
//Объект, позволяющий с легкостью интернационализовать даты.
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("ru");
    formatter.format(date) // "23.11.2018"


// МЕТОДЫ ОБЪЕКТА Math
//Math - глобальный объект, помогающий в математических вычислениях.
//Имеет свойства, константы:
    Math.PI; // 3.141592653589793
    Math.E; // 2.718281828459045
//И методы:
    Math.random(); // Случайное число от 0 до 1
    Math.max(12, 13, 432, -1); // 432
    Math.min(12, 13, 432, -1); // -1
//ОКРУГЛЕНИЕ ЧИСЕЛ
    Math.floor(2.6); // в меньшую сторону
    Math.round(2.6); // до ближайшего целого
    Math.ceil(2.1); // в большую сторону
//МОДУЛЬ ЧИСЛА
    Math.abs(-2); // 2
    Math.abs(2); // 2

// ДЗ 
//https://github.com/netology-code/bjs-homeworks/tree/master/2.2-object-prototype
// Задача №1
String.prototype.isPalindrome =
function () {
  const messegeInput = this.toLowerCase().split('');   //.split('').reverse().join('')
  //console.log(messege);
  //let messegeInput = this.toLowerCase();
  //console.log(messegeInput);
  return messegeInput.join('') === messegeInput.reverse().join('');
  // for (let i = 0; i < messegeInput.length; i++) {
  //   if (messegeInput[i] === messegeInput[messegeInput.length - 1 - i]){
  //     return true;
  //   } else {
  //     return false;
  //   };
  // };
};
  console.log("А роза упала на лапу Азора".isPalindrome());

// Задача №2
let roundedAverage;
function getAverageMark(marks) {
  if(marks == 0) {
    return roundedAverage = 0; 
  }
  let summary = 0;
  for(let i = 0; i < marks.length; i++) {
    summary += marks[i];
  }
  let average = summary / marks.length;
  console.log(average);
  return roundedAverage = Math.round(average);
  //let average = marks.reduce((sum, current) => (sum + current))/ marks.length;
  //console.log(average);
  // if (average != 0) {
  //   return roundedAverage = Math.round(average);
  // } else {
  //   return roundedAverage = 0;
  // }; 
}

// Задача №3
function checkBirthday(birthday) {
  const now = Date.now();
  const date = new Date(birthday);
  const parsedBirthday = new Date(birthday).getTime();
  const diff = now - parsedBirthday;
  const age = diff / 31557600000; //365,25 дней
  return verdict = (age > 18);
}
