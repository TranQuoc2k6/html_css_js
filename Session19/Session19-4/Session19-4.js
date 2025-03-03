let number = +prompt("Nhap vao mot so bat ky:");
if(number % 3 == 0 && number % 5 == 0) {
    alert(`${number} chia het cho ca 3 va 5`);
} else {
    alert(`${number} khong chia het cho 3 va 5`);
}