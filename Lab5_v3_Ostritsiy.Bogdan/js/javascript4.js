function removeZeros(number) {
  let str = number.toString();

  if (str[0] === '0') {
    return "Ви вказали невірні дані. Число починається з нуля.";
  }

  let replacedStr = str.replace(/0/g, '*');
  return replacedStr;
}

let number = prompt("Введіть число з нулями", "");
let noZeros = removeZeros(number);

console.log("Завдання 4");
console.log("Із даного натурального числа вилучити всі нулі та замінити їх зірочками.");
console.log("Введені дані: " + number);
console.log("Результат: " + noZeros);
