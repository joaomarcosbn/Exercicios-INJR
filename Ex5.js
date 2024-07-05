function fizzBuzzTest(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  }
  
  for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Gera número aleatório entre 1 e 100
    fizzBuzzTest(randomNum);
  }