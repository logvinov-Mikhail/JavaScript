//ООП - объектно-ориентированные приложения
//4 КИТА
// 1. Абстракция — рассмотрения объекта реального мира в контексте
// конкретной задачи.
// 2. Инкапсуляция — сокрытие внутренней реализации.
// 3. Наследование — передача характеристик одних объектов другим через
// отношение «является» (кот является животным).
// 4. Полиморфизм — возможность работать с конкретной структорой
// данных, будто с абстрактной.

console.log('test 2.3');
// class !!!
class BMW {
}

const bmw1 = new BMW();
const bmw2 = new BMW();
console.log(bmw2);
//Конструкция new всегда возвращает объект.
// Пример 
const obj = {};
obj.title = 'Я - обычный объект!';
obj.showTitle = function() {
console.log(this.title);
}
class SuperObject {
}
const superObj = new SuperObject();
// аналогично
superObj.title = 'Супер';
superObj.showTitle = function() {
console.log(this.title);
}
console.log(superObj);

//КОНСТРУКТОР КЛАССА
class Book {
  constructor(name) {
    console.log(`Вы хотите создать книгу с названием «${name}»`);
  }
}
const book = new Book('Понедельник начинается в субботу');

// Было бы здорово сохранить получаемое значение в свойство экземпляра…
// Эту проблему решает старый знакомый this   
// Пример
class Book1 {
    constructor(name) {
        this.name = name;
    }
}
const book1 = new Book1('Понедельник начинается в субботу');
console.log(book1.name); // 'Понедельник начинается в субботу'
// Пример 2
class Person {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        }
}
const phonebook = [
    new Person('Владислав', 'Иванов', '+74993412233'),
    new Person('Леонида', 'Петрова','+74993412232'),
];
console.log(phonebook);    
// МАГИЯ КОНСТРУКТОРА
// Благодаря this и конструктору, мы имеем возможность добавлять
// шаблонные свойства, делая код более лаконичным. 
class Male {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.gender = 'male';
        this.type = 'human';
    }
}
const oleg = new Male('Олег', 'Иванов');
const ivan = new Male('Иван', 'Широков');
const nikita = new Male('Никита', 'Огурцов');
console.log(oleg);

// МЕТОДЫ
// Пример 
class Sportsman {
    constructor() {
        this.scores = [];
    }
    getAverageScore() {
        if (this.scores.length === 0) {
        return 0;
        }
        let sum = 0;
        // сумма оценок, делённая на их количество
        for (let rating of this.scores) {
            sum += rating;
        }
        return sum / this.scores.length;
    }

    // добавляет новую оценку
    rate(rating) {
        this.scores.push(rating)
    }
}
const olga = new Sportsman();
olga.rate(10);
olga.rate(8);
console.log(olga.getAverageScore()); // 9

// ВЫЧИСЛЯЕМЫЕ МЕТОДЫ
// Благодаря ES6, у нас есть возможность задания методов класса, которые
// заранее ещё неизвестны:

const mySuperMethodName = 'getTrackName';
class MetallicaAlbum {
    [mySuperMethodName]() {
    return 'Enter Sandman';
}
}
const album = new MetallicaAlbum();
console.log(album.getTrackName()); // 'Enter Sandman'

// ГЕТТЕРЫ И СЕТТЕРЫ ОБЪЕКТОВ
// У методов объектов есть возможность «косить» под свойства. Это
// позволяет «перехватывать» на ходу «мысли» программы. Например,
// данный код мимоходом устанавливает возраст человека, зная его дату
// рождения:

// ПРИМЕР 

const person = {
    name: 'Владимир',
    set birthYear(year) {  //это сеттер, пробел после set необходим! единственный аргумент сеттера — значение, 
        //записываемое в него
    const date = new Date();
    this.age = date.getFullYear() - year;
    /*
    ничего не значит и не вносит сакральности
    Мы просто хотим сохранить сеттер
    */
    this._birthYear = year;
    },
    // у геттера нет аргументов
    get birthYear() {
    return this._birthYear;     //В данном случае мы использовали новое свойство _birthYear
                                //объекта. Нижнее подчёркивание слева от названия ничего не значит,
                                //просто упрощает чтение и поиск.
    
    }
    }
    // вызываем метод, а обращаемся к свойству!
    person.birthYear = 1980; // сработал сеттер
    console.log(typeof person.age); 'number'
    console.log(person.birthYear); // 1980, сработал геттер

//     ГЕТТЕРЫ И СЕТТЕРЫ КЛАССОВ
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

// НАСЛЕДОВАНИЕ
// Один из базовых принципов ООП: наследование.
// Давайте представим, что есть Николай Петрович:
        // class Human {
        //     constructor(name) {
        //         this.name = name;
        //     }
        // }
        // const human = new Human('Николай Петрович');
// Николай Петрович — мужчина.
// Очевидно, что все мужчины люди и у всех есть имя. Можно ли как-то
// совместить эти два класса выше?
        // class Man {
        //     constructor() {
        //         this.gender = 'male';
        //     }
        // }
