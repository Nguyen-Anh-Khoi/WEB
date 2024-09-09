    // search-mobile
    // Lấy tham chiếu đến các phần tử cần thiết
    const mobilesearch = document.getElementById('mobilesearch');
    const nav = document.getElementById('navbarNav');

    // Thêm sự kiện click vào nút tìm kiếm
    mobilesearch.addEventListener('click', function () {
      // Kiểm tra xem navbarNav đang hiển thị hay không
      if (navbarNav.style.display !== 'none') {
        // Nếu đang hiển thị, ẩn đi
        navbarNav.style.display = 'none';
      } else {
        // Nếu không, hiển thị lại
        navbarNav.style.display = 'block';
      }
    });

    //
    // chi tiết sản phẩm : khi click vào hình trong danh sách thì đổi ảnh chính của sản phẩm
    document.addEventListener("DOMContentLoaded", function() {
      // Lấy tất cả các ảnh trong images-list
      const thumbnailImages = document.querySelectorAll(".images-list img");
    
      // Lấy ảnh chính (images-main)
      const mainImage = document.querySelector(".images-main img");
    
      // Thêm sự kiện click cho mỗi ảnh trong images-list
      thumbnailImages.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function(event) {
          // Ngăn chặn hành vi mặc định của thẻ 'a'
          event.preventDefault();
    
          // Thay đổi src của ảnh chính (images-main)
          mainImage.src = this.src;
        });
      });
    });