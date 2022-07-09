//  1 . callbacks functions

// function call(){
//     console.log("this is a javascript function")
// }

// function number(callback){
//     console.log("this is number function")
//     callback()
// }
// number(call)



// function callback1(){
//     console.log('I am reading a js langauage.')
// }

// function callback2(call){
//     call()
//     console.log('I am reading python langauage.')
// }
// callback2(callback1)    


// function call(a){
//     console.log(`this is a ${a} function`)
// }

// function number(a,callback){
//     console.log("this is number function")
//     callback(a)
// }
// number("javascript",call)



// function number(a,callback){
//     console.log("this is number function")
//     callback(a)
// }
// number("javascript",function (a){
//     console.log(`this is a ${a} function`)
// })


// function number(a,callback){
//     console.log("this is number function")
//     callback(a)
// }
// number("javascript",a => console.log(`this is a ${a} function`))


// 2. synchronous / asynchronous

//  1 . synchronous 

// function call(){
//     console.log("this is a javascript function")
// }

// function number(callback){
//     console.log("this is number function")
//     callback()
//     console.log('I am reading javascript langauage.')
// }
// number(call)
// console.log("my name is bhumesh")


// 2 . asynchronous

// setTimeout(function (){
//     console.log("this is a function")
// }, 3000)
// console.log("my name is bhumesh")


// setTimeout(function(){
//     console.log('I am iron man')
// },5000)
// console.log("I am standing ouside.")


//  3. promisese


// function run(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             const error = true;
//             if(!error){
//                 console.log(" Function: your promise has been resolved ")
//                 resolve()
//             }
//             else{
//                 console.log("Function:  your promise has been not resolved ")
//                 reject('sorry not fulfiled')
//             }
//         },3000)
//     })

// }
// run().then(function(){
//     console.log("bhumesh: thanks for resolving")
// }).catch(function(string){
//     console.log(`not resolving ${string}`)
// })



// let func = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true
//         if(error){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     },2000);
// })
// func.then(function(){
//     console.log("your promise has been  resolved")
// }).catch(()=>{
//     console.log('you promise has been rejected')
// })



//  4. asynk / await


// async function work(){
//     try{
//         console.log("Inside functions")
//         const data = await fetch("https://api.github.com/users")
//         console.log("after ferching data")
//         let users = await data.json()
//         return users
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// console.log("first printed")
// let da = work()
// console.log(da)
// da.then(info => console.log(info))
// console.log("last line of this code")



// async function data(){
//     try{
//         console.log('first printing')
//         let store = await "I am bhumesh"
//         console.log("after printing")
//         return store
//     }
//     catch{
//         console.log('promise has been rejected')
//     }
// }
// data().then(data =>{
//     console.log(data)
//     console.log('your promise has been resolved')
// })
// console.log('printing this line')

