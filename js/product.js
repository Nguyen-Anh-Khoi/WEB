const products = {
  dienThoai: [
    {
      id: "1",
      name: "Samsung Galaxy S22",
      price: "19000000",
      image: "./images/SamsungGalaxyS22.jpg",
      description:
        "Samsung Galaxy S22 là một chiếc smartphone cao cấp với bộ vi xử lý mạnh mẽ và khả năng chụp ảnh tiên tiến."
    },
    {
      id: "2",
      name: "Google Pixel 6",
      price: "16000000",
      image: "./images/GooglePixel6.jpg",
      description:
        "Google Pixel 6 mang đến trải nghiệm Android thuần túy với hiệu suất camera tuyệt vời và các tính năng sáng tạo."
    },
    {
      id: "3",
      name: "OnePlus 9 Pro",
      price: "18000000",
      image: "./images/OnePlus9Pro.jpg",
      description:
        "OnePlus 9 Pro nổi tiếng với hiệu suất nhanh, màn hình đẹp và hệ thống camera hàng đầu."
    },
    {
      id: "4",
      name: "Sony Xperia 1 III",
      price: "25000000",
      image: "./images/SonyXperia1III.jpg",
      description:
        "Sony Xperia 1 III đi kèm với màn hình 4K, công nghệ camera tiên tiến và hiệu suất tuyệt vời."
    },
    {
      id: "5",
      name: "Xiaomi Mi 11",
      price: "17000000",
      image: "./images/XiaomiMi11.jpg",
      description:
        "Xiaomi Mi 11 là một chiếc smartphone cao cấp cung cấp hiệu suất cao, màn hình tuyệt vời và camera đa năng."
    },
    {
      id: "6",
      name: "Huawei P40 Pro",
      price: "20000000",
      image: "./images/HuaweiP40Pro.jpg",
      description:
        "Huawei P40 Pro có thiết kế cao cấp, hiệu suất mạnh mẽ và khả năng chụp ảnh xuất sắc."
    },
    {
      id: "7",
      name: "Nokia X20",
      price: "12000000",
      image: "./images/NokiaX20.jpg",
      description:
        "Nokia X20 mang đến hiệu suất ổn định, trải nghiệm Android sạch và chất lượng xây dựng tốt."
    },
    {
      id: "8",
      name: "Realme GT",
      price: "15000000",
      image: "./images/RealmeGT.jpg",
      description:
        "Realme GT nổi bật với hiệu suất ấn tượng, sạc nhanh và giá cả cạnh tranh."
    },
    {
      id: "9",
      name: "Asus ROG Phone 5",
      price: "22000000",
      image: "./images/XiasROGPhone5.jpg",
      description:
        "Asus ROG Phone 5 là một chiếc smartphone chuyên dành cho chơi game với phần cứng mạnh mẽ và màn hình xuất sắc."
    },
    {
      id: "10",
      name: "Iphone 13 pro max",
      price: "4200000",
      image: "./images/Iphone13promax.jpg",
      description:
        "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc"
    },
    {
      id: "11",
      name: "Iphone 14 pro",
      price: "23000000",
      image: "./images/Iphone14pro.jpg",
      description:
        "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc"
    },
    {
      id: "12",
      name: "Vivo Y16",
      price: "4200000",
      image: "./images/VivoY16.jpg",
      description:
        "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc"
    }
    // {
    //   id: "13",
    //   name: "OPPO A17",
    //   price: "7000000",
    //   image: "./images/OPPOA17.jpg",
    //   description: "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc",
    // },
  ],
  quanAo: [
    {
      id: "100",
      name: "Áo Phông",
      price: 300000,
      image: "./images/AoPhong.jpg",
      description: "Áo phông cotton thoáng mát, thời trang."
    },
    {
      id: "101",
      name: "Áo Khoác",
      price: 500000,
      image: "./images/AoKhoac.jpg",
      description: "Áo khoác cotton thoáng mát, thời trang."
    },
    {
      id: "102",
      name: "Áo Sơ Mi",
      price: 400000,
      image: "./images/AoSoMi.jpg",
      description: "Áo sơ mi cotton thoáng mát, thời trang."
    }
  ],
  dongHo: [
    {
      id: "200",
      name: "AW 2 Trail Loop",
      price: "20000000",
      image: "./images/AW-Ultra-2.jpg",
      description: ""
    },
    {
      id: "201",
      name: "AW 9",
      price: "18000000",
      image: "./images/AW-S9.jpg",
      description: ""
    },
    {
      id: "202",
      name: "AW 2 Alpine",
      price: "26000000",
      image: "./images/AW-Ultra-2-Alpine.jpg",
      description: ""
    },
    {
      id: "203",
      name: "AW 2 Ocean Band",
      price: "20000000",
      image: "./images/AW-Ultra-2-Ocean-Band.jpg",
      description: ""
    },
    {
      id: "204",
      name: "AW 9 Sport Band",
      price: "18000000",
      image: "./images/LTE-AW9.jpg",
      description:
        "Mô tả cho Iphone 13 pro max. Đây là một chiếc điện thoại mạnh mẽ với nhiều tính năng nổi bật."
    },
    {
      id: "205",
      name: "AW 9 Sport Band",
      price: "10000000",
      image: "./images/LTE-AW9-1.jpg",
      description:
        "Mô tả cho Iphone 13 pro max. Đây là một chiếc điện thoại mạnh mẽ với nhiều tính năng nổi bật."
    },
    {
      id: "206",
      name: "AW 9 Sport Band",
      price: "18000000",
      image: "./images/LTE-AW9.jpg",
      description:
        "Mô tả cho Iphone 13 pro max. Đây là một chiếc điện thoại mạnh mẽ với nhiều tính năng nổi bật."
    },
    {
      id: "207",
      name: "AW 9 Sport Band",
      price: "10000000",
      image: "./images/LTE-AW9-1.jpg",
      description:
        "Mô tả cho Iphone 13 pro max. Đây là một chiếc điện thoại mạnh mẽ với nhiều tính năng nổi bật."
    }
  ]
};

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadSanPham("danhMucDienThoai", "dienThoai"),
    loadSanPham("danhMucQuanAo", "quanAo"),
    loadSanPham("danhMucDongHo", "dongHo")
  ]);
});

