//  các kiểu dữ liệu trong Javascript
//     1. number : 1,2,3, 5.6, 9.6
//     2. string : "hello" . 'aloo', `Buy bye` | phải để trong "" or '' or ``
//     3. boolean : true , false

// console.log("hello");
// console.log("kết quả của 5 + 6 là : ", 5 + 6);
// console.log("kết quả của 5 + 6 là :" + (5+6));
// console.log(`kết quả của 5 + 6 là ${5 + 6} là ${100000/5}`);

// // em tên là gì đấy , em 15 tuổi và em sinh năm 2006

// console.log("em tên là gì đấy , em 15 tuổi và em sinh năm", (2021 - 15));
// console.log(`em tên là gì đấy , em 15 tuổi và em sinh năm ${2021 - 15} `);

// Biến
// let tên Biến => có thể thay đổi  let alo = 9
// var tên Biến => có thể thay đổi  var lolo = 50

// const tên Biến => k thể thay đổi  const pi = 3.14

// let age = prompt("Nhập tuổi của bạn:")

// let ageNumber = parseInt(age)

// console.log(typeof(age));
// console.log(typeof(ageNumber));



// console.log(`em tên là gì đấy , em ${ageNumber} tuổi và em sinh năm ${2021 - ageNumber}`);
// alert(`em tên là gì đấy , em ${ageNumber} tuổi và em sinh năm ${2021 - ageNumber}`)

// toán tử
// cộng : +
// trư : -
// chia : /
// nhân : *
// chia lấy dư: %

// nhập vào 2 số a và b , kết quả của phép chia lấy dư a b

let a_ = prompt("nhập a")
let a = parseInt(a_)

let b_ = prompt("nhập b")
let b = parseInt(b_)

alert(`${a} chia ${b} dư ${a%b}`)
