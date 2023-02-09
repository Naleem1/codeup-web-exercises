// let a = 1;
// let b = a++;
// let c = ++a;
// // what is the value of a, b, and c?
// console.log(c)
//ANSWER: 1,1,3

// let d = "hello";
// let e = false;
//
// d++;
// e++;
//
// console.log(e++)
// ANSWER: Nan, 1

// let perplexed; // perplexed is undefined (no value is assigned)
// console.log(perplexed  +2)
// Answer: NaN

// let price = 2.7;
// console.log(price.toFixed(2))
// Answer: 2.70

// let price = "2.7";
// console.log(price.toFixed(2));
// Answer: Error

// console.log(isNaN(0))

// console.log(isNaN(1))
//
// console.log(isNaN(""))
//
// console.log(isNaN("string"))

// console.log(isNaN("0"))
//
// console.log(isNaN("1"))
//
// console.log(isNaN("3.145"))
//
// console.log(isNaN(Number.MAX_VALUE))
//
// console.log(isNaN(Infinity))
//
// console.log(isNaN("true"))
//
// console.log(isNaN(true))
//
// console.log(isNaN("false"))
//
// console.log(isNaN(false))

// to illustrate why the isNaN() function is needed:
// NaN == NaN

// !true
//
// !false
//
// !!true
//
// !!false
//
// !!0
//
// !!-0
//
// !!1
//
// !!-1
//
// !!0.1
//
// !!"hello"
//
// !!""
//
// !!''
//
// !!"false"
//
// !!"0"

// 2.
// let sample = "Hello Codeup"
// let length = sample.length
// let upperSample = sample.toUpperCase()
// let lowerSample = sample.toLowerCase()
// let greeting = `${sample} Students.`
// let greeting2 = greeting.replace("Students","Class" )
// let sub = sample.indexOf("Codeup")
// let sub2 = sample.substring(sub,12).trim()
// console.log(sub2)
// Answer: 12,-1,6,

// 3.
// let movies = ["The little mermaid", "Brother Bear", "Hercules"]
// let rentalDays = 9;
// let moviePrice = 3;
// let rental = rentalDays * moviePrice


// let companies = ["Google","Amazon","Facebook"]
// let Gpay = 400
// let Apay = 380
// let Fpay = 350
//
// let fbTotal = 350 * 10
// let gTotal = 400 * 6
// let aTotal = 380 * 4

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule
// let classFull = false
// let classScheduleConflict = false
// let youAreEnrolled = classFull && classScheduleConflict
// console.log(youAreEnrolled)


// let productOffer = 2
// let productOfferExpired= false
// let premiumMember = true
// let productOfferApplied = productOffer && productOfferExpired || premiumMember
// console.log(productOfferApplied)

// 4.
// let username = 'codeup';
// let password = 'notastrongpassword';
//
// let passwordConditions = password.length >= 5 && password != username
// let userNameConditions = username.length <= 20 && username != ""
//
// console.log(passwordConditions)



