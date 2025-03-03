let math = +prompt("Nhap diem toan:");
let literature = +prompt("Nhap diem van:");
let english = +prompt("Nhap diem tieng anh:");
let averageScore = (math + literature + english) / 3;
alert(averageScore);
if (averageScore < 5.0 ) {
    alert(`Yeu`);
} else if (averageScore < 6.5) {
    alert(`Trung binh`);
} else if (averageScore < 8.0) {
    alert(`Kha`);
} else {
    alert(`Gioi`);
} 


