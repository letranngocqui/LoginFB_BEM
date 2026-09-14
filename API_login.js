function callAPI(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    console.log("Mốc hiện tại:", xhr.readyState, "| Mã trạng thái:", xhr.status);

    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const duLieu = JSON.parse(xhr.responseText);
        callback(duLieu);
      } else {
        console.log("Hỏng mã rồi, mã lỗi là:", xhr.status);
      }
    }
  };
  xhr.send();
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const danhSachTen = ["Ngọc Quí", "Ngoc Qui", "bo tay cham com"];
      const queryString = danhSachTen.map(ten => `name[]=${encodeURIComponent(ten)}`).join("&");

      const url = `https://api.agify.io?${queryString}`;

      callAPI(url, function (duLieu) {
        duLieu.forEach(item => {
          console.log(`${item.name}: Tuổi dự đoán là ${item.age}`);
        });
      });
    });
  }
});
