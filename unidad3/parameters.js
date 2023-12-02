// One function declares no parameters whereas
// another declares two

const makeNoise = function(){
    console.log("Pling!");
}
makeNoise();

const power = function(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power(2, 10)); // -> 1024