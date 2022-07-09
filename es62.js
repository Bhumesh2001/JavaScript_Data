// object methods

// 1.  call() methods

// const person = {
//     fullName: function(village){
//       return this.firstName + " " + this.lastName + " "+ village;
//     }
// }
// const person1 = {
//     firstName:"John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
// }
  
//   // This will return "John Doe":
// console.log(person.fullName.call(person1,"shrilanka"));
// console.log(person.fullName.call(person2,"newzland"));


// let boy = {
//     info:function(){
//         return this.english + " " + this.hindi
//     }
// }
// let obj = {
//     english:23,
//     hindi:44.,
//     math:43,
//     physics:47
// }
// let obj1 = {
//     english:63,
//     hindi:56.,
//     math:78,
//     physics:48
// }
// console.log(boy.info.call(obj))
// console.log(boy.info.call(obj1))


// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// console.log(person.fullName.call(person1, "Oslo", "Norway"));


// 2.apply() methods

// const person = {
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//   }
// }

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe"
// }

// // This will return "Mary Doe":
// console.log(person.fullName.apply(person1));


// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));


// 3 . bind() methods

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);
// console.log(fullName())


// const data = {
//     func1:function(name){
//         return this.sub + " " + this.marks + " " + name
//     }
// }
// const info1 = {
//     sub:'hindi',
//     marks:68,
// }
// let store = data.func1.bind(info1,"aniket")
// console.log(store())


// 1 . setTimeout()

// setTimeout(() => {
//     console.log("afeter 3s ")
//     console.log("this is a program")
//     console.log("javascript")
// },3000)


// 2. clearTimeout()

// let data = setTimeout(function(){
//     console.log("aafter 5s ")
//     console.log("this is a program")
//     console.log("javascript")
// },5000)

// function run(){
//     clearTimeout(data)
// }
// run()

// 3. setinterval()

// let clr1 = setInterval(function(){
//     console.log("this is javascript program")
// },2000)


// 4 . clearInterval()
// let clr = setInterval(function(){
//     console.log("this is javascript program")
// },2000)
// let arrow = () =>{
//     clearInterval(clr)
// }
// arrow()


// constructor()

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// console.log(myFather)
// console.log(myMother)



// function Person(first, last, age, eyecolor){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
// console.log(Person.prototype.nationality = "English");

// const p1 = new Person("bhumesh","kewat",20,"black")
// console.log(p1)


// prototype()

// function proto(name,last,village){
//     this.firstname = name
//     this.lastname = last
//     // this.village1 = village
//     return this.village1 = village
// }

// proto.prototype.getname = function(){
//     return this.firstname
// }

// proto.prototype.setname = function(){
//     return this.lastname
// }

// proto.prototype.info = function(){
//     return this.village1
// }
// let obj2 = new proto("pawan","channe",'lobhi')
// console.log(obj2)

// proto.prototype.add = "rahul"
// proto.prototype.name = "bhumesh"



// prototype() and inheritance()

// function inherit(){
//     this.marks = 10;
//     this.name = "bhumesh";
// }
// inherit.prototype.name1 = "rahul"
// var v = new inherit()
// console.log(v)

// function herit(){
//     inherit.call(this);
//     this.value1 = 20;
// }
// herit.prototype = Object.create(inherit.prototype)
// herit.prototype.constructor = herit
// var b = new herit()
// console.log(b)
// console.log(b.name1)



// function food(){
//     this.num = 20;
//     this.name1 = "mahendra kumawat"
// }
// food.prototype.marks = 56;
// let obj = new food()
// console.log(obj)

// function cake(){
//     food.call(this)
//     this.name = "malai";
// }
// cake.prototype = Object.create(food.prototype)
// cake.prototype.constructor = cake
// let obj3 = new  cake()
// console.log(obj3.num)
// console.log(obj3.name1)



// let nav = function(){
//     this.firstname = "aniket";
//     this.lastname = "tiwari";
// }
// nav.prototype.proto = "this is prototype";
// const anna = new nav()
// console.log(anna)

// let guru = function(){
//     nav.call(this)
//     this.age = 45;
//     this.year = 2022;
// }
// guru.prototype=Object.create(nav.prototype)

// guru.prototype.constructor = guru
// const m1 = new guru()
// console.log(m1)
// console.log(m1.firstname)
// console.log(m1.proto)
// console.log(m1.lastname)


//  clasess

// class Family{
//     constructor(name,year){
//         this.myname = name
//         this.year1 = year
//         this.book = () =>{
//             return "this is english book"
//         }
//     }
//     hindi(){
//         return "this is  my favourite  book"
//     }
// }
// let gomy = new Family("pawan","channe")
// console.log(gomy.hindi())


// class Myname{
//     constructor(){
//         this.subject = "english";
//         this.marks = 89;
//     }
//     total(){
//         return this.marks + " " + "is your marks";
//     }
// }
// const sub = new Myname()
// console.log(sub.total())
// console.log(sub.subject)


