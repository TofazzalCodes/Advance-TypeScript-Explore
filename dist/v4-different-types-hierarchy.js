// * Top types 
let helloworld = "hello World";
helloworld = 123;
const somethings = "anythings";
// somethings.length; 
// * Core types 
let somethings2;
const num = 123;
somethings2 = num;
const currentUser = null;
// * unit type
const greet = () => {
    console.log("hello world");
};
somethings2 = greet();
// * Unit sub-type
const anotherGreet = () => {
    console.log("hello world");
    return undefined;
};
const greetings = anotherGreet();
console.log(greetings);
// * bottom type
const getError = (msg) => {
    throw new Error(msg);
};
const x = getError("");
export {};
