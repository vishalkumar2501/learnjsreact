// OBJECTS IN JAVASCRIPT 
// 🔹 1. Object kya hota hai?

// 👉 Object ek real life cheez ko represent karta hai.
// 👉 Object me data key : value pair me store hota hai.

// Example:

// let person = {
//     name: "Vishal",
//     age: 20,
//     city: "Ghaziabad"
// };

//------------------------------------------------------------------------------
// 2. Object ka syntax

// let objectName = {
//     key1: value1,
//     key2: value2
// };

//================================================================================
// 🔹 3. Value access kaise kare ya kerte hai j.s me ?

// 1.➤ Dot notation
// let person = {
//     name: "Vishal",
//     age: 20
// };
// console.log(person.name); // Vishal

// 2.➤ Bracket notation
// console.log(person["age"]); // 20   Jab dynamic key use karni ho tab bracket use karte hain.

//------------------------------------------------------------------------------------

// 4. Object me new property add karna

// let user = {
//     name: "Vishal"
// };

// user.age = 21;                                //obj me kuch add kerna 
// user.name = "Rahul";                         // Property update karna
//delete user.age;                             //Property delete karna

// console.log(user);

//-------------------------------------------------------------------------------

// 7. Object ke andar function (Method)

// let user = {
//     name: "Vishal",
//     greet: function(){
//         console.log("Hello " + this.name);   this current object ko refer karta hai.
//     }
// };

// user.greet(); // Hello Vishal
//------------------------------------------------------------------------------------
// 8. Loop in Object
// ➤ for...in loop

// let user = {
//     name: "Vishal",
//     age: 20,
//     city: "Delhi"
// };

// for(let key in user){
//     console.log(key + " : " + user[key]);
//}

//----------------------------------------------------------------------------------
// 9. Important Object Methods
// 1➤ Object.keys()


// let user = {
//     name: "Vishal",
//     age: 20
// };

// console.log(Object.keys(user));   // ["name", "age"]

//2.Object.values()

//console.log(Object.values(user));
// ["Vishal", 20]

//3➤ Object.entries()

// console.log(Object.entries(user));

/*
[
 ["name", "Vishal"],
 ["age", 20]
]
*/
//-------------------------------------------------------------------------------------
// 10. Nested Object

// let user = {
//     name: "Vishal",
//     address: {
//         city: "Ghaziabad",
//         pincode: 201001
//     }
// };

// console.log(user.address.city); // Ghaziabad

//--------------------------------------------------------------------------
// 1. Array of Objects (Most Important 🔥🔥)

// let students = [
//     {name: "Vishal", marks: 90},
//     {name: "Rahul", marks: 80}
// ];

// console.log(students[0].name); // Vishal

//----------------------------------------------------------------------------------

// 12. Destructuring (Modern JS)

// let user = {
//     name: "Vishal",
//     age: 20
// };

// let {name, age} = user;

// console.log(name); // Vishal

//---------------------------------------------------------------------------------------
// 13. Spread Operator in Object

// let user1 = {name: "Vishal"};
// let user2 = {...user1, age: 20};

// console.log(user2);

//-------------------------------------------------------------------------------------------
// 14. Shallow Copy vs Reference

// let obj1 = {name: "Vishal"};
// let obj2 = obj1;

// obj2.name = "Rahul";

// console.log(obj1.name); // Rahul 😱
//-------------------------------------------------------------------------------------------------
//15. Object.freeze()

// let user = {
//     name: "Vishal"
// };
// Object.freeze(user);
// user.name = "Rahul";
// console.log(user.name); // Vishal
//------------------------------------------------------------------------------------