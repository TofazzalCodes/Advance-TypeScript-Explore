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
    console.log(user.address.street);
};
export {};
