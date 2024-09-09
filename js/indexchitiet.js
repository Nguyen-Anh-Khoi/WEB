// Lấy thông tin sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id"); // Giả sử id của sản phẩm là '1'

// Danh sách các sản phẩm (dữ liệu tạm thời)
// const products = [
//   {
//     id: "1",
//     name: "Áo Nam Adidas Slimfit Trắng",
//     price: "259000",
//     image: "images/sanpham1.png",
//     description: "Đây là Áo Nam Adidas Slimfit Trắng.",
//   },
//   {
//     id: "2",
//     name: "Quần Kaki Túi Nhỏ Kiểu Form Slimfit QK026 Màu Xám",
//     price: "329000",
//     image: "images/sanpham2.png",
//     description: "Đây là Quần Kaki Túi Nhỏ Kiểu Form Slimfit QK026 Màu Xám.",
//   },
//   {
//     id: "3",
//     name: "Quần Jeans Basic Form Slimfit QJ098",
//     price: "299000",
//     image: "images/sanpham3.png",
//     description: "Đây là Quần Jeans Basic Form Slimfit QJ098.",
//   },
//   {
//     id: "4",
//     name: "Quần Jeans Xanh Đậm Giễu Chỉ Màu Cam Form",
//     price: "545000",
//     image: "images/sanpham4.png",
//     description: "Đây là Quần Jeans Xanh Đậm Giễu Chỉ Màu Cam Form.",
//   },
//   {
//     id: "5",
//     name: "Quần Jeans Xanh Đậm Túi Kiểu Form Slimfit Q",
//     price: "499000",
//     image: "images/sanpham5.png",
//     description: "Đây là Quần Jeans Xanh Đậm Túi Kiểu Form Slimfit Q.",
//   },
//   {
//     id: "6",
//     name: "Quần Jeans Xanh Đậm Wash Cát Form Straight QJ095",
//     price: "495000",
//     image: "images/sanpham6.png",
//     description: "Đây là Quần Jeans Xanh Đậm Túi Kiểu Form Slimfit Q.",
//   },
//   {
//     id: "7",
//     name: "Quần Jeans Xanh Đậm Giễu Chỉ Màu Cam Form1",
//     price: "545000",
//     image: "images/sanpham7.png",
//     description: "Quần Jeans Xanh Đậm Giễu Chỉ Màu Cam Form1",
//   },
//   {
//     id: "8",
//     name: "Quần Jeans Xanh Đậm Giễu Chỉ Màu Cam Form2",
//     price: "545000",
//     image: "images/sanpham8.png",
//     description: "Quần Jeans Xanh Đậm Giễu Chỉ Màu Cam Form2",
//   },
//   {
//     id: "9",
//     name: "Quần Jeans Xanh Đậm Wash Cát Form Straight QJ095",
//     price: "495000",
//     image: "images/sanpham9.png",
//     description: "Đây là Quần Jeans Xanh Đậm Túi Kiểu Form Slimfit Q.",
//   },
//   // Thêm các sản phẩm khác vào đây
// ];
const products = [
    {
      id: "1",
      name: "Samsung Galaxy S22",
      price: "19000000",
      image: "./images/SamsungGalaxyS22.jpg",
      description: "Samsung Galaxy S22 là một chiếc smartphone cao cấp với bộ vi xử lý mạnh mẽ và khả năng chụp ảnh tiên tiến.",
    },
    {
      id: "2",
      name: "Google Pixel 6",
      price: "16000000",
      image: "./images/GooglePixel6.jpg",
      description: "Google Pixel 6 mang đến trải nghiệm Android thuần túy với hiệu suất camera tuyệt vời và các tính năng sáng tạo.",
    },
    {
      id: "3",
      name: "OnePlus 9 Pro",
      price: "18000000",
      image: "./images/OnePlus9Pro.jpg",
      description: "OnePlus 9 Pro nổi tiếng với hiệu suất nhanh, màn hình đẹp và hệ thống camera hàng đầu.",
    },
    {
      id: "4",
      name: "Sony Xperia 1 III",
      price: "25000000",
      image: "./images/SonyXperia1III.jpg",
      description: "Sony Xperia 1 III đi kèm với màn hình 4K, công nghệ camera tiên tiến và hiệu suất tuyệt vời.",
    },
    {
      id: "5",
      name: "Xiaomi Mi 11",
      price: "17000000",
      image: "./images/XiaomiMi11.jpg",
      description: "Xiaomi Mi 11 là một chiếc smartphone cao cấp cung cấp hiệu suất cao, màn hình tuyệt vời và camera đa năng.",
    },
    {
      id: "6",
      name: "Huawei P40 Pro",
      price: "20000000",
      image: "./images/HuaweiP40Pro.jpg",
      description: "Huawei P40 Pro có thiết kế cao cấp, hiệu suất mạnh mẽ và khả năng chụp ảnh xuất sắc.",
    },
    {
      id: "7",
      name: "Nokia X20",
      price: "12000000",
      image: "./images/NokiaX20.jpg",
      description: "Nokia X20 mang đến hiệu suất ổn định, trải nghiệm Android sạch và chất lượng xây dựng tốt.",
    },
    {
      id: "8",
      name: "Realme GT",
      price: "15000000",
      image: "./images/RealmeGT.jpg",
      description: "Realme GT nổi bật với hiệu suất ấn tượng, sạc nhanh và giá cả cạnh tranh.",
    },
    {
      id: "9",
      name: "Asus ROG Phone 5",
      price: "22000000",
      image: "./images/XiasROGPhone5.jpg",
      description: "Asus ROG Phone 5 là một chiếc smartphone chuyên dành cho chơi game với phần cứng mạnh mẽ và màn hình xuất sắc.",
    },
    {
      id: "10",
      name: "Iphone 13 pro max",
      price: "4200000",
      image: "./images/Iphone13promax.jpg",
      description: "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc",
    },
    {
      id: "11",
      name: "Iphone 14 pro",
      price: "23000000",
      image: "./images/Iphone14pro.jpg",
      description: "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc",
    },
    {
      id: "12",
      name: "Vivo Y16",
      price: "4200000",
      image: "./images/VivoY16.jpg",
      description: "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc",
    },
    {
      id: "13",
      name: "OPPO A17",
      price: "7000000",
      image: "./images/OPPOA17.jpg",
      description: "Điện thoại di động là một thiết bị thông minh nhỏ gọn được thiết kế để kết nối và giao tiếp. Với sự phát triển của công nghệ, điện thoại không chỉ đơn thuần là một phương tiện liên lạc mà còn trở thành một công cụ đa chức năng, có thể thực hiện nhiều nhiệm vụ khác nhau từ giải trí đến công việc",
    },
];
  
const product = products.find((item) => item.id === productId);

if (product) {
  const productDetail = document.getElementById("product-detail");
  const productHTML = `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Giá: ${product.price}</p>
            <p>Mô tả: ${product.description}</p>
            <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Thêm vào giỏ hàng</button>
            <button onclick="goToCart('')">Tới giỏ hàng</button>
        </div>
    `;
  productDetail.innerHTML = productHTML;
} else {
  // Nếu không tìm thấy sản phẩm, hiển thị thông báo
  document.getElementById("product-detail").innerHTML =
    "<p>Sản phẩm không tồn tại.</p>";
}
