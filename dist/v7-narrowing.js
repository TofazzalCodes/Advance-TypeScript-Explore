// * type of 
let x = ["abc"];
console.log(typeof x === "object");
// * type guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
};
const loggedInUser = {
    name: "mir",
    address: {
        street: "ABCas"
    }
};
const showAddress = (user) => {
    if (user && user.address) { //ei khane truthiness kaj korese 
        console.log(user.address.street);
        return;
    }
    throw new Error("User not found");
};
// * some caveat of Type Guard
const printAll = (x) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("");
    }
};
// printAll(null)
// * Equality
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const printAl = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log("");
};
printAl("dfjdfk");
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
// * "instanceof" check
// const date = new Date();
// const err = new Error("something went wrong");
// console.log(date instanceof Date);
// console.log(err instanceof Error);
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
showDate("12-14-1983");
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
        return;
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
