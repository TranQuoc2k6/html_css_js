let a = prompt("Nhap canh a ");
let b = prompt("Nhap canh b ");
let c = prompt("Nhap canh c ");
let result;
if(a > 0 && b > 0 && c > 0) {
    if (a === b && b === c) {
        alert("Day la tam giac deu");
    } else if (a === b || a === c || b === c) {
        alert("Day la tam giac can");
    } else if (
        a * a + b * b === c * c ||
        a * a + c * c === b * b ||
        b * b + c * c === a * a
    ){
        alert("Day la tam giac vuong");
    }else {
        alert("Day la tam giac thuong");
    }
    
}else {
    alert("ba canh cua tan giac khong tạo ra mot tam giác ");
}