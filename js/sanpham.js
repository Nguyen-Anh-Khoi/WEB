// Đối tượng chứa thông tin sản phẩm theo từng danh mục
const sanPhamTheoDanhMuc = {
  dienTu: [
    {
      ten: "Iphone 13 pro max",
      hinhAnh: "./images/Iphone 13 pro max.webp",
      giaCu: "6.000.000VND",
      giaMoi: "4.200.000VND",

      moTa: "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc",
    },
    {
      ten: "Iphone 14 pro",
      hinhAnh: "./images/Iphone 14 pro .jpg",
      giaCu: "24.000.000VND",
      giaMoi: "23.000.000VND",
      moTa: "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc",
    },
    {
      ten: "Vivo Y16",
      hinhAnh: "./images/Vivo Y16.jpg",
      giaCu: "6.000.000VND",
      giaMoi: "4.200.000VND",

      moTa: "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc",
    },
    {
      ten: "OPPO A17",
      hinhAnh: "./images/OPPO A17.jpg",
      giaCu: "8.000.000VND",
      giaMoi: "7.000.000VND",

      moTa: "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc",
    },

    // Thêm các sản phẩm điện tử khác nếu cần
  ],
  quanAo: [
    {
      ten: "Iphone 15",
      hinhAnh: "./images/Iphone 15.webp",
      giaCu: "21.000.000VND",
      giaMoi: "20.000.000VND",
      moTa: "",
    },
    {
      ten: "Iphone 15",
      hinhAnh: "./images/Iphone 15.webp",
      giaCu: "21.000.000VND",
      giaMoi: "20.000.000VND",
      moTa: "",
    },
    {
      ten: "Iphone 15 pro max",
      hinhAnh: "./images/Iphone15promax.webp",
      giaCu: "35.000.000VND",
      giaMoi: "34.000.000VND",
      moTa: "",
    },
    {
      ten: "Iphone 15",
      hinhAnh: "./images/Iphone 15.webp",
      giaCu: "21.000.000VND",
      giaMoi: "20.000.000VND",
      moTa: "",
    },

    // Thêm các sản phẩm quần áo khác nếu cần
  ],
  dongHo: [
    {
      ten: "AW 2 Trail Loop",
      hinhAnh: "./images/AW-Ultra-2.jpg",
      giaCu: "21.600.000VND",
      giaMoi: "20.000.000VND",
      moTa: "",
    },
    {
      ten: "AW 9",
      hinhAnh: "./images/AW-S9.jpg",
      giaCu: "19.000.000VND",
      giaMoi: "18.000.000VND",
      moTa: "",
    },
    {
      ten: "AW 2 Alpine",
      hinhAnh: "./images/AW-Ultra-2-Alpine.jpg",
      giaCu: "27.000.000VND",
      giaMoi: "26.000.000VND",
      moTa: "",
    },
    {
      ten: "AW 2 Ocean Band",
      hinhAnh: "./images/AW-Ultra-2-Ocean-Band.jpg",
      giaCu: "21.000.000VND",
      giaMoi: "20.000.000VND",
      moTa: "",
    },
    /*     {
      ten: "AW 9 Sport Band",
      hinhAnh: "./images/LTE-AW9.jpg",
      giaCu: "19.000.000VND",
      giaMoi: "18.000.000VND",
      moTa: "Mô tả cho Iphone 13 pro max. Đây là một chiếc điện thoại mạnh mẽ với nhiều tính năng nổi bật."
    },
    {
      ten: "AW 9 Sport Band",
      hinhAnh: "./images/LTE-AW9-1.jpg",
      giaCu: "12.000.000VND",
      giaMoi: "10.000.000VND",
      moTa: "Mô tả cho Iphone 13 pro max. Đây là một chiếc điện thoại mạnh mẽ với nhiều tính năng nổi bật."
    }, */
  ],
  // Thêm các danh mục và sản phẩm khác nếu cần
};

