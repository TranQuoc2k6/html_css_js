let month = +prompt("Nhap vao thang bat ki:");
switch (month) {
    case 1 : case 3 : case 5 : case 7 : case 8 : case 10 : case 12:
        alert(`Thang ${month} co 31 ngay`);
        break;
    case 4: case 6: case 9 : case 11:
        alert(`Thang ${month} co 30 ngay`);
        break;
    case 2:
        alert(`Thang 2 co 28 hoac 29 ngay nam nhuan`);
        break;
    default:
        alert(`Thang khong hop le`);
        break;
}