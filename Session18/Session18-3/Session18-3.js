let admin = prompt("Nhap ten nguoi dung:");
if(admin === "ADMIN") {
    let passwork = prompt("Nhap mat khau cua ban:");
    if(passwork === "TheMater") {
        alert(`Welcome`);
    } else if(passwork === null) {
        alert(`Cancelled`);
    } else {
        alert(`Wrong passwork`);
    }
} else if(admin === null) {
    alert("Cancelled");
} else {
    alert(`“I Don’t know you”`);
}