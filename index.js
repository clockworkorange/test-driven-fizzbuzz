module.exports = (num) => {
    if(multipleOf3(num) && !multipleOf5(num)) {
        return 'Fizz'
    }
    if(!multipleOf3(num) && multipleOf5(num)) {
        return 'Buzz'
    }
    if(multipleOf15(num)) return 'FizzBuzz';
    return `${num}`
};

const multipleOf3 = number => (number % 3 === 0);
const multipleOf5 = number => (number % 5 === 0);
const multipleOf15 = number => (number % 15 === 0);