// ARROW FUNCTIONS

const power = (base, exponent) => {
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result += base;
    }
    return result;
}

// These two definitions of square() do the same thing

const square1 = (x) => {return x * x};
const square2 = x => x * x;

const horn = () => {
    console.log("Toot");
}