// 1 .While-loop

// var count = 1;
// while (count < 10) {
//    console.log(count);
//    count +=2;
// }


// var i=0;
// while (i<7){
//     if(i%2==0){
// console.log(i)
//     }
//     i++;
// }

// // 2 . For-loop

// for(var i = 0; i < 3; i++){
//     console.log(i)
// }


// for(var n=9;n>0;n--){
//    console.log(n)
// }


// for (var s=25;s<=30;s++){
//    console.log(s)
// }
 
// 3 . Do-while-loop

// var i=1
// do{
//   if(i%2==1){
//   console.log(i)
//   }
//   i++
// }
// while (i <=10)


// let m=5;
// let n=1
// do{
//    console.log(m*n)
// n++
// }        
// while(n<=4)

// let sum=0
// let i=0
// do{
//   sum=sum+i 
//   console.log(sum)
//   i++
// }
// while(i<=10)

// Diff-between-while-loop-and-do-while-loop

// let i=2
// do{
//    console.log(i);
// }
// while (i >10)
 
 
// while(i>10){
//    console.log(i);
// }

// 4 . For-in-loop

// var cars = ["Maruti", "Mercedes", "BMW"];
// for (ca in cars){
//    console.log(cars[ca])
// }


// const campus_list=["Bangalore","Dharamshala","Pune","Bangalore_another"]
// for(let campus in campus_list){
//    console.log(campus)
// }


// 5 . For-of-loop

// let name=["komal","shweta","rani","swati","mahi","shanti","sarmistha"]
// for(let lname of name){
//    console.log(lname);
// }

// arr=["a","b","g","r","t"]
// for(let character of arr){
// console.log(character);
// }

// number_list=[23,"maan",67,"gouri",90,45,34]
// for(let num of number_list){
// console.log(num);
// }

// let obj={"name":"sharmistha","age":21,"hobby":"watching movie",
//    "goal":"fullstack_developer"}
// for(let prop of obj){
//    console.log(prop)
// }

// Difference-between-for(in)-and-for(of)

// let Navgurukul = ['Pune', 'Bangalore', 'Sarjapur'];

// // cmpKey are the property keys
// for (let cmpKey in Navgurukul) {
//  console.log(cmpKey);
// }
// // console.log(“------------------”)
// // cmpValue are the property values
// for (let cmpValue of Navgurukul) {
//  console.log(cmpValue)
// }


// const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
// for(let pro in campus){
//  console.log(campus[pro])
// }

// console.log("--------------");
 
// for(let pro of campus){
//  console.log(pro)
// }

// Some-more

// Find length of object

// const birds={name:"Bald Eagle",type:"Hawk",ScientificName:"HaliaeetusLeucocephalus"}
          
// console.log(Object.keys(birds).length)


// const bird={name:"Bald Eagle",type:"Hawk",
//    ScientificName:"HaliaeetusLeucocephalus"}
          
// console.log(Object.values(birds).length)

// Q . 1


// var name=prompt("enter name: ")
// const store=name;
// var string=""
// for (let i=name.length-1;i>=0;i--){
//    string=string+name[i]
// }
// if (store===string) {
//    console.log("its palindrome string")
// }
// else {
//    console.log("it's not a palindrome string")
// }

// Q . 2

// var num = prompt("enter your number: ")
// if(num == 1){
//     console.log(`${num} is not a prime number`)
// }
// else if(num < 1){
//     console.log(`${num} is not a prime number`)
// }
// else if(num == 2){
//     console.log(`${num} is a prime number`)
// }
// else{
//     for(var i = 2; i < num ; i++){
//         if(num % i == 0){
//             var res = `${num} is not a prime number`
//         }
//         else{
//             var res = `${num} is a prime number`
//         }
//     }
// }
// console.log(res)

// Q . 3

// for (var i=0;i<10;) {
//     console.log(i)
//  }

// Q . 4

// let num = prompt("enter your number: ")
// for (let i=1;i<=10;i++) {
//     multi=num*i;
//     console.log(num + " *" + i + "=" + multi)
// }

// Q . 5

// var str = prompt("enter your string: ")
// let len = str.length
// var msg = "it is a palidrome string"
// for(var i = 0; i < len/2; i++){
//     if(str[i] != str[len -1-i]){
//         msg = "it is not a palidrome stirng"
//     }
// }
// console.log(`${str}  ${msg}`)

// Q . 6

// for(var j=1; j<=100 ; j++){
//     console.log(j)
// }

// Q . 7

// for(var j=1; j<=100 ; j++){
//     if(j % 7 == 0){
//         console.log(j)
//     }
// }

// Q . 8

//  let sum = 0
// for(var j=1; j<=100 ; j++){
//     sum += j
// }
// console.log(sum)

// Q . 9

// let sum = 0
// for(var j=1; j<=100 ; j++){
//     var num1 = Number(prompt("enter your number: "))
//     sum += num1
// }
// console.log(sum)

// Q . 10

// for(var j=1; j<=100 ; j++){
//         if(j % 2 == 0){
//             console.log(-j)
//         }
//         else{
//             console.log(j)
//         }
//     }

// Q . 11

// for(var j=1; j<=100 ; j++){
//     if(j % 3 == 0 && j % 7 == 0){
//         console.log("Navgurukul")
//     }
//     else if(j % 3 == 0){
//         console.log("Nav")
//     }
//     else if(j % 7 == 0){
//         console.log("Gurukul")
//     }
//     else{
//         console.log(j)
//     }
// }

// Q . 12

//  let sum = 0
// for(var j=1; j<=100 ; j++){
//     var num1 = Number(prompt("enter your number: "))
//     console.log("koi bhi number daliye =>",num1)
//     sum += num1
// }
// console.log(sum)

// Q . 13

// for(var h = 156; h <= 255; h++ ){
//     console.log(h-155)
// }

// Q . 14

// let n = 1; 
// let string = "";
// for(let i = 5; i >= n; i--) { 
//   for(let j = 5; j >=n; j--) {
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);

// Q . 15

// let choose=(prompt("enter number: "));
// var ascii_char=97+parseInt(choose)
// for (var i=97;i<=ascii_char;i++) {
//     let char = String.fromCharCode(i)
//     console.log(char)
// }

// Q . 16


// let loop_time = prompt("enter the range: ")
// let lis=[]
// for (let i=1;i<=loop_time;i++) {
//     let num=prompt("enter number: ")
//     lis.push(num)
// }
// let max = lis[0]
// for(let i = 0; i < lis.length;i++){
//     if(lis[i]>max){
//         max = lis[i]
//     }
// }
// console.log(lis)
// console.log("Max is: ",max)
