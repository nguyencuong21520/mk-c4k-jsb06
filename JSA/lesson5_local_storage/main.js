// let name = "Cường alo alo";

// // lưu vào

// localStorage.setItem("tenCuaCuong", name);
//lấy ra
// let result = localStorage.getItem("tenCuaCuong");

// localStorage.clear()

// console.log(result);

let users = [
  {
    userName: "a",
    password: "a",
  },
  {
    userName: "b",
    password: "a",
  },
  {
    userName: "c",
    password: "a",
  },
];
        // lưu vào

// Bước 1: chuyển dữ liệu sang dạng string
let userString = JSON.stringify(users);
// Bước 2: lưu vào localStorage
localStorage.setItem("users", userString);

// rút gọn:
localStorage.setItem("user1", JSON.stringify(users));
        // lấy ra
// Bước 1: lấy dữ liệu ra từ local
let result = localStorage.getItem("users");
// Buowsc2: chuyển về dạng object
let finallyResult = JSON.parse(result);
// rút gọn
let result1 = JSON.parse(localStorage.getItem("user1"));


console.log(result1);
console.log(finallyResult);

// - chỉ lưu đc kiểu dữ liệu string

// let btvn = [1,2,3] 
// lưu mảng btvn vào local
// lấy mảng btvn ra từ local