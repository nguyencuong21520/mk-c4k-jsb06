// if(condition){
//     //so something
// }

// let a = 51

// if(a>50){
//     console.log("a lớn hơn 50");
// }else if(a == 50){
//     console.log("a bằng 50");
// }else{
//     console.log("a nhỏ hơn 50");
// }

// let age = prompt("hãy nhập tuổi của bạn")
// age = Number(age)

// if(age < 18){
//     console.log("bạn còn trẻ");
// }else if(age <=30){
//     console.log("bạn là ng lớn");
// }else{
//     console.log("ông bà già");
// }

// if(age <18){
//     console.log("bạn còn trẻ");
// }
// if(age>18 && age <30){
//     console.log("bạn là ng lớn");
// }
// if(age <0 || age>100){
//     console.log("tuổi k hợp lệ");
// }
// if(age > 30){
//     console.log("bạn đã già");
// }

// for(let i = 0; i<=100; i++){
//     if(i%5 == 0){
//         console.log(i);
//     }
// }

// function hoaiDongBuoiSang(thu){
//     console.log("thứ " + thu); ///=> thứ 2
//     console.log("thức dậy");
//     console.log("đánh răng");
//     console.log("ăn sáng");
// }

// function tinhTong(b,a){
//     console.log(`Kết quả của ${a} + ${b} là ${a+b} `);
// }
// function tinhHieu(a,b){
//     console.log(`Kết quả của ${a} - ${b} là ${a-b} `);
// }
// function tinhTich(a,b){
//     console.log(`Kết quả của ${a} x ${b} là ${a*b} `);
// }
// function tinhThuong(a,b){
//     if(b == 0){
//         console.log("không hợp lệ");
//     }else{
//         console.log(`Kết quả của ${a} / ${b} là ${a/b} `);
//     }
// }

// function tinhTong1(b,a){
//     let sum = a+ b
//     return sum
// }

let grade = prompt("Enter a grade: ");
grade = Number(grade); //chuyển từ string sang số
if (grade) {
  //nếu ng dùng nhập vào số thì chạy, k thì báo lỗi
  if (grade > 9) {
    console.log("A");
  } else if (grade > 7.9) {
    console.log("B");
  } else if (grade > 7) {
    console.log("C");
  } else if (grade > 5) {
    console.log("D");
  } else {
    console.log("F");
  }
} else {
  console.log("Grade phải nhập vào là số");
}
