// * type of 

let x = ["abc"];
console.log(typeof x === "object");

// * type guard

const print = (value: string | number ) => {
    if(typeof value === "string"){
        return value.toUpperCase()
    }
    else{
        return value.toFixed(2)
    }
};

// * Truthiness

type User = {
    name: string;
    address: {
        street: string;
    };
} | null ;

const loggedInUser : User = {
    name: "mir",
    address: {
        street : "ABCas"
    }
};

const showAddress = (user: User) => {
    console.log(user!.address.street);
    
}