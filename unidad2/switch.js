switch(prompt("what is the weather like?"))
{
    case "rainy":
        console.log("Remember to bring an umbrella.")
        break;
    case "cloudy":
        console.log("Go outside")
        break;
    case "sunny":
        console.log("Dress lightly.")
        break;
    default: 
        console.log("Unknown weather type!")
        break;
}