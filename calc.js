// var screen = document.getElementById("screen");

// function btnClick(value) {
//   screen.value += value;
// }

// function clearScreen() {
//   screen.value = "";
// }

// function findResult() {
//   var result = eval(screen.value);
//   screen.value = result;
// }

// const speed = 'quick'
// console.log(`The ${speed} brown fox jumps over the lazy dog`)

// const obj = { foo: 1 }
// obj.bar = 2

// console.log(typeof (new (class { class () {} })))

// let sum = 0;
// let arr = [10, 15, 20, 30];
// arr.forEach(function myFunction(element) {
//   sum = sum + element;
// });
// // console.log(sum);

// let person = {
//   name: "adam",
//   age: 29,
// };

// function Person(_firstName, _lastName) {
//   this.firstName = _firstName;
//   this.lastName = _lastName;
// }
// const member = new Person("Lydia", "Hallie");
// Person.getFullName = function () {
//   return `${this._firstName} ${this._lastName}`;
// };
// console.log(member.getFullName());

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   }
//   const lydia = new Person('Lydia', 'Hallie');
//   const sarah = Person('Sarah', 'Smith');
//   console.log(lydia);
//   console.log(sarah);

// const shape = {
//   radius: 10,
//   diameter() {
//   return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
//  };

//  console.log(shape.diameter());
//  console.log(shape.perimeter());

// let myPromise = new Promise(function (resolve, reject) {
//   const a = 4;
//   const b = 5;

//   setTimeout(() => {
//     if (a === b) {
//       resolve("the values are equal");
//     } else {
//       reject("the values are not equal");
//     }
//   }, 2000);
// });

// console.log(myPromise)

// myPromise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (failedRes) {
//     console.log(failedRes);
//   });

// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, 'one');
//  });

//  const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, 'two');
//  });
//  Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// var p = new Promise((resolve, reject) => {
//   reject(Error('Promise Fails!'))
//   })
//   p.catch(error => console.log(error.message))
//   p.catch(error => console.log(error.message))

// async function f() {
//   let result = 'new!';
//   let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('done!'), 1000);
//   });
//  result = await promise;
//  console.log(result);
//  }

//  f();

let firstPerson = {
  name: "adam",
  age: 23,
  address: {
    city: "pkd",
    state: "kerala",
  },
};

let secondPerson = JSON.parse(JSON.stringify(firstPerson));

secondPerson.address.city = "Delhi";
secondPerson.address.state = "delhi"

console.log(firstPerson);

console.log(secondPerson);
