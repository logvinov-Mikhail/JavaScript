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

let officialName_JS = prompt('Какое «официальное» название JavaScript?', 'ответ');

if(officialName_JS == ECMAScript) {
    alert('Верно!');
} else{
    alert('Не знаете?\n ECMAScript!')
}

// Задача №6

let result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

//   Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

//   «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// Задача №7

let age = 50; 

if(ege >= 14 && age <= 90) {
    console.log('Число в нужном диапазоне!')
} else {
    console.log('Число не соответствует заданию!')
}