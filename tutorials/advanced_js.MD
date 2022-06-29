# Class

- Class is a blueprint or template of an object.
- Objects are the instances of a class.
- Class can contain the fields and methods.

```
class Student {
    constructor(rollNo) {
        this.roll = rollNo;
    }

    // Class Method with regular function syntax
    getMarks() {
        console.log(this);
        console.log("Marks = 90");
    };

    // Method with arrow function syntax
    getMarks = () => {
        console.log(this);
        console.log("Marks = 90");
    }

    // We'll see the difference between regular and arrow function in the next section
}

// Create object of class
const ram = new Student(2);
console.log(ram);
```

Note: The constructor function is called automatically when the object is initialized.

# Arrow (Fat Arrow) Functions

- Shorthand notation for the regular functions

Example : <br />

#### Regular function

```
function sum(x,y) {
    return x+y;
}
```

#### Arrow function equivalent

```
const sum = (x,y) => x+y;
```

- It reduces code size.
- The return statement is optional for a single line function.
- Functional braces are optional for a single-line statement.
- Lexically bind the context.

What about **this**?

- In regular functions the this keyword represented the object that called the function. this keyword is bound to different values based on the context in which it is called.
- With arrow functions, the this keyword always represents the object that defined the arrow function.
- In short, with arrow functions there is no binding of this.

You can see the difference between regular function method and arrow function method by running this code.

```
document.getElementById("clickBtn").addEventListener("click", ram.getMarks);
window.addEventListener("load", ram.getMarks);
```

# Template Literals

- Template Literals use back-ticks (``) rather than the quotes ("") to define a string.

```
const firstName = "John";
const lastName = "Doe";

const greetUser = `Welcome ${firstName}, ${lastName}!`;
console.log(greetUser); //Welcome John, Doe!
```

# Array Methods

[![Array Methods](https://i.redd.it/t2f5w9bms1271.jpg)](https://i.redd.it/t2f5w9bms1271.jpg)

## Array.map()

- run a function on each item in the array
- return a new array as the result.

Example : Convert all strings to uppercase

```
const strings = ['apple', 'banana', 'orange'];
const upperStrings = strings.map((value) => value.toUpperCase());
console.log(upperStrings);
```

## Array.filter()

- The filter() method creates a new array with the elements that pass a condition.

```
const ages = [10, 18, 20, 22, 5];
const eligibleVotingAges = ages.filter((age) => age > 18);
console.log(eligibleVotingAges);
```

## Array.reduce()

- returns a single accumulated value.

Syntax:

```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

Example: Subtract all numbers in an array

```
const numbers = [5, -5, 2, 3];
const sum = numbers.reduce((acc, num) => {
  return acc - num;
}, 0);
console.log(sum);
```

# Destucturing

- Destructuring makes it easy to extract only what is needed.

## Array Destructuring

Example :

```
const foods = ["apple", "mango", "chicken", "cake", "ice cream", "pancakes"];
const apple = foods[0];
const chicken = foods[2];
const iceCream = foods[4];

// With array destructruing
const [apple, , chicken, , iceCream, , ,] = foods;

console.log(apple);
console.log(chicken);
console.log(iceCream);
```

- When destructuring arrays, the order that variables are declared is important.

## Object Destructring

Example :

```
const laptop = {
  id: 1,
  name: "Dell G3",
  specification: {
    brand: "Dell",
    model: "G3",
    color: "Black",
    RAM: "8GB",
  },
};

const {name, id, specification: { RAM }} = laptop;
console.log(name);
console.log(id);
console.log(RAM);
```

- The object properties do not have to be declared in a specific order.

# Spread and Rest Operator (...)

- allows us to quickly copy all or part of an existing array or object into another array or object.

```
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);
```

Example : Destructuring + Spread

```
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

console.log(one); //One
console.log(two); //Two
console.log(rest); // [3,4,5,6]
```

### Copying Array into New array

```
const arr = [1,2,3,4];
const newArr = arr;
console.log(arr); // [1,2,3,4]

console.log(newArr == arr); //true; points to the same memory location
newArr[0] = 0;
console.log(arr); // [0,2,3,4]
```

```
const arr = [1,2,3,4];
const newArr = [...arr];
console.log(arr); // [1,2,3,4]

console.log(newArr == arr); //false; points to the new memory location
newArr[0] = 0;
console.log(arr); // [1,2,3,4]
console.log(newArr); // [0,2,3,4]
```
