//1. Array kya hota hai? 

//Array ek container hota hai jisme hum multiple values store kar sakte hain ek hi variable me.
//or java script he ek aaisa languages hai jisme hum different different data types ke array element store ker sakte hai


//let a = 10;    // Normal variable
               
// let arr = [10, 20, 30, 40];     Array (multiple values ek saath)


//--------------------------------------------------------------------------------------------------------
// 2. Array ka syntax

// let arrayName = [value1, value2, value3];


// Example:

// let fruits = ["apple", "banana", "mango"];

//----------------------------------------------------------------------------------------------------------

// 3. Index kya hota hai?

// Array ka counting 0 se start hota hai.
// let fruits = ["apple", "banana", "mango"];

// console.log(fruits[0]); // apple
// console.log(fruits[1]); // banana
// console.log(fruits[2]); // mango

//--------------------------------------------------------------------------------------------------------
// 4. Array length

// let fruits = ["apple", "banana", "mango"];

// console.log(fruits.length); // 3

//----------------------------------------------------------------------------------------------------------

// 5.Array Methods (Important Part)

// 1.➤ push() → End me value add karta hai
// let arr = [10, 20];

// arr.push(30);

// console.log(arr); // [10,20,30]
//==============================================================
//2.➤ pop() → End se remove karta hai
// let arr = [10, 20, 30];

// arr.pop();

// console.log(arr); // [10,20]
//=================================================================
// 3.➤ unshift() → Starting me add karta hai
// let arr = [20, 30];

// arr.unshift(10);

// console.log(arr); // [10,20,30]
//==================================================================
// 4.➤ shift() → Starting se remove karta hai
// let arr = [10, 20, 30];

// arr.shift();

// console.log(arr); // [20,30]

//====================================================================

// 5.➤ indexOf()
// let arr = [10, 20, 30];

// console.log(arr.indexOf(20)); // 1

//=====================================================================

// 6.➤ includes()
// let arr = [10, 20, 30];

// console.log(arr.includes(20)); // true

//-------------------------------------------------------------------------------------

// 6. Looping in Array


// 1.➤ for loop
// let arr = [10, 20, 30];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//=====================================================
// 2.➤ forEach()
// let arr = [10, 20, 30];

// arr.forEach(function(value){
//     console.log(value);
// });

//=======================================================

// 7. Map (Very Important )
//  Map new array return karta hai

// let arr = [1,2,3];

// let newArr = arr.map(function(num){
//     return num * 2;
// });

// console.log(newArr); // [2,4,6]

//=========================================================
// 8. Filter
// let arr = [10, 20, 30, 40];

// let result = arr.filter(function(num){
//     return num > 20;
// });

// console.log(result); // [30,40]

//---------------------------------------------------------------

// 10. Spread Operator

// let arr1 = [1,2];
// let arr2 = [3,4];

// let newArr = [...arr1, ...arr2];

// console.log(newArr); // [1,2,3,4]

//------------------------------------------------------------------


// 11. Array of Objects
// let users = [
//     {name: "Vishal", age: 20},
//     {name: "Rahul", age: 22}
// ];

// console.log(users[0].name); // Vishal


//-----------------------------------------------------------------------------

//Array sort kerne ka method

// let arr = [11,44 ,33,47,78,65, 5794, 377];

// let sr = arr.sort(function (a, b) {

//         return a-b;   // assindging order me sort
//         return b-a    // dessindging order me sort
// });

// console.log(sr);

//---------------------------------------------------------------------------------