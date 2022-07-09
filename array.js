// Operations-On-Arrays

// Create an array

// var fruits = ['Apple', 'Banana'];
// console.log(fruits.length); 

// // Access an Array item using the index position

// var fruits1 = ['Apple', 'Banana', "Orange"]
// console.log(fruits1[1]);

// // Loop over an Array

// var array = [ 1, 2, 3, 4, 5, 6 ];
// for (var index = 0; index < array.length; index++) {
// console.log(array[index]);
// }

// // Add an item to the end of an Array

// var fruits7 = ['Apple', 'Banana']
// fruits.push('Orange')
// console.log (fruits7)

// // Remove an item from the end of an Array

// var fruits0 = ['Apple', 'Banana', "Orange"]
// fruits.pop()
// console.log(fruits0)

// // Remove an item from the beginning of an Array

// var fruits3 = ['Apple', 'Banana', 'orange']
// fruits.shift()
// console.log(fruits3)

// // Add an item to the beginning of an Array

// var fruits4 = ['Apple', 'Banana']
// fruits.unshift("Grapes")
// console.log(fruits4);

// // Find an index of an items the Array

// let fruits2 = ['Apple', 'Banana', 'Orange']
// let position = fruits2.indexOf('Banana')
// console.log(position);

// // Remove an item by its index position

// var fruits = ['Apple', 'Banana', 'Orange']
// let removedItem = fruits.splice(1,1)
// console.log(removedItem)

// // Q . 1

// var my = ["chess", "Ludo", "Badminton", "Volleyball"];
// console.log(my);

// // Q . 2

// var myFavourit = ["Mango", "Orange", "Banana"];

// console.log(myFavourit.pop());

// // Q . 3

// let myF = ["Chess", "Ludo", "Badminton"];
// myF.unshift("Basketball");
// console.log(myF);

// // Q . 4

// let my1 = ["Chess", "Ludo", "Badminton"];
// my1.unshift("Basketball");
// console.log(my1);

// // Q . 5

// let myFav = ["chess", "Ludo", "Badminton"];
// console.log(myFav[2]);

// // Q . 6

// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"];
// let removedItems = myFavouriteGames.splice(3,1);
// console.log(myFavouriteGames);

// Q . 7

// let numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// let count = 0
// for(var c in numbers){
//     count+=1
// }
// console.log(count)

// Q . 8

// var numbers=[40, 23, 70, 56, 12, 5, 10, 7];
// var max_num=numbers[0];
// for(var i=0; i < numbers.length;i++){
//     if (numbers[i]>max_num){
//         max_num=numbers[i]
//     }
// }
// console.log("Max: ",max_num)

// Q . 9

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max_num=numbers[0];
// let sec_max = numbers[0];
// for(var i=0; i < numbers.length;i++){
//     if (numbers[i]>max_num){
//         sec_max = max_num
//         max_num=numbers[i]
//     }
//     else if(numbers[i]>sec_max){
//         sec_max = numbers[i]
//     }
// }
// console.log(sec_max)

// Q . 10

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var reversedArray=[]
// for(var i=numbers.length-1; i>=0;i--){
//    reversedArray.push(numbers[i])
// }
// console.log(reversedArray);

// Q . 11

// var str = ['m','a','l','a','y','a','l','a','m'];
// let len = str.length
// var msg = "it is a palidrome"
// for(var i = 0; i < len/2; i++){
//     if(str[i] != str[len -1-i]){
//         msg = "it is not a palidrome "
//     }
// }
// console.log(`${str}  ${msg}`)

// Q . 12

// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// elements=[]
// for(var i of list1){
//    if (!list2.includes(i)){
//        elements.push(i)
//    }
// }
// console.log(elements);

// Q . 13

// var marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//  ];
//  var sum=0;
//  for(var i of marks){
//     for(var j of i){
//         sum+=j
//     }
//  }
//  console.log(sum);

// Q . 14

// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// var number =30;
// output=[]
// for(var i of n){
//    for(var j of n){
//        if (i+j === number){
//            output.push([i,j])
//        }
//   }
// }
// console.log(output);

// Q . 15

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
 
// var odd_numbers=0;
// var even_numbers=0;
// for(var i of elements){
//    if(i%2 ===0){
//        even_numbers+=1
//    }
//    else{
//        odd_numbers+=1
//    }
// }
// console.log("odd numbers = ",odd_numbers);
// console.log("even numbers = ",even_numbers);

