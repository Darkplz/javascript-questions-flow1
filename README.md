# javascript answers

### Explain and Reflect:

---

**Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.**

> The are many big differences to Java and JavaScript, the primary being:

- Java is interpreted by java interpreter/JIT compiler after being compiled to bytecode by javac. JavaScript on the other hand is purely interpreted and is often executed in a browser or by Node.
- Java is statically and strongly typed language while JavaScript is dynamically and weakly typed language.
- Java is class based, where JavaScript is prototype based. However in ES6 syntax was introduced to mimic the class behaviour in JavaScript
- Java runs on multiple threads, where JavaScript initially runs on a single thread. However the event loop uses more than one thread for wep apis and there are certain technologies like clusters and web workers to use multiple threads in JavaScript

**Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers**

> First let me explain what EcmaScript and TypeScript is:
> EcmaScript is a standard that JavaSCript is build upon.
> TypeScript is a superset of JavaScript, the primary differences being that TypeScript is statically typed, object-oriented and have interfaces. TypeScript is transpiled to JavaScript and it is primarely used for larger applications both serverside and clientside, however it can be used as a substitute for JavaScript at all times.  
>  To use these technologies in either node or browsers, it is required that the engine supports the ecmascript version. This however can be worked around by using technologies like babel.

**Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.**

> Node.js is a runtime environment for JavaScript, NPM is a package manager for Node. It makes sense to use it whenever you want to run JavaScript outside of a browser. It could be a server or an application.

**Explain about the Event Loop in Node.js**

```js
let fs = require("fs");
let eventNum = 0;
fs.watch("file.txt", (event, filename) => {
  console.log("event: " + event + "filename: " + filename);
});
fs.watch("file2.txt", (event, filename) => {
  console.log("event: " + event + "filename: " + filename);
});

console.log("watcher started...");
```

> The event loop in Node.js is managing the order of events in Node.js at runtime. Node.js event loop initiates its variables, declares functions and then simply waits for the event to occur. Events are non-blocking, that means when an event is being executed, it will be executed without being interrupted. Therefore thread-safe programming in Node.js is quite simple, since multithreading issues like a racecondition is not an issue in Node due to it's non-blocking nature. Above is an example of a watcher file that would be considered 'dangerous' if not Node.js non-blocking nature.

**Explain (some) of the purposes with the tools Babel and WebPack, using examples from the exercises**

> Babel is a transpiler, primarely used for transpiling JavaScript to older EcmaScript versions for unsupported browsers.
> WebPack is a bundler for JavaScript, it can bundle together dependencies to single files.

> **Explain the purpose of “use strict” and Linters, exemplified with ESLint**
> "use strict" is a feature to mimic a statcily typed language in JavaScript, to expand on this feature you can use EsLint is a customizable linter for JS

---

### Explain using sufficient code examples the following features in JavaScript.

**Variable/function-Hoisting**

```js
console.log(a);
var a = "I'm initialized";
```

> the example above returns undefined, instead of an error. This is because of a behaviour called hoisting
> Hoisting is JavaScript's default behavior of moving declarations to the top. So the exampled above
> Really looks like this

```js
var a;
console.log(a);
a = "I'm initialized";
```

**this in JavaScript and how it differs from what we know from Java/.net.**

> Below is the usage of a ´´´´this´´´ keyword in Kotlin. Where ´´´´this´´´ simply refers to the current object instantiation within the
> scope where ´´´´this´´´ is being used.

```kotlin
class A(val a: String, val b: String){
fun printProperties() {
        print("a: ${this.a}, b: ${this.b}");
    }
}
```

Below is the usage of ´´´this´´´ keyword in JavaScript. ´´´´this´´´ in JavaScript is a bit more tricky. The object that ´´´´this´´´ refers changes every time execution context is changed. Since person is the owner object, this refers to the instantiation of person.

```js
var person = {
  firstName: "John",
  lastName : "Doe",
  fullName : function() {
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

> **Immediately-Invoked Function Expressions (IIFE)**
>
> **JavaScripts Prototype**
>
> **User-defined Callback Functions (writing your own functions that take a callback)**
>
> **Explain the methods map, filter and reduce**
>
> **Provide examples of user-defined reusable modules implemented in Node.js**

---

### ES6,7,8... and TypeScript

Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

**Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.**

> **Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.**
>
> Provide examples with es-next, running in a browser, using Babel and Webpack
>
> **Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics**
>
> **Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)**

---

### Callbacks, Promises and async/await

Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:

**Example(s) that demonstrate how to avoid the callback hell (“Pyramid of Doom")**

> **Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel**
>
> **Example(s) that demonstrate how to implement our own promise-solutions.**
>
> **Example(s) that demonstrate error handling with promises**
>
> **Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.**
````
