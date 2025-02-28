let d1 = prompt("Vui lòng nhập vào ngày ");
let d2 = prompt("Vui lòng nhập vào ngày ");
let date1 = new Date(d1);
let date2 = new Date(d2);
let timeDifference = Math.abs(date2 - date1);
let dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
alert(`Độ lệch là ${dayDifference} ngày`);