// Можно! С помощью ключевого слова extends :
class Human {
    constructor(name) {
        this.name = name;
    }
}
class Man extends Human {
}
const human = new Man('Николай Петрович');
console.log(human.name); // 'Николай Петрович'
console.log(human.gender); // undefined
// Когда мы используем extends , мы говорим о том, что класс Man
// является наследником класса Human.

// Замечательно, но мы потеряли сведения о поле! Это произошло из-за того,
// что в конструкторе Human просто не указана информация о свойстве
// gender .
        // Вернём конструктор Man :
        // class Man extends Human {
        //     constructor() {
        //         this.gender = 'male';
        //     }
        // }
        // А теперь мы потеряли имя! Это произошло из-за того, что при создании
        // экземпляра вызвался конструктор от Man , в котором нет информации об
        // имени. Как же совместить всё воедино?

//super
//Для удобного вызова класса-родителя у нас есть конструкция super :
class Human2 {
    constructor(name) {
        this.name = name;
    }
}
class Man2 extends Human2 {
    constructor(name) {
    // вызываем родительский конструктор (Human)
    super(name)
    this.gender = 'male';
    }
}
const human2 = new Man2('Николай Петрович');
console.log(human2.gender); // 'male'
console.log(human2.name); // 'Николай Петрович', ура!
    // super ДО this
    // Мы обязаны пользоваться конструкцией super до первого обращения к
    // this , иначе нас ждёт ошибка:

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
//ПРИМЕР
// форма на сайте
class SiteForm {
}
// форма обратной связи
class CallbackForm extends SiteForm {
    onSend() {
    console.log('Спасибо за заявку! Мы свяжемся с вами в ближайшее время');
    }
}
const form = new SiteForm();
const callbackForm = new CallbackForm();
console.log(typeof form.onSend); // undefined
console.log(typeof callbackForm.onSend); // function

//ПОЛИМОРФИЗМ
// Второй принцип, который есть в ООП — полиморфизм. Собака и улитка
// передвигаются, но каждый делает это по-разному. Так и объекты могут
// иметь одни и те же методы, но реализация этих методов может отличаться.
//ПРИМЕР 
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

console.log('');
console.log('Домашка');
console.log('');
/*
// Задача №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){ 
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
       this.state *= 1.5;
    }

    set state(status) {
        if (status < 0 ){
            this._state = 0;
        } else if (status >= 100){
            this._state = 100;
        } else {
            this._state = status;
        }
    }

    get state() {
        return this._state;
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
//sherlock.state = 50;
//console.log(sherlock.releaseDate); //2019
//console.log(sherlock.state); //100
//sherlock.fix();
//console.log(sherlock.state); //100

class Magazine extends PrintEditionItem{
    type = "magazine";
    
}
    
const magaz = new Magazine("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
//console.log(magaz.type);

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author;
    this.type = "book";
    }
}

const book = new Book("А. Сапковский","Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
//console.log(book.author);
//console.log(book.type);
//console.log(book);


class NovelBook extends Book {
    type = "novel";
}
const novelBook = new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138); 
//console.log(novelBook.type);

class FantasticBook extends Book {
    type = "fantastic";
}
const fantasticBook = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
//console.log(fantasticBook.author);
//console.log(fantasticBook.type);
//console.log(fantasticBook);

class DetectiveBook extends Book {
    type = "detective"; 
}
const detectiveBook = new DetectiveBook("А. Сапковский","Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
//console.log(detectiveBook.type);
//console.log(detectiveBook.author);

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15


// Задача №2
console.log(' ');
console.log('Задача №2');
console.log(' ');

class Library { 
    constructor(name){ 
        this.name = name;
        this.books = [];
    }

    addBook(book) {  
        if (book.state > 30) {  
            this.books.push(book);
            
        }
    }

    findBookBy(type, value) {

        for (let search of this.books) {
            if (search[type] == value) {
                return search;
            }    
        }
        return null    
    }

    giveBookByName(bookName) {

        let founded = null;

        this.books.forEach(function(element, i, array) {
            if(element.name == bookName) {
                founded = element;
                array.splice([i], 1); 
            } 
        });
        return console.log(founded);
    }
}

const library = new Library("Библиотека имени Ленина");
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.books);

console.log(library.findBookBy("name", "Мурзилка"))
console.log(library.findBookBy("name", "Властелин колец")); //null

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


//Задача №3 

class StudentLog {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name; 
    }
                // Создайте метод addGrade(grade, subject), который будет вносить оценку по соответствующему предмету. При этом grade — оценка, subject — предмет. Условия работы метода:
                // Метод возвращает количество поставленных оценок по данному предмету.
                // Оценка ставится числом в пределах от 1 до 5.
                // При неверной оценке дополнительно выдаётся сообщение с ошибкой, оценка в журнал не заносится. Текущее количество оценок все равно требуется вернуть.
                // const log = new StudentLog('Олег Никифоров');

                // console.log(log.addGrade(3, 'algebra'));
                // // 1
    addGrade(grade, subject) {
        this.subject = subject;
        this.grade = [];
        this.grade.push(grade);
        // if (this.grade > 0 && this.grade <= 5) { 
        //     this.grade.push(grade);
        // } else {
        //     return console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
        // }

    }

}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName());

console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade(5, 'algebra'));
console.log(log.addGrade(5, 'maz'));
console.log(log);

*/