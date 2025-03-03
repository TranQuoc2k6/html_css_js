let year = +prompt("Nhap nam bat ky:");
if (( year % 4 === 0 && year  % 100 !== 0) || (year % 400 === 0)) {
    alert(`${year} la nam nhuan`);
} else {
    alert(`${year} khong phai la nam nhuan`);
}