'use strict'

const one = document.querySelector('#one');
const four = document.querySelector('#four');
const nine = document.querySelector('#nine');
const tenTwo = document.querySelector('#ten-two');
const tenThree = document.querySelector('#ten-three');
const elevanSix = document.querySelector('#elevan-six');
const elevanEight = document.querySelector('#elevan-eight');
const twelveFour = document.querySelector('#twelve-four');
const twelveFive = document.querySelector('#twelve-five');
const twelveSix = document.querySelector('#twelve-six');
const twelveSeven = document.querySelector('#twelve-seven');
const twelveEight = document.querySelector('#twelve-eight');
const thirteenTwo = document.querySelector('#thirteen-two');
const fourteenTwo = document.querySelector('#fourteen-two');
const fourteenThree = document.querySelector('#fourteen-three');
const fourteenFour = document.querySelector('#fourteen-four');
const sixteen = document.querySelector('#sixteen');

const objOneOne = document.querySelector('#obj__one-one');
const objOneTwo = document.querySelector('#obj__one-two');
const objOneFour = document.querySelector('#obj__one-four');
const objOneFive = document.querySelector('#obj__one-five');
const objFourFour = document.querySelector('#obj__four-four');
const objFourFive = document.querySelector('#obj__four-five');
const objSixTwo = document.querySelector('#obj__six-two');
const objSixThree = document.querySelector('#obj__six-three');

const typeTwoOne = document.querySelector('#type__two-one');
const typeTwoThree = document.querySelector('#type__two-three');
const typeThreeOne = document.querySelector('#type__three-one');
const typeThreeTwo = document.querySelector('#type__three-two');
const typeThreeThree = document.querySelector('#type__three-three');
const typeThreeFour = document.querySelector('#type__three-four');
const typeFourTwo = document.querySelector('#type__four-two');
const typeFourFour = document.querySelector('#type__four-four');
const typeFiveOne = document.querySelector('#type__five-one');
const typeFiveTwo = document.querySelector('#type__five-two');
const typeFiveThree = document.querySelector('#type__five-three');
const typeFiveFour = document.querySelector('#type__five-four');
const typeFiveFive = document.querySelector('#type__five-five');
const typeFiveSix = document.querySelector('#type__five-six');
const typeFiveSeven = document.querySelector('#type__five-seven');
const typeFiveEight = document.querySelector('#type__five-eight');
const typeFiveNine = document.querySelector('#type__five-nine');
const typeFiveTen = document.querySelector('#type__five-ten');
const typeFiveElevan = document.querySelector('#type__five-elevan');
const typeFiveTwelve = document.querySelector('#type__five-twelve');

//----------------------------------------------------------------Основы JS----------------------------------------//

one.addEventListener('click', (e) => {
    alert('I am JavaScript!');
});

four.addEventListener('click', (e) => {
    let name = 'Джон';
    let admin = name;
    
    alert(admin);
});

nine.addEventListener('click', (e) => {
    let name = prompt('Введите имя');
    
    alert(name);
});

tenTwo.addEventListener('click', (e) => {
    let value = prompt('Какой официальное название JS?');
    
    if(value == 'ECMAScript') {
        alert("Верно!");
    } else {
        alert("Не знаете? ECMAScript!");
    }
});

tenThree.addEventListener('click', (e) => {
    let value = prompt('Введите число');

    if(value > 0) {
        alert('Больше нуля!');
    } else if(value < 0) {
        alert('Меньше нуля!');
    } else {
        alert('Ноль!');
    }
});

elevanSix.addEventListener('click', (e) => {
    let age = prompt('Введите возраст');

    if(age >= 14 && age <= 90) {
        alert('Подходит!');
    } else {
        alert('Не подходит!');
    };

    // if (age <= 14 || age >= 90) {  //-------------ДРУГОЙ ДИАПАЗОН
    //     alert('Подходит!');
    // } else {
    //     alert('Не подходит!');
    // };
    
});

elevanEight.addEventListener('click', (e) => {
    let login = prompt('Введите логин');

    if(login == 'Админ') {
        let password = prompt('Введите пароль');

        if(password == "Я главный") {
            alert('Здраствуйте!');
        } else if(password == null) {
            alert('Отменено!');
        } else {
            alert('Неверный пароль!');
        }
    } else if(login == null) {
        alert('Отменено!');
    } else {
        alert('Неверный логин!');
    };
    
});

