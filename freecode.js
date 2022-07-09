// ES6 json

// Compare Scopes of the var and let Keywords

// function checkScope() {
//     let i = 'function scope';
//     if (true) {
//       let i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
//   }
//   checkScope()


// var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// console.log(i);


// Mutate an Array Declared with const

// function freezeObj() {
//     const MATH_CONSTANTS = {
//       PI: 3.14
//     };
//     return MATH_CONSTANTS.PI;
//   }
//   const PI = freezeObj();
//   console.log(PI)
//   Object.freeze()


// Prevent Object Mutation

// function freezeObj() {
//     const MATH_CONSTANTS = {
//       PI: 3.14
//     };
//     return MATH_CONSTANTS.PI;
//   }
//   const PI = freezeObj();
//   Object.freeze() 


// Use Arrow Functions to Write Concise Anonymous Functions
// const magic = () => {
//     return new Date();
//   };
//   magic()

// Write Arrow Functions with Parameters

// const myConcat = (arr1, arr2)=>arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5]));    

// const doubler = (item) => item * 2;
// doubler(4);

// const multiplier = (item, multi) => item * multi;
// multiplier(4, 2);

// Set Default Parameters for Your Functions

// const greeting = (name = "Anonymous") => "Hello " + name;

// console.log(greeting("John"));
// console.log(greeting());

// Use the Rest Parameter with Function Parameters

// function howMany(...args) {
//     return "You have passed " + args.length + " arguments.";
//   }
//   console.log(howMany(0, 1, 2));
//   console.log(howMany("string", null, [1, 2, 3], {}));


// Use the Spread Operator to Evaluate Arrays In-Place

// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr);
// console.log(maximus)

// const arr = [6, 89, 3, 45];
// const maximus = Math.max(...arr);
// console.log(maximus)

// Use Destructuring Assignment to Extract Values from Objects

// const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;
// console.log(name,age)

// const { name, age } = user;
// console.log(name,age)

// Use Destructuring Assignment to Assign Variables from Objects


// const user = { name: 'John Doe', age: 34 };

// const { name: userName, age: userAge } = user;
// console.log(userName,userAge)

// Use Destructuring Assignment to Assign Variables from Nested Objects

// const user = {
//     johnDoe: { 
//       age: 34,
//       email: 'johnDoe@freeCodeCamp.com'
//     }
// };
// const { johnDoe: { age, email }} = user;
// console.log(age,email)

// const { johnDoe: { age: userAge, email: userEmail }} = user;
// console.log(age,email)

// Use Destructuring Assignment to Assign Variables from Arrays

// const [x, y] = [1, 2, 3, 4, 5, 6];
// console.log(x, y);

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

// const profileUpdate = (profileData) => {
//    const { name, age, nationality, location } = profileData;
// }

// Create Strings using Template Literals

// const person = {
//   name: "Zodiac Hasbro",
//   age: 56
// };

// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// console.log(greeting);

// Write Concise Object Literal Declarations Using Object Property Shorthand

// const createPerson = (name, age, gender) => {
//   // Only change code below this line
//   return {
//     name,
//     age,
//     gender
//   };
//   // Only change code above this line
// };
// console.log(createPerson("bhumesh","ajay","aniket"))





// progress tracking question

// Q .1

// unic = [1,2,2,1,5];
// dic = {}
// for(let ele of unic){
//     if(dic.hasOwnProperty(ele)){
//         dic[ele] += 1
//     }
//     else{
//         dic[ele]=1
//     }
// }
// console.log(dic)
// li1 = []
// let sum = 0;
// for(var key in dic){
//     let val;
//     val = dic[key]
//     sum += Number(key)
//     percent = (val/5)*100
//     li1.push([percent])
// }
// console.log(li1)

// Q . 2

// chr = prompt("enter your charecter: ")
// console.log(`original: ${chr}`)
// li2 = []
// l2 = []
// for(let char = 97; char<=122; char++){
//     li2.push(String.fromCharCode(char))
// }
// for(let c of chr){
//     l2.push(c)
// }

// var end = 97+l2.length
// for(let v = 97; v<=end; v++){
//     if(!l2.includes(String.fromCharCode(v))){
//         console.log(String.fromCharCode(v))
//     }
// }

// Q . 3

// let random = Array.from({length: 3}, () => Math.floor(Math.random() * 39));
// let random1 = Array.from({length: 3}, () => Math.floor(Math.random() * 39));
// var dict = {}
// for(let ele = 0; ele<=random.length; ele++){
//     if(random[ele] > random1[ele]){
//         dict[random[ele]] = 1 
//     }
//     else if(random1[ele] > random[ele]){
//         dict[random1[ele]] = 1
//     }
// }
// lis1 = []
// let sum = 0
// for(var value in dict){
//     let val = (dict[value])
//     sum += val
// }
// lis1.push(sum)
// console.log(lis1)




// getter and setter function

// var obj = {
//     name:"bhumesh",
//     age:20,

//     // get getName(){
//     //     return this.name.toUpperCase();
//     // },

//     set setname(str){
//         this.name = str.toUpperCase();
//     }
// }
// obj.setname  = "vishal"
// console.log(obj.name)