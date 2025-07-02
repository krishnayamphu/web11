const time = new Date();

let day = time.getDay() + 1; //0-6
let date = time.getDate();
let mo = time.getMonth() + 1; //0-11
let y = time.getFullYear();

let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();
let ms = time.getMilliseconds();

document.writeln(time + "<hr>");
document.writeln(day + ", " + date + ", " + mo + ", " + y);
document.writeln("<hr>");
document.writeln(h + " : " + m + " : " + s + ", " + ms);