twelveFour.addEventListener('click', (e) => {
    for(let i = 2; i <= 10; i++){
        if((i % 2) == 0) {
            console.log(i);
        }
    }

    alert('Смотри консоль');
});

twelveFive.addEventListener('click', (e) => {
    let i = 0;

    while(i < 3) {
        alert( `number ${i}!` );
        i++;
    }
});

twelveSix.addEventListener('click', (e) => {
    let i = 0;

    while(i < 3) {
        alert( `number ${i}!` );
        i++;
    }
});

twelveSeven.addEventListener('click', (e) => {
    let i = prompt('Введите число больше 100');

    while(i < 100 && i != null) {
        i = prompt('Введите число больше 100');
    }

    if(i == null) {
        alert('Отмена!');
    } else {
        alert('Отлично!');
    }
});

twelveEight.addEventListener('click', (e) => {
    let n = 10;
    
    top:
    for(let i = 2; i <= n; i++) {
        for(let j = 2; j < i; j++) {
            if(i % j == 0) continue top;
        }
        console.log(i);
    }

    alert('Смотри консоль');
});


thirteenTwo.addEventListener('click', (e) => {
    const number = +prompt('Введите число между 0 и 3', '');

    switch(number) {
        case 0:
            alert('Вы ввели число 0');
            break;
        case 1:
            alert('Вы ввели число 1');
            break;
        case 2:
        case 3:
            alert('Вы ввели число 2, а может и 3');
            break;
    }
});

fourteenTwo.addEventListener('click', (e) => {
    let age = prompt('Сколько лет?');

    let fun = (age) => {
        return (age > 18) ? alert('Отлично!') : confirm('Родители разрешили?');
        // return (age > 18) || confirm('Родители разрешили?'); //------------Второй вариант
    };

    fun(age);
});

fourteenThree.addEventListener('click', (e) => {
    let a = prompt('Введите первое число');
    let b = prompt('Введите второе число');

    let sum = (a, b) => {
        a > b ? alert(a) : alert(b);
    };

    sum(a, b);
});

fourteenFour.addEventListener('click', (e) => {
    let a = prompt('Введите число');
    let b = prompt('Введите степень');

    let pow = (a, b) => {
        let i = 1;
        let j = a;

        while(i < b) {
            j = j * a;
            i++;
        }
        
        alert(j);
    };

    if(a > 0) {
        b > 0 ? pow(a, b) : alert('Неправильный ввод!');
    } else {
        alert('Неправильный ввод!');
    }
});

sixteen.addEventListener('click', (e) => {
    let ask = () => {
        confirm("Вы согласны?") ? alert("Вы согласились") : alert("Вы отменили соглашение");
    }
        
    ask();
});

//----------------------------------------------------------------Объекты: основы----------------------------------------//

objOneOne.addEventListener('click', (e) => {
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;

    console.log(`let user = {};`);
    console.log(`user.name = "John";`);
    console.log(`user.surname = "Smith";`);
    console.log(`user.name = "Pete";`);
    console.log(`delete user.name;`);

    alert('Смотри консоль');
});


objOneTwo.addEventListener('click', (e) => {
    let user = {
        // name:'asd',
    };
    
    let isEmpty = (obj) => {
        for (let key in obj) {
            return console.log('Объект не пуст!');
        };

        return console.log('Объект пуст!');
    };

    isEmpty(user);    
});

objOneFour.addEventListener('click', (e) => {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
    }
    
    let sum = (obj) => {
        let sum = 0;
        
        for (let key in obj) {
            sum = sum + obj[key];
        };
        
        console.log(sum);
    };

    sum(salaries);    
});

objOneFive.addEventListener('click', (e) => {
    let menu = {
        width: 200,
        height: 300,
        title: "My menu",
    };
    
    let sumNum = (obj) => {
        let sum = 0;
        
        for (let key in obj) {
            if ((typeof(obj[key])) == "number") obj[key] = obj[key] * 2;
        };
        
        console.log(menu);
    };

    sumNum(menu);    
});

objFourFour.addEventListener('click', (e) => {
    let calculator = {
        a : 0,
        b : 0,
        read() {
            this.a = +prompt('Введите первое число');
            this.b = +prompt('Введите второе число');
        },
        sum() {
            console.log('сумма: ', this.a + this.b);
        },
        mul() {
            console.log('произведение: ', this.a * this.b);
        },
    };

    calculator.read();
    calculator.sum();
    calculator.mul();    
});

