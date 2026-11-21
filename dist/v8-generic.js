const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("ABC");
const numberArr = wrapInArray(2343);
stringArr.map((item) => item.toUpperCase());
numberArr.map((num) => num.toFixed());
const userRes = {
    statusCode: 200,
    success: true,
    data: {
        name: "sddfd",
        role: "sfre"
    }
};
export {};
