function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    const texts = [String(i), "Fizz", "Buzz", "FizzBuzz"];

    const value = texts[Number(!(i % 3)) + 2 * Number(!(i % 5))];

    console.log(value);
  }
}
