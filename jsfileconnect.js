//var = es5
//let,const = es6

// var  a= 10;
// let a = 20;
// const a = 12;

//  let a;       // declaration 
//  let a = 20; //insilization 

 // var se banne wala chij wo window me add hota hai 
 // ye humesha function scoped me hota hai
 //eg===>>> function abcd(){
//  if(true){
//     var a = 10;
//  }     abb is function me kahi bhi used ho sakta hai but other progeaing me nahi hota aaisa 
// }

 // hum fir se declare ker sakte hai same name se error nahi aayega 
 // let,const block scope me hota hai

 //var  a =20;
 //var a = 30;  ko do baar likh sakte hai ya kitne bhi baar likh sakte hai var ko but ye safe nahi
 //  hota program ke liye isliye hum humesha let used kerte hai

 // const tab used kerte hai jab koi value change nahi honi hoti hai jaie 
 //const discount = 12%;
 
 

 //scope (global , block ,functional )
 //-------------------------------------------------------------------

// 1. var = 12 ---->> global scope me hai kisi bhi cerli bresis me nahi hota 


//2. function abc(){
//  let a =12   -------> functional scope me hai jo ek cerli bresis me hota hai
//    }



// 3. {

// let a =12; let se banne wala chij 2 cerli bresis ke ander block scope me hota hai
//   }

// Reassignment and Redeclaration
//------------------------------------------

// 1️⃣ Reassignment kya hota hai?
// 👉 Same variable me nayi value dalna

// var a = 10;
// a = 20;   // ✅ reassignment Allowed hai var aur let dono me

// 2️⃣ Redeclaration kya hota hai?
// 👉 Same variable ko dobara declare karna

// var a = 10;
// var a = 20;   // ✅ redeclaration (sirf var me)

//Temporal Dead Zone (TDZ) kya hota hai?
//------------------------------------------------------------------








// let c = 20 jaise  humare c banane ke pahle ya uper ka area line no.65 se 72  tak 
// temporal dead zone of c kehlata hai  per ye const or let dono ke liye hota hai var ke liye nahi hota hai

// console.log(a); // ❌ ReferenceError
// let a = 10;

// Yaha kya ho raha hai?  a memory me aa chuka hai  lekin jab tak let a = 10 execute nahi hota
// tab tak a TDZ me hota hai

// let a = 10;
// console.log(a); // ✅ 10 correct way


// console.log(b); // ✅ undefined
// var b = 20;
// 👉 var hoisting hota hai with undefined
// 👉 isliye TDZ nahi hota

// Hoisting kya hota hai?
//------------------------------------------------------------------
// Hoisting -->>>> ek variable ko jab  js me banate hai to wo variable  2 hisso me toot jata jai 
//uska declare part uper chala jta hai  aur uska initialization part niche chala jata hai
// isliye jab hum 

//var a = undefined   ---->>   ye line uper chala jata hai
//     a = 10;        ----->>> ye line niche chala jata hai

// var a = 10;  // ✅ isliea hoisting ke karan ye code aise execute hota hai
// console.log(a); // ✅ 10   but let me ye concept nahi hota TDZ KA WAHA CONCET AA JATA HAI 

//but hoisting 3 no me hota hai let var const me 