const loadSanPham = async (elementId, category) => {
  const container = document.getElementById(elementId);
  container.innerHTML = "";
  const categoryProducts = products[category];
  categoryProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-3", "mb-3");
    productCard.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <div class="product-icons">
                      <p class="onsale-left">-30%</p>
                      <p class="new-right">Mới</p>
                  </div>
                  <a href="detail.html?id=${
                    product.id
                  }&category=${category}" title="">
                      <img class="product-img img-fluid" src="${
                        product.image
                      }" alt="${product.name}" />
                  </a>
                  <div class="product-bottom">
                      <div class="product-title">${product.name}</div>
                      <div class="product-price"> 
                          <span>${new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND"
                          }).format(product.price)}</span>
                      </div>
                      <div class="product-buttons">
                          <button class="n-buy btn btn-details"><a href="sanphamchitiet.html?id=${
                            product.id
                          }&category=${category}" title="">Chi tiết</a></button>
                          <button class="n-buy btn btn-buy" onclick="addToCart('${
                            product.name
                          }', ${product.price}, '${
      product.image
    }')">Mua ngay</button>
                      </div>
                  </div>
              </div>
          </div>
      `;
    container.appendChild(productCard);
  });
};

const addToCart = (productName, price, imagePath) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingItem = cart.find((item) => item.tensp === productName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    let idsp = cart.length + 1;
    cart.push({
      idsp: idsp,
      tensp: productName,
      gia: price,
      quantity: 1,
      imagePath: imagePath
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
};

const goToCart = () => {
  window.location.href = "giohang.html";
};

// Product Detail
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const category = urlParams.get("category");

const product =
  category && products[category]?.find((item) => item.id === productId);

if (product) {
  const productDetail = document.getElementById("product-detail");
  if (productDetail) {
    const productHTML = `
          <div class="product">
              <img src="${product.image}" alt="${product.name}">
              <h2>${product.name}</h2>
              <p>Giá: ${new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND"
              }).format(product.price)}</p>
              <p>Mô tả: ${product.description}</p>
              <button onclick="addToCart('${product.name}', ${
      product.price
    }, '${product.image}')">Thêm vào giỏ hàng</button>
              <button onclick="goToCart()">Tới giỏ hàng</button>
          </div>
      `;
    productDetail.innerHTML = productHTML;
  }
} else if (document.getElementById("product-detail")) {
  document.getElementById("product-detail").innerHTML =
    "<p>Sản phẩm không tồn tại.</p>";
}

// Cart
window.onload = () => {
  loadCart();
};

const loadCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsElement = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");
  let totalPrice = 0;

  cartItemsElement.innerHTML = "";

  cart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${item.idsp}</td>
          <td><img src="${item.imagePath}" alt="Sản phẩm ${
      item.idsp
    }" style="width: 100px; height: 150px;"></td>
          <td>${item.tensp}</td>
          <td>${new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
          }).format(item.gia)}</td>
          <td>
              <button onclick="decreaseQuantity(${item.idsp})">-</button>
              ${item.quantity}
              <button onclick="increaseQuantity(${item.idsp})">+</button>
          </td>
          <td>${new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
          }).format(item.gia * item.quantity)}</td>
          <td><button onclick="removeFromCart('${
            item.tensp
          }')">Xoá</button></td>
      `;
    cartItemsElement.appendChild(row);
    totalPrice += item.gia * item.quantity;
  });

  totalPriceElement.textContent = `Tổng giá tiền: ${new Intl.NumberFormat(
    "vi-VN",
    { style: "currency", currency: "VND" }
  ).format(totalPrice)}`;
};

