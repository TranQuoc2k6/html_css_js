let a = +prompt("Nhap so a:");
let b = +prompt("Nhap so b:");
let c = +prompt("Nhap so c:");
let denta = parseFloat(Math.sqrt(Math.pow(b, 2) - (4 * a * c)));
if (denta == 0) {
    console.log(`Denta = ${denta.toFixed(1)} = 0 : phuong trinh co nghiem kep`);
    let nghiem1 = parseFloat((-b) / (2 * (a)))
    console.log(`x1 = ${nghiem1}`);
    console.log(`x2 = ${nghiem1}`);
} else if (denta > 0) {
    console.log(` Denta = ${denta.toFixed(1)} > 0 : phuong trinh co 2 nghiem phan biet`);
    let nghiem2 = parseFloat (  ((-b) + (Math.sqrt(denta)) )  / (2 * (a)) )  ; 
    let nghiem3 = parseFloat (  ((-b) - (Math.sqrt(denta)) )  / (2 * (a)) )  ;
    console.log(`x1 = ${nghiem2.toFixed(2)}`);
    console.log(`x2 = ${nghiem3.toFixed(2)}`);
}else {
    console.log(` Denta = ${denta.toFixed(1)} < 0 : phuong trinh vo nghiem`);
}
