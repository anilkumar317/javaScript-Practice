const myString = 'developr';

let myNewstring ; 
// solution1
myNewstring = myString[0].toUpperCase() + myString.substring(1);
// solution 2 
myNewstring = myString.charAt(0).toUpperCase() + myString.substring(1);
// solution 3
myNewstring = `${myString.charAt(0).toUpperCase()}${ myString.substring(1)}`;

console.log(myNewstring);




