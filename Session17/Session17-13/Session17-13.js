let soTienGui = prompt("Nhap so tien gui:");
let soThangGui = prompt("Nhap so thang gui:");
let soTienLaiMoiThang = 4.3 / 100 / 12;
let soTienLaiGui = soTienGui * soThangGui * soTienLaiMoiThang;
soTienLaiGui = soTienLaiGui.toFixed(2);
alert(soTienLaiGui);