objFourFive.addEventListener('click', (e) => {
    let chekStep = {
        step: 0,
        up: function() {
          this.step++;
          return this;
        },
        down: function() {
          this.step--;
          return this;
        },
        showStep: function() {
          alert( this.step );
          return this;
        }
      }; 

    chekStep.up().up().down().showStep();
});

objSixTwo.addEventListener('click', (e) => {
    function Calculator() {
        this.a,
        this.b,

        this.read = function() {
            this.a = +prompt('Введите первое число');
            this.b = +prompt('Введите второе число');
        };

        this.sum = function() {
            console.log('сумма: ', this.a + this.b);
        };

        this.mul = function() {
            console.log('произведение: ', this.a * this.b);
        };
    };

    let calc = new Calculator();
    
    calc.read();
    calc.sum();
    calc.mul();
    console.log(calc);
});

objSixThree.addEventListener('click', (e) => {
    function Accumulator(startingValue) {
        this.value = startingValue,

        this.read = function() {
            this.value = this.value + (+prompt('Сколько прибавить?'));
        }
    };

    let acc = new Accumulator(1)

    acc.read();
    acc.read();
    acc.read();
    console.log(acc.value);

});

//----------------------------------------------------------------Типы данных----------------------------------------//

typeTwoOne.addEventListener('click', (e) => {
    let sum = () => {
        let a = +prompt('Введите первое число!');
        let b = +prompt('Введите второе число!');

        alert(a + b);
    };

    sum();
});

typeTwoThree.addEventListener('click', (e) => {
    let num = () => {
        let i = prompt('Введите число');
        
        if(!isNaN(i)) {
            if ((i !== null) && (i !== '')) {
                return alert(i);
            } else {
                return alert('Неправильный ввод');
            };
        };
        num();
    };
    num();
});

typeThreeOne.addEventListener('click', (e) => {
    let str = prompt('Введите слово с маленькой буквы!');
    
    let strUp = (str) => {
        alert(str[0].toUpperCase() + str.substring(1, str.length));
    }

    strUp(str);
});

typeThreeTwo.addEventListener('click', (e) => {
    let checkSpam = (str) => {
        (str.indexOf('xxx') != -1 || str.indexOf('viagra') != -1) ? alert('Есть СПАМ!') : alert('Все чисто!');
    };

    let str = prompt('Введите строку');

    checkSpam(str.toLowerCase());
});

typeThreeThree.addEventListener('click', (e) => {
    let str = prompt('Введите строку');
    let maxlength = prompt('Введите максимальную длину строки');
    
    function truncate(str, maxlength) {
        if(str.length > maxlength) {
            alert(str.slice(0, (--maxlength)) + "…");
        }
    }

    truncate(str, maxlength);
});

typeThreeFour.addEventListener('click', (e) => {
    let str = prompt('Введите строку c числом');
    
    function extractCurrencyValue(str) {
        let strNew = '';
        for(let i = 0; i < str.length; i++) {
            if(Number(str[i])) strNew += str[i];
        }
        alert(strNew);
    };
    extractCurrencyValue(str);
});

typeFourTwo.addEventListener('click', (e) => {
    let arr = ['Джаз', 'Блюз'];

    arr.push('Рок-н-ролл');

    arr[Math.ceil((arr.length / 2)-1)] = 'Классика';

    alert(arr.shift());

    arr.unshift("Рэп", "Регги");

    alert(arr);
});

typeFourFour.addEventListener('click', (e) => {
    let arr = [];
    let numNew = 0;

    function push() {
        let num = prompt('Введите число');

        if(num != null && num != '' && Number(num)){
            arr.push(num);
            push();
        } else {
            arr.forEach(function(item) {
                numNew += Number(item);
            });

            alert(numNew);
        };
    };
    
    push();
});

typeFiveOne.addEventListener('click', (e) => {
    let str = prompt('Введите строку с дефисами');
    let newStr = '';
    
    function camelize(str) {
        let arr = str.split('-');
        newStr += arr[0];
        
        for (let i = 1; i < arr.length; i++) {
            let strNew = arr[i].toLowerCase();
            newStr += strNew[0].toUpperCase() + strNew.substring(1, strNew.length);
        }

        alert(newStr);
    }

    camelize(str);
});

