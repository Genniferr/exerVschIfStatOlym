//Prelim
//1
if( 5 > 3){
  console.log("is greater than")
}
//2
var cat ="cat"
if(cat.length === 3){
  console.log("is the length")
}
//3
if("cat" === "dog"){
  console.log("they are the same")
} else{
  console.log("not the same")
}

//Bronze
//1
var person = {
  name: "Bobby",
  age: 12
}

if(person.age >=18){
  console.log(person.name + " is allowed to go to the movie")
} else {
console.log(person.name + " is NOT allowed to go to the movie")
}
//2
var person = {
  name: "Bobby",
  age: 12
}

if(person.name[0] === "B"){
  console.log(person.name + " is allowed to go to the movie")
} else {
console.log(person.name + " is NOT allowed to go to the movie")
}

//3
var person = {
  name: "Bobby",
  age: 12
}

if(person.age >=18 && person.name[0] === "B"){
  console.log(person.name + " is allowed to go to the movie")
} else {
console.log(person.name + " is NOT allowed to go to the movie")
}

//Silver
//1
if(1 === "1"){
  console.log("strict")
  } else if(1 == "1"){
    console.log("abstract")
  } else {
    console.log("not equal at all")
  }

//2
if (1 <= 2 && 2 ===4){
  console.log("yes")
} else{
  console.log("no")
}
//Gold
//1
if(typeof "dog" === "string") {
  console.log("dog")
}

//2
if(typeof "true" === "boolean"){
  console.log("is boolean")
} else {
console.log("is NOT boolean")
}

//3
if(typeof variableName != "undefined"){
  console.log("variableName")
} else {
console.log("Variable undefined")
}

//4
if("s" > 12){
  console.log("S is Greater")
} else {
  console.log ("S is not Greater")
}

//5
var myNum = 10;
if (myNum %2 ===0){
   console.log("The number is even")
} else {
  console.log ("The number is odd")
}