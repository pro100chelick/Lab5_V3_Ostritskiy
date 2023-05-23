let volume = + prompt("Введіть об'єм піраміди:");
let height = + prompt("Введіть висоту піраміди:");

let A = (volume * 3)/height;
let a1 = Math.sqrt(A);
let P = a1*4;
let r = a1/2;
let m = Math.sqrt(height*height+r*r)
let s = (1/2) * P *m;

console.log("Завдання 1"); 
console.log("Знайти площу бічної поверхні правильної чотирикутної піраміди об’ємом V і висотою h. результат вивести з точністю до тисячних");
console.log("Введенні дані: " + volume + " " + height);
console.log("Площа бічної поверхні піраміди:", s.toFixed(3));