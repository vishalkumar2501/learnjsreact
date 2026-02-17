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
// ------------------ALL DESTRUCTURING OF ENTIRE CONCEPT--------------

// 1️⃣ Normal Tarika (Without Destructuring)
// let arr = [10, 20, 30];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// console.log(a, b, c);
// 👉 Thoda lamba ho gaya na?


// 2️⃣ Destructuring Tarika (Short & Clean)
// let arr = [10, 20, 30];

// let [a, b, c] = arr;

// console.log(a, b, c);
// 🔥 Bas! Ye hi hai destructuring. output same


// 3️⃣ Skip Karna (Kisi Value Ko Ignore Karna)
// let arr = [10, 20, 30];

// let [a, , c] = arr;

// console.log(a, c);


// 👉 Output: 10 30
// 👉 Beech wala 20 skip ho gaya.

// 4️⃣ Default Values
// Agar array me value na ho to default set kar sakte ho:

// let arr = [10];
// let [a, b = 50] = arr;

// console.log(a, b);

// 👉 Output: 10 50


// 5️⃣ Rest Operator (...) ⭐ Important
// let arr = [10, 20, 30, 40];
// let [a, b, ...rest] = arr;

// console.log(a);      // 10
// console.log(b);      // 20
// console.log(rest);   // [30, 40]

// 👉 ...rest bachi hui values ko ek naye array me daal deta hai.


// 6️⃣ Swap Variables (Most Popular Use 🔥)
// Destructuring se swap bhi kar sakte ho bina temp variable ke:

// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

// 👉 Output: 20 10
// Ye interview me bahut pucha jata hai 😉


// 7️⃣ Function Return Se Destructuring
// function getValues() {
//     return [1, 2];
// }

// let [a, b] = getValues();

// console.log(a, b);