// Hàm tạo HTML cho từng sản phẩm
function taoHTMLSanPham(sanPham) {
  return `
    <div class="col-md-3 mb-3">
    <div class="card">
      <div class="card-body">
        <div class="product-icons">
          <p class=" onsale-left">-30%</p>
          <p class=" new-right">Mới</p>
        </div>
        <img class="product-img img-fluid" src="${sanPham.hinhAnh}" alt="${
    sanPham.ten
  }">
        <div class="product-bottom">
          <div class="product-title">${sanPham.ten}</div>
          <div class="product-price">
            <del>${sanPham.giaCu}</del> | <span>${sanPham.giaMoi}</span>
          </div>
          <div class="product-buttons">
            <button class="n-buy btn btn-details " onclick="chuyenDenTrangChiTiet('${encodeURIComponent(
              JSON.stringify(sanPham)
            )}')">Chi tiết</button>
            <button class="n-buy btn btn-buy" onclick="chuyenDenTrangGioHang('${encodeURIComponent(
              JSON.stringify(sanPham)
            )}')">Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

// Hàm load sản phẩm cho một danh mục và container cụ thể
const loadSanPham = async (containerId, danhMuc) => {
  const containerSanPham = document.getElementById(containerId);

  await Promise.all(
    sanPhamTheoDanhMuc[danhMuc].map(async (sanPham) => {
      const htmlSanPham = taoHTMLSanPham(sanPham);
      containerSanPham.innerHTML += htmlSanPham;
    })
  );
};

// Gọi hàm load sản phẩm khi trang được tải hoàn toàn
document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadSanPham("danhMucDienTu", "dienTu"),
    loadSanPham("danhMucQuanAo", "quanAo"),
    loadSanPham("danhMucDongHo", "dongHo"),
  ]);
});

/*  */
/* Trang chi tiết */

const chuyenDenTrangChiTiet = (sanPhamStr) => {
  const sanPham = JSON.parse(decodeURIComponent(sanPhamStr));
  const url = `sanphamchitiet.html?ten=${encodeURIComponent(
    sanPham.ten
  )}&hinhAnh=${encodeURIComponent(sanPham.hinhAnh)}&giaCu=${encodeURIComponent(
    sanPham.giaCu
  )}&giaMoi=${encodeURIComponent(sanPham.giaMoi)}&moTa=${encodeURIComponent(
    sanPham.moTa
  )}`;
  window.location.href = url;
};

const loadSanPhamChiTiet = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const ten = urlParams.get("ten");
  const hinhAnh = urlParams.get("hinhAnh");
  const giaCu = urlParams.get("giaCu");
  const giaMoi = urlParams.get("giaMoi");
  const moTa = urlParams.get("moTa");
  const items__cart = document.querySelector(".items__cart");

  const chiTietSanPhamContainer = document.getElementById("chiTietSanPham");
  chiTietSanPhamContainer.innerHTML = `
    <div class="product-detail">

      <img class="product-img2 img-fluid" src="${hinhAnh}" alt="${ten}" style="">
      <div class="product-price2">
      <div  class="product-title2">${ten}</div>
      <span >Giá ${giaCu}</span>
      <span > ${giaMoi}</span>
    </div>
      
      <p class="product-moTa">Mô tả: ${moTa}</p>
      <button class="n-buy btn btn-buy items__cart" >Mua ngay</button>
    </div>
  `;
};

document.addEventListener("DOMContentLoaded", loadSanPhamChiTiet);

/* giỏ hàng */

var gioHang = [];

const layGioHangTuLocalStorage = () => {
  const gioHangString = localStorage.getItem("gioHang");
  gioHang = gioHangString ? JSON.parse(gioHangString) : [];
};

const luuGioHangVaoLocalStorage = () => {
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
};

const themSanPhamVaoGioHang = (sanPham) => {
  gioHang.push(sanPham);
  luuGioHangVaoLocalStorage();
};

const xoaSanPhamKhoiGioHang = (tenSanPham) => {
  gioHang = gioHang.filter((sanPham) => sanPham.ten !== tenSanPham);
  luuGioHangVaoLocalStorage();
};

const capNhatSoLuongSanPhamTrongGioHang = (tenSanPham, soLuongMoi) => {
  gioHang = gioHang.map((sanPham) => {
    if (sanPham.ten === tenSanPham) {
      return { ...sanPham, soLuong: soLuongMoi };
    }
    return sanPham;
  });
  luuGioHangVaoLocalStorage();
};

const chuyenDenTrangGioHang = (sanPhamStr) => {
  const sanPham = JSON.parse(decodeURIComponent(sanPhamStr));
  const url = `giohang.html?ten=${encodeURIComponent(
    sanPham.ten
  )}&hinhAnh=${encodeURIComponent(sanPham.hinhAnh)}&giaCu=${encodeURIComponent(
    sanPham.giaCu
  )}&giaMoi=${encodeURIComponent(sanPham.giaMoi)}`;
  window.location.href = url;
};

const loadSanPhamGioHang = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const ten = urlParams.get("ten");
  const hinhAnh = urlParams.get("hinhAnh");
  const giaCu = urlParams.get("giaCu");
  const giaMoi = urlParams.get("giaMoi");

  const gioHangContainer = document.getElementById("chiTietDonHang");
  gioHangContainer.innerHTML = `
  <div class="row">
  <div class="col-md-4">
    <img src="${hinhAnh}" alt="${ten}" class="img-fluid">
  </div>
  <div class="col-md-8">
    <p class="fs-4">${ten}</p>
    <p class="fs-5">Giá: ${giaMoi}</p>
    <p class="fs-5">Màu sắc: 
      <select id="color" class="form-select">
        <option value="red">Đỏ</option>
        <option value="blue">Xanh</option>
        <option value="green">Lục</option>
      </select>
    </p>
    <p class="fs-5">Số lượng: <input type="number" id="quantity" value="1" class="form-control"></p>
    <button onclick="themVaoGioHang('${ten}', '${hinhAnh}', '${giaCu}', '${giaMoi}')" class="btn btn-primary">Thêm vào giỏ hàng</button>
  </div>
</div>
  `;
};

const themVaoGioHang = (ten, hinhAnh, giaCu, giaMoi) => {
  const color = document.getElementById("color").value;
  const soLuong = parseInt(document.getElementById("quantity").value);

  const sanPham = {
    ten,
    hinhAnh,
    giaCu,
    giaMoi,
    color,
    soLuong,
  };

  themSanPhamVaoGioHang(sanPham);
};

document.addEventListener("DOMContentLoaded", () => {
  layGioHangTuLocalStorage();
  loadSanPhamGioHang();
});

//lọc sản phẩm
const renderProducts = (products) => {
  const productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = "";
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
      
      <p>${product.ten}</p>
      
    `;
    productsContainer.appendChild(productElement);
  });
};

const searchProducts = (searchTerm) => {
  searchTerm = searchTerm.trim().toLowerCase();
  const foundProducts = [];
  for (const category in sanPhamTheoDanhMuc) {
    sanPhamTheoDanhMuc[category].forEach(product => {
      const productName = product.ten.toLowerCase();
      if (productName.includes(searchTerm)) {
        foundProducts.push(product);
      }
    });
  }
  return foundProducts;
};

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  if (searchTerm.length > 0) {
    const foundProducts = searchProducts(searchTerm);
    if (foundProducts.length > 0) {
      renderProducts(foundProducts);
    } else {
      document.getElementById("productsContainer").innerHTML = "<p>Không có sản phẩm nào phù hợp.</p>";
    }
  } else {
    document.getElementById("productsContainer").innerHTML = "";
  }
});

searchInput.style.display = "block"; // Hiển thị ô tìm kiếm