// Q . 16

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
 
// var sum_odd_numbers=0
// var sum_even_numbers=0
// for(var i of elements){
//    if(i%2 ===0){
//        sum_even_numbers+=i
//    }
//    else{
//        sum_odd_numbers+=i
//    }
// }
// console.log("sum of odd numbers = ",sum_odd_numbers);
// console.log("sum of even numbers = ",sum_even_numbers);

// Q . 17

// let elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var sum_odd_numbers=0;
// var sum_even_numbers=0;
// for(var i of elements){
//    if(i%2 ===0){
//        sum_even_numbers+=i
//    }
//    else{
//        sum_odd_numbers+=i
//    }
// }
// console.log((sum_even_numbers+sum_odd_numbers)/2);

// Q . 18

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var count_odd_numbers=0;
// var sum_odd_numbers=0;
// var sum_even_numbers=0;
// var count_even_numbers=0;
// for(var i of elements){
//    if(i%2 ===0){
//        sum_even_numbers+=i;
//        count_even_numbers+=1;
//    }
//    else{
//        sum_odd_numbers+=i;
//        count_odd_numbers+=1;
//    }
// }
// console.log((sum_even_numbers+sum_odd_numbers)/2);
// console.log(count_odd_numbers);
// console.log(count_even_numbers);
// console.log(sum_odd_numbers);
// console.log(sum_even_numbers);

// Q . 19

// var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
 
// var count_of_crorepati=0;
// var count_of_lakhpati=0;
// var count_of_dilwale=0;
// for( var  i of kitna_paisa_hai){
//    if(i>= 10000000){
//        count_of_crorepati+=1
//    }
//    else if(i>=100000){
//        count_of_lakhpati+=1
//    }
//    else{
//        count_of_dilwale+=1
//    }
// }
 
// console.log(count_of_crorepati);
// console.log(count_of_lakhpati);
// console.log(count_of_dilwale);

// Q .20

// var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
 
// uniques=[]
// for(var i of char_list){
//    if(!uniques.includes(i)){
//        uniques.push(i)
//    }
// }
// console.log(uniques);
 
// for(var j of uniques){
//    count=0
//    for(var k of char_list){
//        if (j === k){
//            count+=1
//        }
//    }
//    console.log(j,count," times");
// }

// Q . 21

// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// uniques=[]
// duplicates=[]
// for(var i of number_list){
//   if(!uniques.includes(i)){
//       uniques.push(i)
//   }
// }
 
// for(var j of uniques){
//   count=0
//   for(var k of number_list){
//       if (j === k){
//           count+=1
//       }
//   }
//  if(count >1){
//    duplicates.push(j);
//  };
// }
// console.log(duplicates);

// Q .22

// var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// var see = mainStr.replace(/over/g,"")
// console.log(see)



// Array methods

// const array = [1,2,3,4,5,6,7,8]
// array.forEach(item=>{
//     console.log(item)
// })

// const array = [1,2,3,4,5,6,7,8]
// let arr = array.includes(12)
// console.log(arr)


// const array = [1,2,3,4,5,6,7,8]
// const ar = array.filter(num=>num>4)
// console.log(ar)

// const array = [1,2,3,4,5,6,7,8]
// console.log("original array: ",array)
// let arr = array.map(ele=>ele + 1)
// console.log("map array: ",arr)


// const array = [1,2,3,4,5,6,7,8]
// let data = array.reduce((total,element)=>total + element)
// console.log(data)

// const array = [1,2,3,4,5,6,7,8]
// let arr2 = array.some(ele1=>ele1>8)
// console.log(arr2)


// const array = [1,2,3,4,5,6,7,8]
// let array3 = array.some(ele=>ele>5)
// console.log(array3)


// const array = [1,2,3,4,5,6,7,8]
// let store = array.every(value => value > 0)
// console.log(store)



// const name = "bhumesh"
// console.log(name)
// const name_array = Array.from(name)
// console.log(name_array)


// const arr1 = Array.of(5,6,4,56,43,1,2,3,4,5,6,7,8,9)
// let store3 = arr1.sort((a,b)=>a > b ? 1:-1)
// console.log(store3)