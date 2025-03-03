let strings = prompt("Nhap vao mot chuoi bat ky:");
if (strings.length > 0) {
    if (strings.includes(" ") === true) {
        alert("Chuoi chua dau cach");
    } else {
        alert("Chuoi khong chua dau cach");
    }
} else {
    alert("Chuoi khong ton tai");
}