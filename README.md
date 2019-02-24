# javascript answers

### Explain and Reflect:

---

**Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.**

The are many big differences to Java and JavaScript, the primary being:

- Java is interpreted by java interpreter/JIT compiler after being compiled to bytecode by javac. JavaScript on the other hand is purely interpreted and is often executed in a browser or by Node.
- Java is statically and strongly typed language while JavaScript is dynamically and weakly typed language.
- Java is class based, where JavaScript is prototype based. However in ES6 syntax was introduced to mimic the class behaviour in JavaScript
- Java runs on multiple threads, where JavaScript initially runs on a single thread. However the event loop uses more than one thread for wep apis and there are certain technologies like clusters and web workers to use multiple threads in JavaScript

**Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers**

First let me explain what EcmaScript and TypeScript is:
EcmaScript is a standard that JavaSCript is build upon.
TypeScript is a superset of JavaScript, the primary differences being that TypeScript is statically typed, object-oriented and have interfaces. TypeScript is transpiled to JavaScript and it is primarely used for larger applications both serverside and clientside, however it can be used as a substitute for JavaScript at all times.  
 To use these technologies in either node or browsers, it is required that the engine supports the ecmascript version. This however can be worked around by using technologies like babel.

**Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.**

Node.js is a runtime environment for JavaScript, NPM is a package manager for Node. It makes sense to use it whenever you want to run JavaScript outside of a browser. It could be a server or an application.

**Explain about the Event Loop in Node.js**

The event loop in Node.js is managing the order of events in Node.js at runtime. Node.js event loop initiates its variables, declares functions and then simply waits for the event to occur. Events are non-blocking, that means when an event is being executed, it will be executed without being interrupted. Therefore thread-safe programming in Node.js is quite simple, since multithreading issues like a racecondition is not an issue in Node due to it's non-blocking nature. Below is an example of a watcher file that would be considered 'dangerous' if not Node.js non-blocking nature.

```js
let fs = require("fs");
let eventNum = 0;
fs.watch("file.txt", (event, filename) = {
  console.log("event: " + event + "filename: " + filename);
});
fs.watch("file2.txt", (event, filename) = {
  console.log("event: " + event + "filename: " + filename);
});

console.log("watcher started...");
```

**Explain (some) of the purposes with the tools Babel and WebPack, using examples from the exercises**

Babel is a transpiler, primarely used for transpiling JavaScript to older EcmaScript versions for unsupported browsers.
WebPack is a bundler for JavaScript, it can bundle together dependencies to a single file.

**Explain the purpose of “use strict” and Linters, exemplified with ESLint**

"use strict" is a feature to mimic a statcily typed language in JavaScript, to expand on this feature you can use EsLint is a customizable linter for JS

### Explain using sufficient code examples the following features in JavaScript.

**Variable/function-Hoisting**

```js
console.log(a);
var a = "I'm initialized";
```

the example above returns undefined, instead of an error. This is because of a behaviour called hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top. So the exampled above
is executed like this

```js
var a;
console.log(a);
a = "I'm initialized";
```

**this in JavaScript and how it differs from what we know from Java/.net.**

Below is the usage of a `this` keyword in Kotlin. Where `this` simply refers to the current object instantiation within the
scope where `this` is being used.

```kotlin
class A(val a: String, val b: String){
fun printProperties() {
        print("a: ${this.a}, b: ${this.b}");
    }
}
```

Below is the usage of `this` keyword in JavaScript. `this` in JavaScript is a bit more tricky. The object that `this` refers changes every time execution context is changed. Since person is the owner object,s this refers to the instantiation of person.

```js
var person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
```

- In a method, this refers to the owner object.
- Alone, this refers to the global object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), and apply() can refer this to any object.

**Function Closures and the JavaScript Module Pattern**

Global variables live as long as your application (your window / your web page) lives.  
Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.
The dilemma Function Closures solves, is when you want a functions to access a variable but only specific functions.
You can achieve this by encapsulating the variable in a self invoking function, assigning a variable by returning a object
with the functions or the single function using the variable.

```js
const count = (() = {
  let counter = 0;
  return {
    add: () = {
      counter += 1;
      return counter;
    },
    get: () = {
      return counter;
    }
  };
})();
```

**Immediately-Invoked Function Expressions (IIFE)**

An immediately-Inovked function expressions is exactly as the name suggests, a function that invokes itself on creation which acts
as an expression. the IIFE is considered an expression due to the parenthesis around the function. IIFE is a way to execute functions immediately, as soon as they are created.

```js
(function() {
  //logic
})();
```

**JavaScripts Prototype**

JavaScript is a prototype-based language, and not class based like java. The class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

```js
Date.prototype.getDate = () = {
  console.log("no more dates, mwahaha");
};
```

Prototypes

**User-defined Callback Functions (writing your own functions that take a callback)**

A User-definde callback is when you pass in a callback function to a function to be executed at some point inside of it.

```js
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```

**Explain the methods map, filter and reduce**

All of the functions are methods defined in the Array.prototype and do different operations on an array.

- The map function iterates through the array performing an operation each iteration and returns it to a new array

```js
let result = [1, 2, 3, 4, 5].map(c = {
  return (c += 2);
});

console.log(result); //returns [3,4,5,6,7]
```

- the filter method iterates through the array and returns all iterations that passes the condition in a callback

```js
let result = [1, 2, 3, 4, 5].filter(c = {
  return c < 3;
});

console.log(result); //returns [1,2]
```

- the reduce method takes a callback that iterates through the array, returning an accumulated result. The first parameter of the callback is called the accumulator, and this is the variable to build upon and will be the result of the reduce method()

