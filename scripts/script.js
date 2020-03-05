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