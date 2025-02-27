let min = +prompt("So thu nhat la");
let max = +prompt("So thu hai la");
let random =  Math.floor(Math.random() * (max - min -2 + 1)) + (min+1);
alert(random);