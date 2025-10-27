// Regular function
function sayHello() {
    return "Hello, world!";
}

const sayHelloArrow = () => "Hello, world!";

// Regular function
function double(x) {
    return x * 2;
}

const doubleArrow = x => x * 2;


// Regular function
function add(x, y) {
    return x + y;
}
const addArrow = (x, y) => x + y;

// Regular function
const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};

const personArrow = {
    name: "Alice",
    sayHi: () => "Hi, " + this.name + "!" // 'this' will not work as expected here
};

const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach(function(num) {
  doubled.push(num * 2);
});

const numbers = [1, 2, 3, 4, 5];
const doubled = [];

numbers.forEach(num =>  doubled.push(num * 2)});

// function declaration
function square(x) {
  return x * x;
}

// function expression
const square = function(x) {
  return x * x;
};

// 1.
function cube(x) {
  return x * x * x;
}

// 2.
function fullName(first, last) {
  return first + " " + last;
}

// 3.
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
function sumCubes(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

console.log(message);

var message = 'Hi there!';


console.log(showMessage());

const showMessage = function(){
  return 'Hi there!';
};

// 1.
for(let i = 0; i < values.length; i++){
  console.log(values[i]);
}

let values = [10, 20, 30];

// 2.
console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

let lastLogin = '1/1/1970';


