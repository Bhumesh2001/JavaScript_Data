// Defining-and-calling-a-function

// function sayHello(name) {
//     return "Hello " + name
//    }
    
// console.log(sayHello("Pragna"))

// How to Call a function


// function sayHello(name) {
//     return "Hello " + name
//    }
//    // Calling function
//    console.log(sayHello("Pragna"))

// Exercises:

// Q . 1

// function sayBye(userName){
//     return "Bye"+" "+userName
//  }
  
//  console.log(sayBye("Kumar"))

// Q . 2

// function getFullName(firstName,lastName){
//     console.log(firstName+" "+lastName)
//    }
    
//    getFullName("kumar","nayak");


// Function-parameters

// function functionName(parameter1, parameter2, parameter3) {
//     // Code to be executed
// }

// functionName(argument1, argument2, argument3);


// function displaySum(num1, num2) {
//  var total = num1 + num2;
//  console.log(total);
// }
 
// // Calling function

// displaySum(6, 20); // 0utputs: 26
// displaySum(-5, 17); // 0utputs: 12


// function showFullname(firstName, lastName) {
//     console.log(firstName + " " + lastName);
// }
 
// // Calling function
// showFullname("Kumar", "Nayak"); // 0utputs: Kumar Nayak
// showFullname("Shwetha"); // 0utputs: Shwetha undefined

// Exercises:

// Q . 1

// function displayMultiply(num1, num2, num3) {
//     return num1*num2*num3
//    }
   
//  console.log(displayMultiply(2, 3, 4));

// Q . 2

// function getResult(num1,num2,num3,num4){
//     console.log(num1-num2+num3-num4)
// }
 
// getResult(2,3,4,5);
   
// Q . 3

// function getResult(num1,num2,num3){
//     console.log(num1-num2+num3)
// }

// getResult(2,3,4,5);

// Q . 4

// function SumOfNumbers(num1,num2){
//    return num1+num2;
// }
// SumOfNumbers(1,2);

// // Q . 5

// function displayMultiply(a,b){
//    console.log(a*b);
// }
// displayMultiply(2,3);

// // Q . 6

// function add(a,b){
//     console.log(a+b);
// }
// add(2,3);

// Returning-Values-from-a-Function

// function getSum(num1, num2) {
//     var total = num1 + num2;
//     return total;
//     }

// function getSum(num1, num2) {
//     var total = num1 + num2;
//     return total;
//    }
   
//    // Displaying returned value
//    var result1 = getSum(6, 20);
//    console.log(result1) // 0utputs: 26
//    var result2 = getSum(-5, 17);
//    console.log(result2) // 0utputs: 12


// function getSum(num1, num2) {
//  var total = num1 + num2;
//  return total;
//  console.log("it won't prints this because return works like break");
// }

// // Displaying returned value
// var result1 = getSum(6, 20);
// console.log(result1) // 0utputs: 26
// var result2 = getSum(-5, 17);
// console.log(result2) // 0utputs: 12

// Exercises:

// Q . 1

// function averageOfSubjects(maths,science){
//    return ((maths+science)/2);
// }
// console.log(averageOfSubjects(25,30));

// // Q . 2

// function insertingElement(arr){
//     var a=5;
//     arr.push(a);
//     return arr;
  
//  }
//  console.log(insertingElement([1,2,3,4]));

// Q . 3

// function multiplyString(string,num){
//     string*num;
//  }
  
//  console.log(multiplyString("kumar",2));


// Understanding-the-Variable-Scope-in-functions

// function greetWorld() {
//     var greet = "Hello World!";
//     console.log(greet);
// }
// greetWorld(); // Outputs: Hello World!


// var greet = "Hello World!";
// // Defining function
// function greetWorld() {
//   console.log(greet);
// }
// greetWorld();  // Outputs: Hello World!
// console.log(greet); // Outputs: Hello World!

// Name Function

// function addNumbers(parameter1, parameter2) {
//     // code to be executed
//    }
   
//    addNumbers(argument1 , argument2);

// Function Expressions ( Anonymous function )

// function getSum(num1, num2) {
//  var total = num1 + num2;
//  return total;
// }

// var getSum = function(num1, num2) {
//  var total = num1 + num2;
//  return total;
// };

