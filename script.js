let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    document.getElementById('cart-total').innerText = total.toFixed(2);
    document.getElementById('cart').style.display = 'block';
}

function checkout() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
}

document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Payment successful! Your order is being processed.');
    document.getElementById('tracking-info').style.display = 'block';
    document.getElementById('payment-form').style.display = 'none';
});
