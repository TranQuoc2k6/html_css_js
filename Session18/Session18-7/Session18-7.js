let number1 = +prompt("Nhap so a: ");
let number2 = +prompt("Nhap so b: ");
let choose = prompt("moi ban nhap cac tinh ( +, -, *, /");
switch (choose) {
    case "+":
        alert(number1 + number2);
        break;
    case "-":
        alert(number1 - number2);
        break;
    case "*":
        alert(number1 * number2);
        break;
    case "/":
        alert(number1 / number2);
        break;
    default:
        alert("Khong ton tai");
        break;
}