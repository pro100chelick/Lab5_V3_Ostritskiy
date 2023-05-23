function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      }
    }
    return true; 
}
  
function sumOfPrimes(n) {
    let sum = 0; 
    for (let i = 2; i < n; i++) {
      if (isPrime(i)) { 
        sum += i; 
      }
    }
    return sum; 
}

let n = +prompt("введіть число N", "");
const sum = sumOfPrimes(n); 

console.log("Завдання 3"); 
console.log("Задано деяке число N. Скласти програму пошуку суми простих чисел менших за N.");
console.log("Введенні дані: " + n);
console.log("Сума простих чисел менших за N: " + sum); 

let js4 = confirm("Ви хочете перейти до розв'язку наступної задачі?");
  