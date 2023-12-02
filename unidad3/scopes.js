let x = 10;
if(true)
{
    let y = 20;
    var z = 30;
    console.log(x + y + z); // -> 60
}
// y is not visible here
console.log(x + z); // -> 40

// Each scope can "look out" into the scope around it
// so x is visible in the block example.
// The exception is when multiple bindings have the 
// same name.

const halve = function(n){
    return n / 2;
};
let n = 10;
console.log(halve(100)); // -> 50
console.log(n); // -> 10