```js
var result = [10, 10, 10].reduce(function(sum, currentValue) {
  return sum * currentValue;
}, 10);

console.log(result); // returns 10000
```

**Provide examples of user-defined reusable modules implemented in Node.js**

A user-defined module is a module to be exported for later use in a Node environment.

```js
exports.default = function getSquard(num) {
  return Math.pow(num, 2);
};
```

Above a function is exported for later use, and below it is imported in another file

```js
let getSquared = require("./file");

console.log(getSquared(3)); //= 9
```

### ES6,7,8... and TypeScript

Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

**Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.**
import and export is keywords used to handle modules in a JavaScript environment
export:

```js
function shout() {
  console.log("AAaarg!!");
}

function printWord(word) {
  console.log(word);
}

export { shout, printWord };
```

import:

```js
import * as imported from "./export";

imported.shout();
imported.printWord("What's up");
```

can run in node with `--experimental-modules my-app.mjs`
Or you can use the native node way, and use the module object to handle modules.
export:

```js
function shout() {
  console.log("AAaarg!!");
}

function printWord(word) {
  console.log(word);
}
```

import:

```js
module.exports = { shout, printWord };

let imported = require("./export");

imported.shout();
imported.printWord("What's up");
```

**Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.**

ES6 provided keywords like `class`, `constructor` and `super`, which are syntactic sugar to mimic object-based design.

```js
class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}
class Car extends Vehicle {
  constructor(name) {
    super(name, "car");
  }

  getName() {
    return "It is a car: " + super.getName();
  }
}
```

The equivelant pre ES6 using the prototype-based design

```js
function Vehicle (name, type) {
  this.name = name;
  this.type = type;
};

Vehicle.prototype.getName = function getName () {
  return this.name;
};

Vehicle.prototype.getType = function getType () {
  return this.type;
};
function Car (name) {
  Vehicle.call(this, name, ‘car’);
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.parent = Vehicle.prototype;
Car.prototype.getName = function () {
  return 'It is a car: '+ this.name;
};
```

**Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics**
Some benefits of typescript:

- code-completion
- transpiling to earlier .js versions
- option for static typing
- type inference

All of these benefits make for a very different environment. TypeScript is used for projects with large code-bases, but can be used for any project.

In TypeScript, interfaces are used for type-checking, and classes are used for object creation.

```js
interface Vehicle {
  type: string;
}

class Car implements Vehicle {
  type: String;
  constructor(type: String) {
    this.type = type;
  }
  drive(): void {
    console.log(`Vrrrum!" + ${this.type}`);
  }
}

const fabia = new Car("Skoda Fabia");
fabia.drive();
```

TypeScript supports the use of generics, not to be confused with the keyword `any`.

```js
function identity(arg: number): number {
  return arg;
}
```

While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns.

```js
function identity<T>(arg: T): T {
  return arg;
}
```

Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we can use a type variable, a special kind of variable that works on types rather than values.

**Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)**

1. Strawman
2. Proposal
3. Draft
4. Candidate
5. Finished

### Callbacks, Promises and async/await

## Explain briefly about callbacks, promises and async/await

Callbacks can refer to two phenomena. Either it is simply when a funtion take in another function as a parameter(callback), or it could be used in a more specific context meaning a function passed into another function performing an asynchronous operation where the callback function defines what to do after the asynchronous operation is finished.

A Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
Async/await is some syntactic sugar when working with promises to enhance readability.

**Example(s) that demonstrate how to avoid the callback hell (“Pyramid of Doom")**

```js
a(
  function(resFromA) {
    b(
      resFromA,
      function(resFromB) {
        c(
          rseFromB,
          function(resFromC) {
            d(resFromC, function(resFromD) {} /* do d logic) */);
          } /* do c logic) */
        );
      } /* do b logic) */
    );
  } /* do a logic) */
);
```

Callback hell occurs because in JavaScript the only way to delay a computation so that it runs after the asynchronous call returns is to put the delayed code inside a callback function. You cannot delay code that was written in traditional synchronous style.

**Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel**

A good way to run promises sequential is to use the Array.reduce method.
It's found that the reason reduce() works is because we're able to return something right back to our same callback (namely, a promise), which we can then build upon by having it resolve into another promise. With all of these other methods, however, we just can't pass an argument to our callback that was returned from our callback. Instead, each of those callback arguments are predetermined, making it impossible for us to leverage them for something like sequential promise resolution.

```js
let userIDs = [1, 2, 3];

userIDs.reduce(async (previousPromise, nextID) => {
  await previousPromise;
  return methodThatReturnsAPromise(nextID);
}, Promise.resolve());
```

A more dirty solution could be to chain promises inside each other.

```js
new Promise((resolve, reject) => {
  // Promise #1

  resolve();
})
  .then(result => {
    // Promise #2

    return result;
  })
  .then(result => {
    // Promise #3

    return result;
  });
```

to run Promises in parallel you do not chain them.

**Example(s) that demonstrate how to implement our own promise-solutions.**

```js
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved!");
  }, 1500);
});

(function() {
  myPromise.then((res, err) => {
    console.log(res);
  });
})();
```

**Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.**
The word “async” before a function means one simple thing: a function always returns a promise. Even If a function actually returns a non-promise value, prepending the function definition with the “async” keyword directs Javascript to automatically wrap that value in a resolved promise.

The keyword await makes JavaScript wait until that promise settles and returns its result.

Here’s an example with a promise that resolves in 1 second:

```js
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait till the promise resolves (*)

  alert(result); // "done!"
}

f();
```
