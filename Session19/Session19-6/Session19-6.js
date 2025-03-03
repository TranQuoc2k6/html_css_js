alert("Giai phuong trinh bac 2:");
let a = +prompt("Nhap so a");
let b = +prompt("Nhap so b");
let c = +prompt("Nhap so c");
let denta = b * b - 4 * a * c;
let nghiemKep = -b / 2 * a;
let x1 = (- b + Math.sqrt(denta)) / 2 * a;
let x2 = (- b - Math.sqrt(denta)) / 2 * a;
if (a == 0) {
    alert("phuong trinh tro ve bac 1");
} else {
    if (denta < 0) {
        alert("phuong trinh vo nghiem");
    } else if (denta = 0) {
        alert(`phuong trinh co nghiem kep x1 = x2 = ${nghiemKep}`);
    } else {
        alert(`phuong trinh co 2 nghiem phan biet: ${x1}; ${x2}`);
    }
}