// classes inheritance

// class Name{
//     constructor(marks,langauge){
//         this.langauge2 = langauge
//         this.marks2 = marks
//     }
//     code(){
//         return "this is javascript code"
//     }
//     static multiply(x,y){
//         return x * y
//     }
// }
// let obj = new Name(90,"javascript")
// console.log(obj)

// class Surname extends Name{
//     constructor(marks,langauge,lastName,age){
//         super(marks,langauge)
//         this.lastName1 = lastName
//         this.age1 = age 
//     }
//     show(){
//         if(this.langauge2 == "python"){
//             return "python"
//         }else{
//             return "HTML"
//         }
//     }
//     static add(a,b){
//         return a + b
//     }
// }
// let last = new Surname(78,"javascript","kewat",22)
// console.log(last)
// console.log(Name.multiply(4,4))
// console.log(Surname.add(2,3))
// console.log(last.show())
// console.log(last.lastName1)
// console.log(obj.marks2)


// class Employee{
//     constructor(givenname,givenage,givenexpreance,givensalary){
//         this.name = givenname
//         this.age = givenage
//         this.expreance = givenexpreance
//         this.sallery = givensalary
//         this.sub = "doing javascript"
//     }
//     study(){
//         console.log("this is Employee class")
//         return `${this.name} ${this.sub} and doing best`
//     }
//     static division(a,b){
//         return `your division = ${a/b}`
//     }
// }

// class Programmer extends Employee{
//     constructor(givenname,givenage,givenexpreance,givensalary,langauge2){
//         super(givenname,givenage,givenexpreance,givensalary)
//         this.langauge = langauge2
//         this.subject = "econocix"
//     }
//     study(){
//         console.log("this is Programmer class")
//         super.study()
//         return `${this.name} ${this.sub} and doing best`
//     }
//     num(){
//         return `my name is ${this.name}`
//     }
//     static multiply(b,h){
//         return `your multiply = ${b * h}`
//     }
    
// }
// let prog = new Programmer("bhumesh",20,56,25000,"javascript")
// console.log(prog)
// console.log(Programmer.multiply(5,2))
// console.log(prog.study())
// console.log(Employee.division(12,5))



// class Worker{
//     constructor(firstname,lastname,age,salary){
//         this.name = firstname
//         this.lname = lastname
//         this.age1 = age
//         this.salary1 = salary
//     }
//     info(){
//         console.log("this is worker class")
//     }
// }

// class Malak extends Worker{
//     constructor(firstname,lastname,age,salary,year,langauge){
//         super(firstname,lastname,age,salary)
//         this.year1 = year
//         this.langauge1 = langauge
//     }
//     info(){
//         super.info()
//         console.log("this is malak class")
//     }
// }

// let work = new Malak("bhumesh","kewat",20,25000,2022,"hindi")
// // let work1= new Worker("aniket","tiwari",19,22000,2021,"bhojpuri")
// console.log(work)
// work.info()
// console.log(work.langauge1)



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


// prototype inheritance

// function create(name,age,salary){
//     this.name2= name;
//     this.age2 = age;
//     this.salary2 = salary;
// }
// create.prototype.lastName = function(){
//     return this.name1 
// }

// function fun(name,age,salary){
//     create.call(this)
//     this.name1 = name;
//     this.age1 = age;
//     this.salary1 = salary;
// }
// fun.prototype = Object.create(create.prototype)
// fun.prototype.constructor = "aniket"
// let create_obj = new fun("bhumesh",20,30000)
// console.log(create_obj.name1)


// arguments method , inbuilt function of javascript.

// function add(){
//     let sum = 0
//     for(let i in arguments){
//         console.log(i)
//         sum += arguments[i]
//     }
//     console.log(arguments)
//     return sum
// }
// console.log(add(2,3,4,5))


// rest parameter

// function sum(name,...sum1){
//     let add = 0
//     for(let val in sum1){
//         add += sum1[val]
//     }
//     console.log(add)
//     return name
// }
// console.log(sum('vishal',23,43,45,56))


// array destructuring 


// let arr = ['bhumesh',20,30000,'nagpur']

// const [name,age,salary=56000,village] = arr
// console.log(salary)



// function arra_info(){
//     return ['aniket',,25000]
// }
// let [name,age = 34,sallary] = arra_info()
// console.log(age)



// object return 

// const createPerson = (name, age, gender) => {
//     return {
//       name,
//       age,
//       gender
//     };
//   };
//   console.log(createPerson('bhumesh',20,'male'))


// Declarative Functions with ES6

// const person = {
//     name: "Bhumesh",
//     sayHello: function() {
//       return `Hello! My name is ${this.name}.`;
//     }
//   };

// console.log(person.sayHello())