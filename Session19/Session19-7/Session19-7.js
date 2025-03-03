let number1 = +prompt("Nhap so thu nhat");
let number2 = +prompt("Nhap so thu hai");
let number3 = +prompt("Nhap so thu ba");
let max = number1;
max = (number2 > max) ? number2: max;
max = (number3 > max) ? number3: max;
alert(max);