//1. First type of function = >>> FUNCTION STATEMENT

// function chacha() {
//     console.log("Happy New Year");

// }
// chacha();

//---------------------------------------------------------------------------------------

//2.Second type of function ===>>>> FUNCTION EXPRESSION

// let chachi = function(){
//     console.log("HAPPY NEW YEAR");
// }

// chachi();

//------------------------------------------------------------------------------------------
//3. THIRD TYPE OF FUNCTION =>>> FAT ARROW FUNCTION

// let chachwa = ()=>{
//     console.log("Happy New Year");
// }
// chachwa();

//---------------------------------------------------------------------------------------------
//PARAMETERS AND ARGUMENT
 
// function Dance(nach){
//     console.log(`${nach} nach raha hai `)

// }
// Dance('ghoda' );
// Dance( "gadha");
// Dance( "bhalu");


// function add(v1 , v2){      //v1,v2 is a parameters
//     console.log(v1+v2);
// }
// add(5 , 5);                 //5 ,5 is a argument 
// add(111, 222);
// add(22653  , 262728);     

//-----------------------------------------------------------------------------------------
//Default , rest , spread parameters

//1. Default parameters

// function abcd( v1 = 0 , v2 =6){
//     console.log(v1+v2);   // Humne kuch bheji he nahi or  or v1 or v2 me kuch value le lee to ussee
// }                          // default parameters kathe hai 

// abcd();  


//---------------------------------------------------------------------------------------------
//2.rest parameters

// function rest(...value){ // jab arguments kai saare ho to humein he parameters bananae padege , to 
//     console.log(value)  //  isse bachne ke liye hum rest ka used kerte hai or issi ko spread
// }                      // bhi kahte hai  isko ... 3 dot se hota hai 
// rest(5,9,20,50,)      // kub rest or kub spread hota hai ??
 
//jab bhi ... function ka parameters space me luge hote hai to usse rest operator bolte hai
//jab bhi ... arrays and objects mein luge ho to ussse spread operator kathe hai 

//--------------------------------------------------------------------------------------------

//3. spread oprator kya hota hai example 

 
//-----------------------------------------------------------------------------------------------

// return = jaha se aaye ho wahi daal dena is return 

// function abcd(){
//     return 12;

//}
//value 87 no. line se call huaa hai per jab bhi execute hoga wapas line no. 87 me aaker he
// execite hoga jaise wapas aaker wo valu variavle me store hoga then print hoga 



// let valu=abcd();
// console.log(valu);
//-------------------------------------------------------------------------------------

//first class functions -> function ko value ke tarah treat ker sakte hai 

// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("KNIGHT KODERS");

// })


//----------------------------------------------------------------------------------------------
//high order function -> wo functions hote hai jo ki return kare function ya fir accept kare ek 
//function apne parameter mein

//1. function hof( value ){ // abb ye h.o.f kahlata hai

// }
// hof(function(){

// })


//2. function hof(){   //also ye bhi higher order functions hota hai 
     
//     return function(){
//         console.log("kinght riders"); 
//     }
// }
// hof()()

//--------------------------------------------------------------------------------------------------

//pure vs impure functions 

//pure-> aaisa function jo ke bahar ke value ko na badle wo pure function hote hai

// let a =12;
 
// function abcd(){
//     console.log("hey hey hey hey ");
// }
//impure -> aaisa function jo ke bahar ke value badal dete hai wo impure function kahlate hai  

// function hui(){
//     a++;   //ye 12 ko badal dega ++ ker ke to ye impure function hote hai 
// }

//-------------------------------------------------------------------------------------------------
//closures kya hote hai ->ek function jo return kare ek or function aur return hone wala function
// humesha use karega parent function ka koi variable 

// function abcd(){
//     let a = 20;
//     return function(){
//         console.log(a);
//     }
// }

//---------------------------------------------------------------------------------------
// lexial scope kya hota hai

// function abcd(){
//     let a = 50;  // ye value pure function me kahi bhi used ho sata hai
//     function bcdf(){
//         let b = 60; // ye value shirf  bcdf and cdefg me he used ho sakta hai
//         function cdefg(){     
//             let c = 39;     // ye value only cdefg me he used ho sakta hai yahi lexial scop hoa hai 
//         }
//     }
// }
//--------------------------------------------------------------------------------------------

//IIFE (immediately function Expression) kua hota hai 

// (function(){
//     console.log("heyheyheyhey"); //ye  function ko call wagera nahi kerna padta hai ye call ho chuka hai
// })();

//----------------------------------------------------------------------------------------------

//Hoisting difference between decleration and expression

// abcd();

// function abcd(){                        // ye only function statement me he chalte hai 
//     console.log("heyheyheyhey");
// }

// let abcd = function(){               // but ye function expression  me kaam nahi kerta hoisting ka concept
//     console.log("heyheyheyhey");
// }

//--------------------------------------------------------------------------------------------------