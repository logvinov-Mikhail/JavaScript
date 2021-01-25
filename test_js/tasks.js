// Задача №1 
    console.log('--- №1 ---')
    var summation = function (num) {
        let summNombers = 0;
        
        for (i = 1; i <= num; i++){
        summNombers += i;
        
        }
        return  console.log(summNombers);
    }
    summation(8);
// Задача №2 
console.log('--- №2 ---')

    function boolToWord(bool) {
        if(bool === true){
            return console.log('Yes');
        }
        else {
            return console.log('No');
        }
    }
    boolToWord(true);

// АЛЬТЕРНАТИВНЫЙ КОД - куда проще и короче! 
    console.log('---')

    function boolToWord_2( bool ){
        return bool ? console.log('Yes'):console.log('No');
    }
    boolToWord_2(true);

    console.log('---');

// Задача №3 
console.log('--- №3 ---')

function multiTable(number) {
    return console.log(`1 * ${number} = ${1*number}\n2 * ${number} = ${2*number}\n3 * ${number} = ${3*number}\n4 * ${number} = ${4*number}\n5 * ${number} = ${5*number}\n6 * ${number} = ${6*number}\n7 * ${number} = ${7*number}\n8 * ${number} = ${8*number}\n9 * ${number} = ${9*number}\n10 * ${number} = ${10*number}`);
}
multiTable(5);

// АЛЬТЕРНАТИВНЫЙ КОД - куда правильнее и короче! 

const multiTable1 = (number) => {
    let table = '';
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
    //return console.log(table);
}
multiTable1(1);
function multiTable2(number) {
    let table = '';
    for(let i = 1; i <= 10; i++){
      table += `${i} * ${number} = ${i*number}\n`
    }
    //return console.log(table.slice(0, -1));
}
multiTable2(2);
function multiTable3(n) {
    //return console.log([...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n'));
}
multiTable2(3);

// Задача №4
console.log('--- №4 ---')

function enough(cap, on, wait) {
   if (on + wait > cap){
       return(on + wait - cap);
   } 
   return 0;
}
enough(10, 6, 5);

// АЛЬТЕРНАТИВНЫЙ КОД - Вообще гениально и просто!
function enough(cap, on, wait) {
    return console.log(Math.max(wait + on - cap, 0));
  }

// Задача №5 https://learn.javascript.ru/ifelse
console.log('--- №5 ---')
/*
let officialName_JS = prompt('Какое «официальное» название JavaScript?', 'ответ');

if(officialName_JS == 'ECMAScript') {
    alert('Верно!');
} else{
    alert('Не знаете? ECMAScript!');
}
*/
// Задача №6
console.log('--- №6 ---')

let a = 2, b = 1;
let result = (a + b < 4) ? 'Мало' : 'Много';


let login = 'Директор';
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

// Задача №7
console.log('--- №7 ---')

let age = 50; 

if(age >= 14 && age <= 90) {
    console.log('Число в нужном диапазоне!')
} else {
    console.log('Число не соответствует заданию!')
}

// Задача №8
console.log('--- №8 ---')

let age2 = 50; 

if(!(age >= 14 && age <= 90)){
//if(age2 < 14 || age2 > 90) {
    console.log('Число в нужном диапазоне!')
} else {
    console.log('Число не соответствует заданию!')
}

// Задача №9
console.log('--- №9 ---')

// let userName = prompt('Кто там?', '');

// if(userName == 'Админ') {
//     let yourPassword = prompt('Пароль?', '');

//     if (yourPassword == 'Я главный') {
//         alert('Здравствуйте!');
//     } else if(yourPassword == null) {
//         alert('Отменено'); 
//     } else {
//         alert('Неверный пароль');
//     }

//     } else if(userName == null || userName == '') {
//         alert('Отменено'); 
//     } else {
//         alert('Я вас не знаю');
//     }

// Задача №10
console.log('--- №10 ---')
//При помощи цикла for выведите чётные числа от 2 до 10.
for(let i = 0; i <= 10; i++){
    if(i % 2 == 0) {
        console.log(i);
    }
}
// Задача №11
console.log('--- №11 ---')
// заменить for на while
    // for (let i = 0; i < 3; i++) {
    //   console.log( `number ${i}!` );
    // }
    let g = 0;
    while (g < 3) {
      console.log(`number ${g}!`);
      g++;
    }

// Задача №12
console.log('--- №12 ---')

//     Напишите цикл, который предлагает prompt ввести число, большее 100. 
//     Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

    // Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
    // либо не нажмёт кнопку Отмена (ESC).

    // Предполагается, что посетитель вводит только числа. 
    // Предусматривать обработку нечисловых строк в этой задаче необязательно.

    // let num;
    // do {
    // num = prompt("Введите число, большее 100?", 0);
    // } while (num <= 100 && num);

// Задача №13 ВООБЩЕ НЕ ПОНЯТНО! НУЖНО РАЗОБРАТЬ
console.log('--- №13 ---')

    let n = 10;

    nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...
        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        }
    console.log( i ); // простое число
    } // 

// Задача №14
console.log('--- №14 ---')

    // const number = +prompt('Введите число между 0 и 3', '');

    // switch (number) {
    // case 0:
    //     alert('Вы ввели число 0');
    // break;
    // case 1:
    //     alert('Вы ввели число 1');
    // break;
    // case 2:
    // case 3:
    //     alert('Вы ввели число 2, а может и 3');
    // break;
    // default:
    //     alert('Странный результат, очень странный');
    // }

// Задача №15
console.log('--- №15 ---')
    // function checkAge(age) {
    //     if (age > 18) {
    //     return true;
    //     } else {
    //     return confirm('Родители разрешили?');
    //     }
    // }  - Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
        // Сделайте два варианта функции checkAge: Используя оператор ? и ||

    function checkAge1(age) {
        return (age > 18) ? true : confirm('Родители разрешили?');
    }

    function checkAge2(age) {
        return (age > 18) || confirm('Родители разрешили?');
    }

// Задача №15
console.log('--- №15 ---')

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
    if(a > b){
        return console.log(b);
    } else {
        return console.log(a);
    }
}
min(2, 5);

// Вариант решения с оператором ?:
//     function min(a, b) {
//     return a < b ? a : b;
//     }

// Задача №16
console.log('--- №16 ---')

function pow(x, n) {
 return console.log(x**n)
}

//let test2 = pow(3, 3);
const x = prompt('Введите число x', '');
const nm = prompt('Введите число n', '');

let test3 = pow(x, nm);