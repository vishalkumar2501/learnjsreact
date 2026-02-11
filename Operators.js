//1 Arithemetic Operators ==>>> +, -, *, /, % (modulus), ++ (increment), -- (decrement)

// Example:
                    //Addition 
// let a = 10;
// let b = 5;
// let sum = a+b 
                       //concatenation
// let str1 = "Hello, ";
// let str2 = "World!";
// let greeting = str1 + str2;
// console.log(greeting);

 //     subtraction
// let a = 10;
// let b = 5;
// let difference = a - b;
// console.log(difference);

//   multiplication
// let a = 10;
// let b = 5;
// let product = a * b;
// console.log(product);

//   division
// let a = 10;
// let b = 5;
// let quotient = a / b;
// console.log(quotient);

// ** exponentiation
// let a = 2;
// let b = 3;
// let result = a ** b; // 2 raised to the power of 3
// console.log(result); // Output: 8


//-----------------------------------------------------------------------------------------------

//2 Assignment Operators   ===>>>>     =, +=, -=, *=, /=, %=

// Example:
// let a = 10; // Assignment operator  ISKA KAAM OTA HAI VALUE DALNA EK VARIABLE ME
// a += 5; // Equivalent to a = a + 5
// console.log(a); // Output: 15

// a -= 3; // Equivalent to a = a - 3
// console.log(a); // Output: 12

// a *= 2; // Equivalent to a = a * 2
// console.log(a); // Output: 24

// a /= 4; // Equivalent to a = a / 4
// console.log(a); // Output: 6

// a %= 5; // Equivalent to a = a % 5
// console.log(a); // Output: 1(REMAINDER)


//-----------------------------------------------------------------------------------------

//3 Comparison Operators      ---->>>>   ==, ===, !=, !==, >=, <=, <, >
 
// Example:

// let a = 10;
// let b = "10";
// console.log(a == b); // Output: true (loose equality) ye data types nahi check kerta 

// console.log(a === b); // Output: false (strict equality) ye data types check kerta hai dono taraf ka 

// console.log(a != b); // Output: false (loose inequality) ye data types nahi check kerta

// console.log(a !== b); // Output: true (strict inequality) ye data types check kerta hai dono taraf ka

// console.log(a > 5); // Output: true

// console.log(a < 20); // Output: true

// console.log(a >= 10); // Output: true

// console.log(a <= 10); // Output: true

//-------------------------------------------------------------------------------------------
//logical Operators

// 1️⃣ Logical AND (&&)  ===>>  true && true ===>> true

// 2️⃣ Logical OR (||)   ===>>  true || false ===>> true

// 3️⃣ Logical NOT (!)    ===>>  !true ===>> false

//------------------------------------------------------------------------------------------------
//Unary operators

// 1️⃣ Unary Plus (+)   ===>>  +5 ===>> 5

// 2️⃣ Unary Negation (-)   ===>>  -5 ===>> -5

// 3️⃣ Increment (++)   ===>>  let a = 5; a++; console.log(a); // Output: 6

// 4️⃣ Decrement (--)   ===>>  let a = 5; a--; console.log(a); // Output: 4

// typeof operator  ===>>  typeof 5 ===>> "number"

//typeof 2 jagah galat answer batata hai 

// 1. typeof null ===>> "object" (ye ek JavaScript ka bug hai, null ko object ke roop me treat karta hai)

// 2. typeof NaN ===>> "number" (NaN ka matlab "Not-a-Number" hai, lekin typeof operator ise number ke roop me treat karta hai)

// 3. typeof [] ===>> "object" (arrays ko bhi object ke roop me treat karta hai) 

// type ye 3 jagah galat answer deta hai 

//------------------------------------------------------------------------------------------------
//Ternary Operator

// condition ? expressionIfTrue : expressionIfFalse

// Example:

// let age = 18;

// let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
// console.log(canVote); // Output: "Yes, you can vote."


