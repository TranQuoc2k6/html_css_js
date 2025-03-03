let year = +prompt("Nhap so nam kinh nghiem cua ban");
if(year < 1) {
    alert(`Quan li`);
} else if (year <= 3) {
    alert(`Nhan vien co kinh nghiem`);
} else if(year <= 6) {
    alert (`Chuyen vien`);
} else if(year > 6) {
    alert(`Quan li`)
}