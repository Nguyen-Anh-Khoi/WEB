function addToCart(productName, price, imagePath) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let existingItem = cart.find(item => item.tensp === productName);
  if (existingItem) {
      existingItem.quantity++;
  } else {
      let idsp = cart.length + 1;
      cart.push({ idsp: idsp, tensp: productName, gia: price, quantity: 1, imagePath: imagePath });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Sản phẩm đã được thêm vào giỏ hàng!');
}
function goToCart() {
  window.location.href = 'giohang.html'; // Redirect to cart page
}