// var getSum = function(num1, num2) {
//  var total = num1 + num2;
//  return total;
// };
// console.log(getSum(5, 10)); // 0utputs: 15
 
// var sum = getSum(7, 25);
// console.log(sum); // 0utputs: 32


// var isEqual = function(str1,str2){
//     console.log(str1===str2)
//  }
//  isEqual("kumar","nayak");

// Self-Invoking Functions ( Immediately invoked function expression)

// (function myName () {
//     var x = "Hello!! Nayak";  // I will invoke myself
//     console.log(x);
// })();


// (function(str1,str2){
//     console.log(str1===str2)
// })("kumar","kumar");

// Functions-Can-Be-Used-as-Values

// function myFunction(a, b) {
//     return a * b;
// }
// var x = myFunction(4, 3);
// console.log(x)

// exercise

// Q . 1

// function sayby(userName){
//     return "Bye" + " " + userName
// }
// console.log(sayby("kumar"))

// Q . 2

// function displayMultiply(num1, num2, num3) {
//    return num1*num2*num3
//   }
// console.log(displayMultiply(2, 3, 4));

// Q . 3

// function getFullName(firstName,lastName){
//     console.log(firstName+" "+lastName)
//    }
    
//    getFullName("kumar","nayak");

// Q . 4

// var isEqual = function(str1,str2){
//     console.log(str1===str2)
// }
// isEqual("kumar","nayak");

// Q . 5

// function getFullName(firstName,lastName){
//     console.log(firstName+" "+lastName)
//    }
    
//    getFullName("kumar","nayak");

// Q . 6

// function getResult(num1,num2,num3,num4){
//     console.log(num1-num2+num3-num4)
//     }
// getResult(2,3,4,5);

// Q . 7

// function getResult(num1,num2,num3){
//     console.log(num1-num2+num3)
//    }
    
// getResult(2,3,4,5);

// Q . 8

// (function(str1,str2){
//     console.log(str1===str2)
//  })("kumar","kumar");

// Q . 9

// function function_print_lines(str1,str2){
//     console.log(str1);
//     console.log(str2);
//  }
// function_print_lines("Mera naam Nayak hai.", "Main NavGurukul ka Academic Associate hun.")

// Q . 10

// function isGreaterThan20(num){
//    if(num>20){
//        return true
//    }
// }

// function students(list_of_marks){
//    count=0
//    for(var i of list_of_marks){
//        var result= isGreaterThan20(i)
//        if (result === true){
//            count++
//        }
//    }
//    console.log(count);
// }
// students([21,25,19,25,33,54])

// Q . 11

// function add_numbers(num1,num2){
//     console.log(num1+num2);
// }
// add_numbers(56,12);

// Q . 12

// function add_numbers(num1,num2){
//    console.log(num1+num2);
//    console.log("------------");
// }
 
// function add_numbers_list(list1,list2){
//    for(var i=0;i<3;i++){
//        add_numbers(list1[i],list2[i]);
//    }
// }
// add_numbers_list([50, 60, 10],[10, 20, 13])

// Q . 13

// function check_numbers(num1,num2){
//    if(num1%2 ===0 && num2%2===0){
//        console.log("Both are Even");
//    }
//    else{
//        console.log("Both are not Even");
//    }
// }
// check_numbers(12,14)

// Q . 14


// function add_numbers_list(list1,list2){
//    for(var i=0;i<6;i++){
//        var el = list1[i]
       
//        var al = list2[i]
//        if(el % 2 == 0 && al % 2 == 0){
//            console.log("dono even hai")
//        }
//        else{
//            console.log("dono even nahi hai")
//        }
//    }
// }
// add_numbers_list([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])

// Q . 15

// function eligible_for_vote(vote){
//     if(vote > 18){
//         return true
//     }
//     else{
//         return false
//     }
// }
// age = prompt("enter your age: ")
// resu = (eligible_for_vote(age))
// if(resu == true){
//     console.log("eligible hai")
// }
// else{
//     console.log("not eligible hai")
// }

// Q . 16

// function perfect(num){
//     var add=0
//     for(var i=1; i<num; i++){
//         if(num%i == 0){
//             add+=i
//         }
//     }
//     if(add === num){
//         console.log(num," is a perfect number");
//     }
//     else{
//         console.log(num," is not a perfect number");
//     }
// }
// per = prompt("enter your number: ")
// perfect(per)

