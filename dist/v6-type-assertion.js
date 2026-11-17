// * Type assertion 
const someStatus = "pending";
const showStatus = (status) => {
    console.log("your current application status is🧨" + status);
};
showStatus(someStatus);
console.log("hello number 6");
const config = {
    port: 5000,
};
// const currentPort : number = config.port!;
const currentPort = config.port;
// * constant assertion 
const configuration = {
    port: 8000,
    prefix: "/api/v1"
};
console.log("hello");
export {};
