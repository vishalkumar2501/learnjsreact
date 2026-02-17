// ✅ Promise kya hota hai JavaScript me?

// 👉 Promise ek object hota hai
// 👉 Jo future me milne wale result ka wada karta hai

// Matlab:

// “Abhi result nahi mila… lekin future me milega.”
//---------------------------------------------------------------------------------
// 🔵 Promise ke 3 States

// .Pending → abhi wait chal raha hai
// .Resolved (Fulfilled) → kaam success
// .Rejected → kaam fail
//---------------------------------------------------------------------------------

// 🟢 Basic Syntax
// let promise = new Promise((resolve, reject) => {

//     let success = true;

//     if(success){
//         resolve("Kaam ho gaya ✅");
//     } else {
//         reject("Error aa gaya ❌");
//     }

// });

// 🟡 Promise ko handle kaise karte hain?
// .then() aur .catch() se

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
//--------------------------------------------------------------------------------
// 🔵 Example 1 – Simple Success & Error

// let promise = new Promise((resolve, reject) => {
//     let marks = 40;
//     if(marks >= 33){
//         resolve("Pass ho gaye ✅");
//     } else {
//         reject("Fail ho gaye ❌");
//     }
// });
// promise
//     .then((result) => {          👉 Agar marks 40 → .then() chalega
//         console.log(result);
//     })
//     .catch((error) => {          👉 Agar marks 20 → .catch() chalega
//         console.log(error);
//     });

//===================================================================================
// 🔵 Example 2 – setTimeout (Async feel samajhne ke liye)

// function orderPizza(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Pizza delivered 🍕");
//         }, 2000);

//     });
// }

// orderPizza()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// 👉 2 second baad output aayega
// 👉 Ye real async behaviour hai
