function addNumbers(numArray){
    let sum = 0;
    if (Array.isArray(numArray)){
        for (let i = 0; i < numArray.length; i++){
            sum += numArray[i];
        }
    }
    else {
        sum = "incorrect input"
    }
    return sum;
}

function getCurrentDate(){
    const now = new Date();
    return now.toDateString();
}

function arrayToString (stringArray){
    let con = "";
    if (Array.isArray(stringArray)){
        for (let i = 0; i < stringArray.length; i++){
            con += stringArray[i];
        }
    }
    else {
        con = "incorrect input";
    }
    return con;
}

function findMaxNumber(){
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        if (arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}

function getDigits(s){
    let digits = "";
    const chars = Array.from(s);
    for (let i = 0; i < chars.length; i++){
        if (!Number.isNaN(chars[i])){
            digits += chars[i];
        }
    }
    return digits;
}

function reverseString(s){
    return [...s].reverse().join("");
}