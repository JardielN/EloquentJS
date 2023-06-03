// FIZZBUZZ
for(let n = 0; n <= 100; n++)
{
    if(n === 0) continue;
    output = "";
    if(n % 3 == 0) output += "Fizz";
    if(n % 5 == 0) output += "Buzz";
    console.log(output || n);
}