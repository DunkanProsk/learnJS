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
const typeSevenOne = document.querySelector('#type__seven-one');
const typeSevenTwo = document.querySelector('#type__seven-two');
const typeEightOne = document.querySelector('#type__eight-one');
const typeEightTwo = document.querySelector('#type__eight-two');
const typeNineOne = document.querySelector('#type__nine-one');
const typeNineTwo = document.querySelector('#type__nine-two');
const typeTenOne = document.querySelector('#type__ten-one');
const typeTenTwo = document.querySelector('#type__ten-two');
const typeElevanOne = document.querySelector('#type__elevan-one');
const typeElevanTwo = document.querySelector('#type__elevan-two');
const typeElevanThree = document.querySelector('#type__elevan-three');
const typeTwelveOne = document.querySelector('#type__twelve-one');

const funOneOne = document.querySelector('#fun__one-one');
const funOneTwo = document.querySelector('#fun__one-two');
const funThreeFour = document.querySelector('#fun__three-four');
const funThreeFive = document.querySelector('#fun__three-five');
const funThreeSix = document.querySelector('#fun__three-six');
const funSixTwo = document.querySelector('#fun__six-two');
const funEightOne = document.querySelector('#fun__eight-one');
const funNineOne = document.querySelector('#fun__nine-one');

const protOneTwo = document.querySelector('#prot__one-two');

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
    function uniq(arr) {
        let arrSort = [];

        for (let str of arr) {
            if(!arrSort.includes(str)){
                arrSort.push(str);
            }
        }

        console.log(arrSort);
    };

    let arr = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"];
    
    uniq(arr);
});

typeSevenOne.addEventListener('click', (e) => {
    let values = [
        "Hare", "Krishna", "Hare", "Krishna", "Krishna",
        "Krishna", "Hare", "Hare", ":-O", ":-O", ":-O",
    ];

    function unique(arr) {
        let set = new Set();

        values.forEach(element => set.add(element));

        console.log(set);
    };

    unique(values);
});

typeSevenTwo.addEventListener('click', (e) => {
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    let sort = (arr) => {
        let set = new Set();
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            let str = arr[i].toLowerCase().split('').sort().join("");

            if(!set.has(str)) {
                newArr.push(arr[i]);
                set.add(str);
            };
        };

        console.log(newArr);
    };

    sort(arr);
});

typeEightOne.addEventListener('click', (e) => {
    alert('Задача находиться в разработке('); //еще не решил, вернусь к ней позже.
});

typeEightTwo.addEventListener('click', (e) => {
    alert('Задача находиться в разработке('); //еще не решил, вернусь к ней позже.
});

typeNineOne.addEventListener('click', (e) => {
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250,
      };

    let sumSalaries = (salaries) => {
        let sum = 0;

        for(let value of Object.values(salaries)) {
            sum += value; 
        }

        console.log(sum);
    };

    sumSalaries(salaries);

});

typeNineTwo.addEventListener('click', (e) => {
    let user = {
        name: 'John',
        age: 30,
    };
      
    let count = (user) => {
        return Object.keys(user).length;
    };

    alert(count(user));
});

typeTenOne.addEventListener('click', (e) => {
    let user = {
        name: "John",
        years: 30
    };

    let {
        name,
        years: age,
        isAdmin = false,
    } = user;

    alert(name);
    alert(age);
    alert(isAdmin);
});

typeTenTwo.addEventListener('click', (e) => {
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    let topSalary = (salaries) => {
        let maxNum = 0;
        let maxName = null;
      
        for(let [name, salary] of Object.entries(salaries)) {
          if (maxNum < salary) {
            maxNum = salary;
            maxName = name;
          }
        }
      
        alert(maxName);
    };

    topSalary(salaries);
});

typeElevanOne.addEventListener('click', (e) => {
   alert(new Date(2012, 1, 20, 3, 12));
});

typeElevanTwo.addEventListener('click', (e) => {
    let getWeekDay = (date) => {
        switch (date.getDay()) {
            case 0:
                return "ВС"
            case 1:
                return "ПН"
            case 2:
                return "ВТ"
            case 3:
                return "СР"
            case 4:
                return "ЧТ"
            case 5:
                return "ПТ"
            case 6:
                return "СБ"
        };
    };

    alert( getWeekDay(new Date(2012, 0, 3)) );
 });

typeElevanThree.addEventListener('click', (e) => {
    let date = new Date(2012, 0, 3);
    
    let getLocalDay = (date) => {
        if(date == 0) date = 7; 
        alert(date);
    };

    getLocalDay(date.getDay());
});

