// Bai 1: Điểm trung bình: khai báo 3 điểm môn, tính trung bình, in ra.
function bai1(diem1, diem2, diem3) {
  const diemTB = (diem1 + diem2 + diem3) / 3;
  console.log("Dap an bai 1: Diem trung binh = " + diemTB);
}
bai1(1, 2, 3);

// Bai 2: Chu vi + diện tích hình chữ nhật: width, height -> tính, in.
function bai2(width, height) {
  const chuVi = (width + height) * 2;
  const dienTich = width * height;

  console.log(`Dap an bai 2:\nchu vi = ${chuVi}\ndien tich = ${dienTich}`);
}
bai2(3, 4);

// Bai 3: Đổi C sang F: celsius = 30 -> fahrenheit = celsius * 9/5 + 32, in "30°C = 86°F".
function bai3(celsius) {
  const fahrenheit = celsius * 9 / 5 + 32;
  console.log(`Dap an bai 3: ${celsius} độ C = ${fahrenheit} độ F`);
}
bai3(40);

// Bai 4: Tính tiền tip: billAmount, tipPercent = 10 -> tip + tổng, in.
function bai4(billAmount, tipPercent = 10) {
  const tip = billAmount * 0.1;
  const result = billAmount + tip;
  console.log(`Đáp án bài 4: tổng + tip = ${result}`);
}
bai4(100);

// Bai 5: Kiểm tra chẵn/lẻ: dùng % 2 === 0 + ternary, in "Số 7 là lẻ".
function bai5(n) {
  const so = n % 2 === 0 ? "chẵn" : "lẻ";
  console.log(`Dap an bai 5: Số ${n} là ${so}`);
}
bai5(7);

// Bai 6: BMI: can nang / (chieu cao * chieu cao), in kết quả.
function bai6(canNang, chieuCao) {
  const BMI = canNang / (chieuCao * chieuCao);
  console.log(`Dap an bai 6: BMI = ${BMI}`);
}
bai6(50, 165);
