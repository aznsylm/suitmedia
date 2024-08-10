let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".menu a");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    navbar.classList.add("hidden");
  } else {
    // Scroll ke atas
    navbar.classList.remove("hidden");
  }

  if (scrollTop > 100) {
    // Tambahkan transparansi saat scroll melebihi 100px
    navbar.classList.remove("transparent");
  } else {
    // Kembalikan transparansi saat di atas 100px
    navbar.classList.add("transparent");
  }

  lastScrollTop = scrollTop;
});

// Menentukan halaman yang sedang dikunjungi
function setActiveMenuItem() {
  const currentPage = window.location.pathname.split("/").pop(); // Mendapatkan nama file halaman

  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Panggil fungsi untuk menetapkan active state
setActiveMenuItem();
