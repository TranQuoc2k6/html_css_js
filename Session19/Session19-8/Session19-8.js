let month = +prompt("Nhap thang bat ky trong nam:");
switch (month) {
    case 1: case 2: case 3:
        alert("Mua xuan");
        break;
    case 4: case 5: case 6:
        alert("Mua ha");
        break;
    case 7: case 8: case 9:
        alert("Mua thu");
        break;
    case 10: case 11: case 12:
        alert("Mua dong");
        break;
    default:
        alert("Thang khong ton tai");
        break;
}