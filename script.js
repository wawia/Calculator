const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const plus = document.querySelector('.plus');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const minus = document.querySelector('.minus');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const muplt = document.querySelector('.muplt');
const zero = document.querySelector('.zero');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const devide = document.querySelector('.devide');

const history = document.querySelector('.history');
const current = document.querySelector('.current');


let currentNumber = '';
let operator = '';
let firstNumber = 0
let SecondNumber = 0

const callButton = (button) =>{
    
    const numbers = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0
    };
    button.addEventListener('click', ()=>{
        currentNumber = currentNumber + numbers[button.className];
        current.textContent = currentNumber;
    });
};

callButton(one);
callButton(two);
callButton(three);
callButton(four);
callButton(five);
callButton(six);
callButton(seven);
callButton(eight);
callButton(nine);
callButton(zero);

clear.addEventListener('click', ()=>{
    currentNumber = '';
    history.textContent = '';
    current.textContent = '';
    firstNumber = 0;
    SecondNumber = 0;
    operator = '';
});

const operatorConverter = {
    plus: '+',
    minus: '-',
    muplt: '*',
    devide: '/'
}

const executeOperation = (func) =>{
    func.addEventListener('click', ()=>{
        operator = '';
        operator = operatorConverter[func.className];
        SecondNumber = parseInt(currentNumber);
    
        history.textContent = `${current.textContent}${operatorConverter[func.className]}`;
        current.textContent = '';
        currentNumber = '';
    
    });
};

executeOperation(plus);
executeOperation(minus);
executeOperation(muplt);
executeOperation(devide);

equal.addEventListener('click', ()=>{
    if(operator == '+'){
        firstNumber = parseInt(currentNumber);
        SecondNumber = SecondNumber + firstNumber;
    
        history.textContent = '';
        current.textContent = SecondNumber;
        currentNumber = ''
        currentNumber = currentNumber + SecondNumber;

    } else if(operator == '-') {
        firstNumber = parseInt(currentNumber);
        SecondNumber = SecondNumber - firstNumber;
    
        history.textContent = '';
        current.textContent = SecondNumber;
        currentNumber = ''
        currentNumber = currentNumber + SecondNumber;

    } else if(operator == '*') {
        firstNumber = parseInt(currentNumber);
        SecondNumber = SecondNumber * firstNumber;
    
        history.textContent = '';
        current.textContent = SecondNumber;
        currentNumber = ''
        currentNumber = currentNumber + SecondNumber;

    } else {
        firstNumber = parseInt(currentNumber);

        SecondNumber = SecondNumber / firstNumber;

        history.textContent = '';
        current.textContent = SecondNumber;
        currentNumber = ''
        currentNumber = currentNumber + SecondNumber;
    }
});