typeTwelveOne.addEventListener('click', (e) => {
    let user = {
        name: "Василий Иванович",
        age: 35
    };

    let userJson = JSON.stringify(user, null, ' ');

    alert(userJson);
});

//----------------------------------------------------------------Продвинутая работа с функциями--------------------------------------//

funOneOne.addEventListener('click', (e) => {
    let num = prompt('Введите число');


    // let sumNum = (num) => {             //Вариант с циклом
    //     let sum = 0;

    //     for(let i = 1; i <= num; i++) {
    //         sum += i;    
    //     }

    //     alert(sum);
    // };


    // let sumNum = (num) => {            //Вариант с рекурсией
    //     let sum = 0;
    //     let i = 1;

    //     let getSum = () => {
    //         if(i <= num) {
    //             sum += i;
    //             i++;
    //             getSum();
    //         } else {
    //             alert (sum);
    //         };
    //     };

    //     getSum();
    // };


    let sumNum = (num) => {                 //Вариант с формулой
        alert(num * (++num / 2));
    };

    sumNum(num);
});

funOneTwo.addEventListener('click', (e) => {
    let num = prompt('Введите натуральное число');
    let i = 1;
    let fucNum = num;

    let fuctorial = () => {
        if(i < num) {
            fucNum *= num - i;
            ++i;
            fuctorial();
        } else {
            alert(fucNum);
        };
    };

    fuctorial(num);
});

funThreeFour.addEventListener('click', (e) => {
    let a = 5;
    let b = 5;

    function sum(a) {
        return function(b) {
          alert(a + b);
        };
    };
      
    sum(a)(b);
});

funThreeFive.addEventListener('click', (e) => {
    let inBetween = (a, b) => {
        return function (item) {
            if(item >= a && item <= b) return true;
        };
    };

    let inArray = (array) => {
        return function (item) {
            for(let i = 0; i < array.length; i++) {
                if(item == array[i]) return true;
            };
        };
    };
    
    let arr = [1, 2, 3, 4, 5, 6, 7];

    alert(arr.filter(inBetween(3, 6)));
    alert(arr.filter(inArray([1, 2, 8, 3, 10])));
});

funThreeSix.addEventListener('click', (e) => {
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];

    let byField = (value) => {
        if(value == 'name') {
            return (a, b) => a.name > b.name ? 1 : -1;
        } else {
            return (a, b) => a.age > b.age ? 1 : -1;
        }
    };

    users.sort(byField('name'));
    users.forEach(user => console.log(user.name));

    console.log('------------------------------');

    users.sort(byField('age'));
    users.forEach(user => console.log(user.name));    
});

//-----------------Задачи не до конца передают суть замыкания, не уверен, что я полностью его понял.

funSixTwo.addEventListener('click', (e) => {
    function sum(a) {

        let sum = a;
      
        function f(b) {
          sum += b;
          return f;
        }
      
        f.toString = function() {
          return sum;
        };
      
        return f;
    }
      
    alert( sum(1)(2) );
    alert( sum(5)(-1)(2) );
    alert( sum(6)(-1)(-2)(-3) );
    alert( sum(0)(1)(2)(3)(4)(5) );
});

funEightOne.addEventListener('click', (e) => {
    let a = prompt('Первое число');
    let b = prompt('Второе число');
    
    // let printNumbers = (from, to) => {                                     // Используя setInterval.
    //     let time = () => {
    //         (from <= to) ? console.log(from++) : clearInterval();
    //     };

    //     setInterval(time, 1000);
    // };

    let timer = setTimeout(function tick() {                                  // Используя рекурсивный setTimeout.
        if(a <= b) {
            console.log(a++);
            setTimeout(tick, 1000);
        };
    }, 1000);
});

funNineOne.addEventListener('click', (e) => {
    function work(a, b) {
        alert( a + b );
    };

    function spy(func) {

        function wrapper(...args) {
          wrapper.calls.push(args);
          return func.apply(this, arguments);
        }
      
        wrapper.calls = [];
      
        return wrapper;
    };
      
    work = spy(work);

    work(1, 2);
    work(4, 5);
    
    for (let args of work.calls) {
        alert( 'call:' + args.join() );
    };
});

//----------------------------------------------------------------Прототипы, наследование----------------------------------------------//

protOneTwo.addEventListener('click', (e) => {
    let head = {
        glasses: 1,
    };
      
    let table = {
        pen: 3,
        __proto__: head,
    };
    
    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table,
    };
    
    let pockets = {
        money: 2000,
        __proto__: bed,
    };

    console.log(pockets.pen);
    console.log(bed.glasses);
});