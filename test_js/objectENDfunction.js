//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
//https://learn.javascript.ru/keys-values-entries

// ФУНКЦИИ 
    // function showMessage() {
    //   alert( 'Всем привет!' );
    // }
    // showMessage();

  //Переменные, объявленные внутри функции, видны только внутри этой функции.

//Параметры
  // Мы можем передать внутрь функции любую информацию, используя параметры 
  // (также называемые аргументами функции).
    // function showMessage(from, text = "текст не добавлен") { // параметр по умолчанию!!
    //   alert( from + ": " + text );
    // }
    //showMessage("Аня");

// Возврат значения
    // function sum(a, b) {
    //   return a + b;
    // }
    // let result = sum(1, 2);
    // alert( result ); // 3

// return
    // function checkAge(age) {
    //   if (age > 18) {
    //     return true;
    //   } else {
    //     return confirm('А родители разрешили?');
    //   }
    // }
// Возможно использовать return и без значения. 
// Это приведёт к немедленному выходу из функции.

// …REST
  // В случае, если функция имеет неопределённое число аргументов,
  // на помощь приходит оператор взятия остатка …:
    function getArgs(...data) {
      console.log(data);
      }
      getArgs(2, 4, 5, 6, 7, 10, 45, 11);
// …REST И ОСТАЛЬНЫЕ АРГУМЕНТЫ
//   В случае, когда функция содержит не всегда однородные значения,
//   их можно вынести в начало списка аргументов.
//     function duHast(a, b, c, ...rest) {
//     }

// ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
  // В переменную можно поместить всё что угодно, даже функцию! (вспомним
  // пример, где возвращается console.log )
    // let sum = function (a, b) {
    // return a + b;
    // }
  // Такая конструкция называется функциональным выражением.        

// СТРЕЛОЧНЫЕ ФУНКЦИИ
    // const arrow = (name, age) => {
    //   console.log('Привет - ', name, age)
    // }
    // const arrow2 = name => console.log('Привет - ', name)
    // arrow2('Vladilen')
    // const pow2 = num => num ** 2
    // console.log(pow2(5))

    // let sum = function (a, b){
    //   return a + b;
    // }
    // let sumArrow = (a, b) => a + b;
    // // краткий синтаксис, используется если в функции одно действие
    // let sumArrowBlock = (a, b) => { return a + b };
    // // блочный синтаксис
//  Параметры по умолчанию
    const sum = (a = 40, b = a * 2) => a + b
    console.log(sum(41, 4))
    console.log(sum())

// ОБЪЕКТЫ ///
    let obj = {
      firstName: 'Michail',
      lastName: 'Logvinov',
      age: 30, 
      nombers: [23, 13, 34],
      'likes birds': true
    }

    // console.log(obj);
    // console.log(obj.age);
    // console.log(obj['nombers']);
    // console.log(obj['likes birds']);
    // let key = 'likes birds';
    // console.log(obj[key])

//Для удаления свойства мы можем использовать оператор delete:

// интересное окно!!!
    // let key2 = prompt('Что бы вы хотели узнать ?', 'firstName')
    // alert(obj[key2])

    // let user = {
    //   name: "John",
    //   age: 30,
    //   isAdmin: true
    // };

    // for (let key in user) {  // перебор объекта
    //     console.log( key );  // name, age, isAdmin
    //     console.log( user[key] ); // John, 30, true
    // }

    // let user2 = {
    //   algebra: [3, 4, 5, 3],
    //   geometri: [4, 3, 4, 4, 5],
    //   russ: [4, 5]
    // }

// ЧТЕНИЕ СВОЙСТВ
    // let person = {
    //   firstName: 'Иван',
    //   lastName: 'Орлов',
    //   age: 45
    //   };
    //   console.log(person.firstName); // Иван
    //   console.log(person[ 'lastName' ]); // Орлов
    //   let myProperty = 'age';
    //   console.log(person[ myProperty ]); // 45

// ОБХОД СВОЙСТВ
    // let ivan = {
    //   firstName: 'Иван',
    //   lastName: 'Зайцев'
    //   }
    //   for (let prop in ivan) {
    //   let value = ivan[ prop ];
    //   console.log(`Свойство ${prop}, значение: ${value}`);
    //   }
    
