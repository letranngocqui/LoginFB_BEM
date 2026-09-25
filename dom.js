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
  const submitBtn = document.querySelector("button[type='submit']");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const url = "https://dummyjson.com/products?limit=5";

      let resultContainer = document.getElementById("result-container");

      if (!resultContainer) {
        resultContainer = document.createElement("div");
        resultContainer.id = "result-container";
        resultContainer.style.marginTop = "15px";
        resultContainer.style.textAlign = "center";
        resultContainer.style.color = "green";
        submitBtn.parentNode.insertBefore(resultContainer, submitBtn.nextSibling);
      }

      while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
      }
      const loadingTextNode = document.createTextNode("Đang tải danh sách sản phẩm...");
      resultContainer.appendChild(loadingTextNode);

      callAPI(url, function (duLieu) {
        resultContainer.removeChild(loadingTextNode);
        const danhSachSanPham = duLieu.products;
        danhSachSanPham.forEach(item => {
          const paragraph = document.createElement("p");
          const infoTextNode = document.createTextNode(`Sản phẩm: ${item.title} - Giá: $${item.price}`);
          paragraph.appendChild(infoTextNode);
          resultContainer.appendChild(paragraph);
        });
      });
    });
  }
});
