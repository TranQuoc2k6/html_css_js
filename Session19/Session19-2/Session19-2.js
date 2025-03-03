let character = prompt("Nhap vao 1 ky tu chu cai:");
if (character.length > 1) {
    alert("Khong phai la chu cai");
} else if ('a' <= character && character <= 'z' || 'A' <= character && character <= 'Z') {
    alert(`Ky tu ${character} la chu cai`);
} else {
    alert("Khong phai chu cai");
}