// МЕТОДЫ
// Если в свойстве объекта значением будет функция,такое свойство называется методом.
    // let person = {
    //   firstName: 'Иван',
    //   showName: function() {
    //   console.log(`Имя: ${person.firstName}`)
    //   }
    //   }
    //   // вызов метода
    //   person.showName(); // Имя: Иван
      let cloneUser2 = {}; // клонирование объекта
    // for ( let key in user2) {
    // cloneUser2[key] = user2[key]
    // }
    // console.log(cloneUser2);

    Object.assign(cloneUser2, user2); // клонирование объекта вариант2 (можно клонировать несколько объектов в один и тп.)
    //console.log(cloneUser2);
    // let user3 = {
    //   name: "John",
    //   age: 30
    // };
    let clone2 = Object.assign({}, user3); // клонирование объекта вариант3

//Использование функции конструктора
    // function Car(make, model, year) {
    //   this.make = make;
    //   this.model = model;
    //   this.year = year;
    // }
//Теперь вы можете создать объект, называемый mycar, следующим образом:
    // let mycar = new Car("Eagle", "Talon TSi", 1993);
    // var kenscar = new Car("Nissan", "300ZX", 1992);
//Заметьте, что в любое время вы можете добавить новое свойство ранее созданному объекту. Например, выражение
    // mycar.color = "black";  

//https://learn.javascript.ru/object

// Задача сложить все значения
    // let salaries1 = {
    //     John: 100,
    //     Ann: 160,
    //     Pete: 130
    //   }

    // let sum = 0;
    //   for (let key in salaries1) {
    //     sum += salaries1[key];
    // }
    //  alert(sum); // 390

// задача умножить все значения 
// до вызова функции
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };
  
    function multiplyNumeric(obj) {
      for (let key in obj) {
        if (typeof obj[key] == 'number') {
          obj[key] *= 2;
        }
      //  console.log(key)
      //  console.log(obj[key])
      }
    }
    multiplyNumeric(menu);
    // console.log(menu)

//Object.keys, values, entries
//https://learn.javascript.ru/keys-values-entries
    // Object.keys(obj) – возвращает массив ключей.
    // Object.values(obj) – возвращает массив значений.
    // Object.entries(obj) – возвращает массив пар [ключ, значение].

    // let user = {
    //   name: "John",
    //   age: 30
    // };
    // Object.keys(user) = ["name", "age"]
    // Object.values(user) = ["John", 30]
    // Object.entries(user) = [ ["name","John"], ["age",30] ]

    // перебор значений
    // for (let value of Object.values(user)) {
    //   alert(value); // John, затем 30
    // }

//Трансформации объекта
  //У объектов нет множества методов, которые есть в массивах, например map, 
  //filter и других.
  //Если мы хотели бы их применить, то можно использовать 
  //Object.entries с последующим вызовом Object.fromEntries:

  // Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
  // На нём вызываем методы массива, например, map.
  // Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объе
    //Например, у нас есть объект с ценами, и мы хотели бы их удвоить:
    // let prices = {
    //   banana: 1,
    //   orange: 2,
    //   meat: 4,
    // };

    // let doublePrices = Object.fromEntries(
    //   // преобразовать в массив, затем map, затем fromEntries обратно объект
    //   Object.entries(prices).map(([key, value]) => [key, value * 2])
    // );
    // alert(doublePrices.meat); // 8


// Задача 1
    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };
    // Вариан 1
  //   let sumSalaries = 0;
  //   for (let key in salaries) {
  //     sumSalaries += salaries[key];
  //   }
  //   alert(sumSalaries); // 650

      // Вариан 2
    // alert( sumSalaries(salaries) ); // 650
    // function sumSalaries(salaries) {
    // let sum = 0;
    // for (let salary of Object.values(salaries)) {
    //   sum += salary;
    // }
    // return sum; // 650
    // }
      // Вариан 3
    // let result = Object.values(salaries).reduce((a, b) => a + b, 0);
    // alert( result );

// Задача 2 

  // let userKeys = {
  //   name: 'John',
  //   age: 30
  // };

  // function count(userKeys) {
  //   return Object.keys(userKeys).length;
  // }

  // alert( count(userKeys) ); // 2

// Задача 3

//   const people = [
//   {name: 'Vladilen', budget: 4200},
//   {name: 'Elena', budget: 3500},
//   {name: 'Victoria', budget: 1700}
//   ]

    //   const allBudget = people
    //   .filter(person => person.budget > 2000)
    //   .reduce((acc, person) => {
    //     acc += person.budget
    //     return acc
    //   }, 0)
    // console.log(allBudget)
