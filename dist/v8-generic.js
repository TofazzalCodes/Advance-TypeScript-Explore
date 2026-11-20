const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("ABC");
const numberArr = wrapInArray(2343);
stringArr.map((item) => item.toUpperCase());
export {};
