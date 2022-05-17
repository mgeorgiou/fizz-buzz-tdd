const Solution = ({input}) => {
    // if (isNaN(input)) {
    //     return "Error: The input must be numeric"
    // }

    const multiple3 = input % 3 === 0;
    const multiple5 = input % 5 === 0;

    if (multiple3 && multiple5) {
        return "FizzBuzz"
    }
    if (multiple3) {
        return 'Fizz'
    }
    if (multiple5) {
        return "Buzz"
    }
    
    return input
}

export default Solution;