const clearCart = () => {
  localStorage.removeItem("cart");
  alert("Giỏ hàng đã được xóa!");
  loadCart();
};

const removeFromCart = (productName) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.tensp !== productName);

  cart.forEach((item, index) => {
    item.idsp = index + 1;
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
};

const increaseQuantity = (itemIdsp) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let itemIndex = cart.findIndex((item) => item.idsp === itemIdsp);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
};

const decreaseQuantity = (itemIdsp) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let itemIndex = cart.findIndex((item) => item.idsp === itemIdsp);
  if (itemIndex !== -1 && cart[itemIndex].quantity > 1) {
    cart[itemIndex].quantity--;
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
};

const goToShop = () => {
  window.location.href = "index.html";
};

// Thanh tìm kiếm
// Hàm load sản phẩm theo danh mục
const loadSanPham2 = async (elementId, category) => {
  const container = document.getElementById(elementId);
  container.innerHTML = "";
  const categoryProducts = products[category];
  categoryProducts.forEach((product) => {
    const productCard = createProductCard(product, category);
    container.appendChild(productCard);
  });
};

// Hàm tạo thẻ sản phẩm
const createProductCard = (product, category) => {
  const productCard = document.createElement("div");
  productCard.classList.add("col-md-4", "mb-4");
  productCard.innerHTML = `
        

         <div class="card">
          <div class="card-body">
              <div class="product-icons">
                  <p class="onsale-left">-30%</p>
                  <p class="new-right">Mới</p>
              </div>
              <a href="detail.html?id=${
                product.id
              }&category=${category}" title="">
                  <img class="product-img img-fluid" src="${
                    product.image
                  }" alt="${product.name}" />
              </a>
              <div class="product-bottom">
                  <div class="product-title">${product.name}</div>
                  <div class="product-price"> 
                      <span>${new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND"
                      }).format(product.price)}</span>
                  </div>
                  <div class="product-buttons">
                      <button class="n-buy btn btn-details"><a href="sanphamchitiet.html?id=${
                        product.id
                      }&category=${category}" title="">Chi tiết</a></button>
                      <button class="n-buy btn btn-buy" onclick="addToCart('${
                        product.name
                      }', ${product.price}, '${
    product.image
  }')">Mua ngay</button>
                  </div>
              </div>
          </div>
      </div>
    `;
  return productCard;
};

// Hàm tìm kiếm sản phẩm
const searchProducts = () => {
  const searchInput = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();
  const danhMucSanPham = document.getElementById("danhMucSanPham");
  danhMucSanPham.innerHTML = "";

  Object.keys(products).forEach((category) => {
    const categoryProducts = products[category];
    const filteredProducts = categoryProducts.filter((product) =>
      startsWithCaseInsensitive(product.name, searchInput)
    );

    if (filteredProducts.length > 0) {
      const fragment = document.createDocumentFragment();

      filteredProducts.forEach((product) => {
        const productCard = createProductCard(product, category);
        fragment.appendChild(productCard);
      });

      danhMucSanPham.appendChild(fragment);
    }
  });
};

// Hàm kiểm tra chuỗi bắt đầu bằng chữ cái đầu tiên
const startsWithCaseInsensitive = (fullText, searchText) => {
  const firstChar = searchText.charAt(0);
  const regex = new RegExp(`^${firstChar}`, "i");
  return fullText.match(regex);
};

// Load tất cả sản phẩm khi tài liệu DOM được tải
document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadSanPham2("danhMucDienThoai", "dienThoai"),
    loadSanPham2("danhMucQuanAo", "quanAo"),
    loadSanPham2("danhMucDongHo", "dongHo")
  ]);
});
