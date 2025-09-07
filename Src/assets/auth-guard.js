(function () {
  const token = localStorage.getItem("authToken");

  // Nếu không có token, chuyển hướng về trang đăng nhập
  if (!token) {
    // Sửa đường dẫn đến file login.html của bạn cho đúng
    window.location.href = "./login.html";
  }
})();
