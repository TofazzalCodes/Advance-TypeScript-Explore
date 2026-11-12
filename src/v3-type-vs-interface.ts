// * type alias vs interface

// ? Interface is generally connected to objects
// ? type alias is more connected to literals, union , tuples , primitives

type ID = number;
// ! interface value1 = number;

type Role = "admin" | "member";
// ! interface interface Role = "admin" | "member"

interface User {
    name: string;
    id: ID;
    role: "admin" | "member"
}

const user: User = {
    id: 123,
    name: "abc",
    role: "admin"
}

// Todo: interface

interface Animal {
    spices: string;
}
interface Cat extends Animal{
    breed: string;
}

const cat: Cat = {
    spices: "felix Catus",
    breed: "persian"
}

type Vehicle = {
    brand: string;
}
type Car = Vehicle & {
    model: string
}

const car: Car = {
    brand: "toyota",
    model: "Corolla"
}

interface IEmployee {
    name: string;
}
interface IEmployee{
    id: number;
}

const employee : IEmployee = {
    name: "shahin",
    id: 123
}

