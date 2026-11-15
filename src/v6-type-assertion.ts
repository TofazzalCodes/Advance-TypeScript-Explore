// * Type assertion 

// * "as" syntax

 type Status = "pending" | "approved" | "rejected";

 const someStatus: string = "pending";

 const showStatus = (status: Status) => {
    console.log("yout current application status is🧨" + status);  
 }

 showStatus(someStatus as Status)

 console.log("hello number 6");

// * not-null assertion

interface Config {
    port? : number;
}
const config: Config = {
    port: 5000,
}

// const currentPort : number = config.port!;

const currentPort : number = config.port as number;

// * constant assertion 

const configuration = {
    port: 8000, 
    prefix: "/api/v1"
} as const; 

 