const pi = 3.14;
let r = prompt("Nhap ban kinh hinh tru:");
let h = prompt("Nhap chieu cao hinh tru:");
let dienTichXungQuanh = 2 * pi * r * h;
alert(`dien tich xung quanh cua hinh tru: ${dienTichXungQuanh}`);
let dienTichToanPhan = 2 * pi * Math.pow(r,2) + dienTichXungQuanh;
alert(`dien tich toan phan hinh tru: ${dienTichToanPhan}`);
let theTichHinhTru = pi * h * Math.pow(r, 2);
alert(`the tich hinh tru: ${theTichHinhTru}`);
let chuViHinhTru = 2 * pi * r;
alert(`chu vi hinh tru: ${chuViHinhTru}`);
