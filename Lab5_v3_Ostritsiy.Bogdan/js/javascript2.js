function GeronFormula(a, b, c) {
    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    const heights = [(2 / a) * s, (2 / b) * s, (2 / c) * s];
    return Math.max(...heights);
}

let a, b, c;
a = +prompt("Введіть сторону a", ""),
b = +prompt("Введіть сторону b", ""),
c = +prompt("Введіть сторону c", "");

const maxHeight = GeronFormula(a, b, c);

console.log("Завдання 2"); 
console.log("Знайти найбільшу висоту трикутника із вказаними сторонами");
console.log("Введенні дані: " + a + " " + b + " " + c);
console.log("Найбільша висота трикутника: " + maxHeight.toFixed(0));

let js3 = confirm("Ви хочете перейти до розв'язку наступної задачі?");