typeFiveTwo.addEventListener('click', (e) => {
    let arr = [5, 3, 8, 1, 11, 15, 30, 100, 32, 28];
    let a = 0, b = 30;

    function filterRange(arr, a, b) {
        let newArr = [];

        for (let i = 0; i <= arr.length; i++) {
            if(arr[i] >= a && arr[i] <= b) newArr.push(arr[i]);
        };

        console.log('Диапазон чисел от 0 до 30');
        console.log(arr);
        console.log(newArr);
    };

    filterRange(arr, a, b);
});

typeFiveThree.addEventListener('click', (e) => {
    let arr = [5, 3, 8, 1, 11, 15, 30, 100, 32, 28];
    let a = 0, b = 30;

    console.log('Диапазон чисел от 0 до 30');
    console.log(arr);

    function filterRangeInPlace(arr, a, b) {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] < a || arr[i] > b) {
                arr.splice(i, 1);
                i--;
            }
        }
        console.log(arr);
    };

    filterRangeInPlace(arr, a, b);
});

typeFiveFour.addEventListener('click', (e) => {
    let arr = [5, 2, 1, -10, 8];

    console.log(arr);

    function sortArr(arr) {
        arr = arr.sort(function(a, b){ 
            return a - b;
        });
        console.log(arr);
    };

    sortArr(arr);
});

typeFiveFive.addEventListener('click', (e) => {
    let arr = ["HTML", "JavaScript", "CSS"];

    function copySorted(arr) {
        let newArr = arr.slice(0);

        console.log(arr);
        console.log(newArr.sort());
    };

    copySorted(arr);
});

typeFiveSix.addEventListener('click', (e) => {
    let str = prompt('Введите вычисления через пробел');
    
    function Calculator() {
        this.opMethods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
            "**": (a, b) => a ** b,
        };

        this.calculate = (str) => {
            let arr = str.split(' ');

            let a = +arr[0];
            let b = +arr[2];
            let op = arr[1];
            
            alert(this.opMethods[op](a, b));
        };

        this.addMethod = (name, func) => {
            this.opMethods[name] = func;
        }
    };

    let calc = new Calculator();

    calc.calculate(str);
});

typeFiveSeven.addEventListener('click', (e) => {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];
    let namesArr = [];

    let names = () => {
        for (let i = 0; i < users.length; i++) {
            namesArr.push(users[i].name);
        }

        alert(namesArr);
    };

    names();
});

typeFiveEight.addEventListener('click', (e) => {
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };
    
    let users = [ vasya, petya, masha ];

    let names = () => {
        for (let i = 0; i < users.length; i++) {
            users[i].fullName = users[i].name + ' ' + users[i].surname;
            delete users[i].name;
            delete users[i].surname;
        };

        console.log(users);
    };

    names();
});

typeFiveNine.addEventListener('click', (e) => {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];

    function sortByAge(arr) {
        arr = arr.sort(function(a, b){
            return a.age-b.age
          })
        console.log(arr);
    };

    sortByAge(arr);
});

typeFiveNine.addEventListener('click', (e) => {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];

    function sortByAge(arr) {
        arr = arr.sort(function(a, b){
            return a.age-b.age
          })
        console.log(arr);
    };

    sortByAge(arr);
});

typeFiveTen.addEventListener('click', (e) => {
    let arr = [1, 2, 3];

    let shuffle = (arr) => { 
        arr = arr.sort((a, b) => Math.random() - 0.5);
        console.log(arr);
    };

    shuffle(arr);
});

typeFiveElevan.addEventListener('click', (e) => {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [ vasya, petya, masha ];
    let allAge = 0;

    let ages = () => {
        for (let i = 0; i < arr.length; i++) {
            allAge = allAge + arr[i].age;

            console.log(allAge);

            if (i == arr.length - 1) {
                alert(allAge/(i + 1));
            }
        };
    };

    ages();
});

typeFiveTwelve.addEventListener('click', (e) => {
    function contains(arr, elem) {
        return arr.find((i) => i === elem) != -1;
    };

    let arr = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"];
    
    
    
    
    function check(arr, val) {
        return arr.some(function(arrVal) {
          return val === arrVal;
        });
    };
});
