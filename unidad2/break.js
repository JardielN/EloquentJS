// Finds the first number that is both
// greater than or equal to 20 and divisible by 7

for(let current = 20; ;current = current + 1)
{
    if(current % 7 == 0)
    {
        console.log(current)
        break;
    }
}