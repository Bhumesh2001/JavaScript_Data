
// var emptyObject = {};
// var myContacts= {"kumar": 9000000000, "shwetha": 9876543211, "komal": "0909990999"};
// // For better reading
// var campusCityState = {
//    "Sarjapur": "Karnataka",
//    "Pune": "Maharashtra",
//    "Dharmashala": "Himachal Pradesh"
// }

// var myDetails= {
//     name:"kumar",
//     surname:"nayak",
//     age:24
//  }

// //  Accessing-Object-Properties


// var vegetables ={
//     veg1:"potato",
//     veg2:"brinjal",
//     veg3:"bottle gourd"
//  }

// var vegetable1= vegetables.veg1;
// var vegetable2= vegetables.veg2;
// var vegetable3= vegetables.veg3;

// console.log(vegetable1);
// console.log(vegetable2);
// console.log(vegetable3);

// var myDetails={
//     "first name":"kumar",
//     "last name": "vadthya",
//     "middle name":"nayak"
//  }
  
//  console.log(myDetails["first name"]);
//  console.log(myDetails["last name"]);
//  console.log(myDetails["middle name"]);

//  Updating-a-property

// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//   };
 
// myHome.name="my Villa";
 
// console.log(myHome);


// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//   };
 
// myHome["name"]="my Villa";
 
// console.log(myHome);

// Add-new-properties-to-an-object


// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//   };

// myHome.isGood= true;

// console.log(myHome);

// Deleting-properties-from-an-object


// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"],
//     "isGood":true
//   };
  
// delete myHome.isGood;
// console.log(myHome)

// Check-property-is-there-or-not

// var myDetails={
//     "name":"kumar",
//     "age":24
//  }
//  console.log(myDetails.hasOwnProperty("name"));


// var person={"name":"gouri","surname":"maity","age":37}
// for (person_details in person){
// console.log(person_details+ "= "+perso/erson_details]);
// }

// const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
// for(let eachKey in campus){
//   console.log(campus[pro])
// }

// Q . 1

// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}
// d3 = {...d1,...d2}
// for(var value in d1){
//     for(val in d2){
//         if(val == value){
//             d3[value] = d1[value] + d2[val]
//         }
//     }
// }
// console.log(d3)

// Q . 2

// var n = prompt('How many more times? ');
// d = {}
// for (let i = 1; i <= n; i++) {
//    d[i] = i ** 2
// }
// console.log(d);

// Q . 3

// var mainString="My name is kumar, and my friend’s name is Dhamu"
// var subString="is"
// let sub = mainString.split(" ")
// let count = 0
// for(var su of sub){
//     if(su == subString){
//         count+=1
//     }
// }
// console.log(count)

// Q 4

// var dic1={1:10, 2:20};
// var dic2={3:30,2:40};
// var dic3={5:50,6:60};
// for (i in dic1){
//   for (j in dic2){
//     if (i==j){
//         dic3[i]=dic1[i]+dic2[j]
//         break
//     }
//      else{
//         dic3[i]=dic1[i]
//         dic3[j]=dic2[j]
//      }
//   } 
// }
// console.log(dic3);

// Q . 5

// let n =prompt('Enter the property name:');
// let dict={"name":"Raju", "marks":56}
// for (i in dict){
// if (i==n){
//     console.log("exists");
//     break
// }
// else{
//     console.log("not exist");
//     break
// }
// }

// Q . 6

// var my_dict = {
//     'data1':100,
//     'data2': -54,
//     'data3': 247
//    }
// var sum=0

// for(i in my_dict){
//     sum+=my_dict[i]
// }
// console.log("Total:",sum)

// Q . 7

// var myDict= {
//    1: 'NAVGURUKUL',
//    2: 'IN',
//    3:{  
//         'A' : 'WELCOME',
//         'B' : 'To',
//         'C' : 'DHARAMSALA'
//        }
//    }
// for (i in myDict){
//    if ((typeof myDict[i]) === "object"){
//        delete myDict[i]['A']
//    }
// }
// console.log(myDict);

// Q . 8

// let list1=['one','two','three','four','five']
// let list2=[1,2,3,4,5]
// var n={}
// for (i in list2){
//    n[list1[i]]=list2[i]
// }
// console.log(n);

// Q . 9

// const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
// let uniques_list = [];
// for (i of list) {
//   for (j in i) {
//       if (!uniques_list.includes(i[j])) { 
//         uniques_list.push(i[j]);
//       }
//   }
// }
// console.log(uniques_list);

// Q . 10


// var students={}
// for (let step = 0; step <5; step++){
//    var name = prompt("Enter your name:");
//    var marks=prompt("Enter the marks");
//    students[name]=marks;
// }
// console.log(students);

// Q . 11

// const list1=[]
// const word="MISSISSIPPI"
// let output={}
// for (var i of word) {
//       if(list1.includes(i)){
//        output[i]=output[i]+1
    
//   }else{
//        list1.push(i);
//        output[i]=1;
//   }
// }
// console.log(output);

// Q . 12

// var dict =  {
//     'Alex': ['subj1', 'subj2', 'subj3'],
//     'David': ['subj1', 'subj2']
//  }
//  var count = 0
//  for(i in dict){
//     for (a in dict[i]){
//         count ++
//     }
//  }
  
//  console.log(count);

// Q . 13

// var my_dict = {
//     'a':50,
//     'b':58,
//     'c':56,
//     'd':40,
//     'e':100,
//     'f':20
// }
// l2 = []
// for(let s in my_dict){
//     l2.push(my_dict[s])
// }
// let sort = l2.sort((a,b) => a - b)
// console.log([sort[3],sort[4],sort[5]])




// function create(name1,lastName1,age1){
//     this.name = name1
//     this.lastName = lastName1
//     this.age = age1
// }
// create.prototype.proto = function(){
//     return this.name + ' ' + this.lastName
// }
// create.prototype.salary = 30000
// let start = new create('bhumesh','kewat',20)
// console.log(start)




// rest parameter

// function howMany(...args) {
//     return "You have passed " + args.length + " arguments.";
//   }
//   console.log(howMany(0, 1, 2));
//   console.log(howMany("string", null, [1, 2, 3], { }));


// destructuring 

// const user = { name: 'John Doe', age: 34 };

// const store = { name: userName, age: userAge } = user;
// console.log(store)


// const user = {
//     johnDoe: { 
//       age: 34,
//       email: 'johnDoe@freeCodeCamp.com'
//     }
//   };
//   const store1 = { johnDoe: { age, email }} = user;
//   console.log(store1)
  
//   const data = { johnDoe: { age: userAge, email: userEmail }} = user;
//   console.log(data)



// let obj = {name:'bhumesh',age:20,sallary:20000}

// const data = ({name,age,sallary})=>{
//     console.log(`your info: ${name} ${age} ${sallary} `)
// }
// data(obj)

