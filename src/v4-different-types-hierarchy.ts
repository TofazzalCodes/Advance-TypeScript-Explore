// * Top types 
let helloworld : any = "hello World";
helloworld = 123;

const somethings : unknown = "anythings"
// somethings.length; 

// * Core types 

let somethings2 : unknown ;
const num: number = 123  ;
somethings2 = num;

// * nullish type

interface User {
    name : string
}

type LoggedInUser = User | null;

const currentUser : LoggedInUser = null;

// * unit type

const greet = () => {
    console.log("hello world"); 
}

somethings2 = greet();

// * Unit sub-type

const anotherGreet = () : undefined => {
    console.log("hello world");
    return undefined   
}

const greetings: void = anotherGreet();
console.log(greetings);

// * bottom type
const getError = (msg: string) : never => {
    throw new Error(msg);
}

const x : string = getError("")



