// 1. let result = "javascript" + 5; 
// //javascript5 (vì dấu cộng ở đây có công dụng là nối)

// 2. let result = "javascript" - 1; 
// // NaN (Một chuỗi và một số không thể tính toán)

// 3. let result = "3" + 2;
//  // 32 (Nối chuỗi)

// 4. let result = "5" - 4; 
// // 1 (- * / có thể tính được)

// 5. let result = isNaN("123"); 
// false (vì 123 là một chuỗi số hợp lệ)

// 6. let result = isNaN("hello");
// true (vì hello không chuyển thành được số)

// 7. let result = Number.isNaN("123");
// false (vì 123 không phải NaN, và Number.isNaN chỉ trả về true nếu giá trị là NaN)

// 8. let result = Number.isNaN(NaN);
// true (ngược lại như trên)