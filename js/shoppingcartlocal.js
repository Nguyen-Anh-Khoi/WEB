window.onload = function() {
    loadCart();
};

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsElement = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0; // Initialize total price

    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.idsp}</td>
            <td><img src="${item.imagePath}" alt="Sản phẩm ${item.idsp}" style="width: 100px; height: 150px;"></td>
            <td>${item.tensp}</td>
            <td>${item.gia.toLocaleString()}</td>
            <td>
                <button onclick="decreaseQuantity(${item.idsp})">-</button>
                ${item.quantity}
                <button onclick="increaseQuantity(${item.idsp})">+</button>
            </td>
            <td>${(item.gia * item.quantity).toLocaleString()}</td>
            <td><button onclick="removeFromCart('${item.tensp}')">Xoá</button></td> <!-- Add delete button -->
        `;
        cartItemsElement.appendChild(row);
        totalPrice += item.gia * item.quantity; // Update total price
    });

    totalPriceElement.textContent = `Tổng giá tiền: ${totalPrice.toLocaleString()} VNĐ`;
}

function clearCart() {
    localStorage.removeItem('cart');
    alert('Giỏ hàng đã được xóa!');
    loadCart(); // Reload the cart display after clearing
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.tensp !== productName);

    // Update item ids
    cart.forEach((item, index) => {
        item.idsp = index + 1;
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Reload the cart display after removing item
}


function increaseQuantity(itemIdsp) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemIndex = cart.findIndex(item => item.idsp === itemIdsp);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart(); // Reload the cart display after updating quantity
    }
}

function decreaseQuantity(itemIdsp) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemIndex = cart.findIndex(item => item.idsp === itemIdsp);
    if (itemIndex !== -1 && cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart(); // Reload the cart display after updating quantity
    }
}
function goToShop() {
    window.location.href = 'index.html'; // Redirect to shop page
}