// Q . 17

// function average(num1,num2,num3){
//    console.log("sum of three numbers ",num1+num2+num3);
//    console.log("Average of three numbers ",(num1+num2+num3)/3);
// }
 
// let number1 = Number(prompt('Enter the number1 : '));
// let number2 = Number(prompt('Enter the number2 : '));
// let number3 = Number(prompt('Enter the number3 : '));
// average(number1,number2,number3);

// Q . 18


// function showNumbers(limit){
//    for(i=0;i<=limit;i++){
//        if(i%2 ===0){
//            console.log(i,"  Even");
//        }
//        else{
//            console.log(i,"  Odd");
//        }
//    }
// }
// showNumbers(3);

// Q . 19

// function multiplesOfNumbers(limit){
//    var sum=0
//    for(i=1;i<=limit;i++){
//        if(i%3 ===0){
//            sum+=i;
//            console.log(i)
//        }
//        if(i%5 ==0){
//            sum+=i;
//            console.log(i)
//        }
//    }
//    console.log("your sum is = ",sum);
// }
// multiplesOfNumbers(10);

// Q .20

// function license_checker(speed){
//     if(speed < 70){
//         console.log("ok");
//     }
//     if(speed > 70){
//         var points=0
//         for(var i=70; i < speed; i+=10){
//             points+=1
//         }
//         if(points>12){
//             console.log("License suspended");
//         }
//         else{
//             console.log("your points = ",points);
//         }
//     }
// }
// let race = prompt("enter the speed: ")
// license_checker(race);

// // Q . 21

// function is_equal_lenth(str1,str2){
//    if(str1.length === str2.length){
//        console.log(str1);
//        console.log(str2);
//    }
//    else if(str1.length > str2.length){
//        console.log(str1);
//    }
//    else{
//        console.log(str2);
//    }
// }
// is_equal_lenth("hello","welcome");


// // Q . 22

// function squares_of_numbers(limit){
//     var output={}
//     for(var i=1;i<=limit;i++){
//         output[i]=i*i
//     }
//     console.log(output);
//  }
//  squares_of_numbers(20)


// w3 function js

// 

// function questions

// Q .1 

// function reverse_a_number(n){
//     n = n + "";
// 	return n.split("").reverse().join("");
// }
// num1 = prompt("enter your number: ")
// console.log(Number(reverse_a_number(num1)));


// let reverse = function(){
//     let rev1 = 0
//     let num1 = prompt("Enter The Number: ")
//     while(num1 != 0){
//         rev1 = rev1 * 10 + num1 % 10
//         num1 = Math.floor(num1 / 10)
//     }
//     console.log("Reverse Number: " ,rev1)
// }
// reverse()


// Q . 2

// let func = function(str1){
//     let len = str1.length
//     var msg = "it is a palidrome"
//     for(var i = 0; i < len/2; i++){
//         if(str1[i] != str1[len -1-i]){
//             msg = "it is not a palidrome "
//         }
//     }
//     console.log(`${str1} : ${msg}`)

// }
// const str2 = prompt("Enter The String: ")
// func(str2)

// Q . 3

// function substr(str){
//     for ( i = 0 ; i < 3 ; i++ ){
//         for ( j = i + 1 ; j < 4; j++){
//             var str1 = str.substring(i , j);
//             console.log(str1);
//         }
//     }
// }
// substr("aniket")


// Q . 4

// function alph_order(str1){
//     return str1.split("").sort().join("")
// }
// console.log(alph_order("webmaster"))


// function alphabetOrder(str) {
//     let arr = str.split('')
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < str.length; j++) {
//             if (arr[i] < arr[j])
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
//     return arr.join('')
// }
// console.log(alphabetOrder("webmaster"))


// Q . 5

// function convertfun(string) {
//     return string.split(' ').map((mapresult) => {
//         return mapresult.replace(mapresult[0], mapresult[0].toUpperCase())
//     });
// }
// let store = convertfun('the quick brown fox');
// let str = ""
// for(let j of store){
//     str+=j+" "
// }
// console.log(str)


// self - inovking functions


// (function myname(){
//     var x = 'hello nayak'
//     console.log(x)
// })();