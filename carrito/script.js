const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        cart.forEach(item => {
            const card = document.createElement("div");
            card.className = "card mb-3";
            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://via.placeholder.com/150" class="img-fluid rounded-start" alt="${item.name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text"><strong>S/ ${item.price}</strong></p>
                            <p class="card-text">Cantidad: ${item.quantity}</p>
                            <button class="btn btn-danger" onclick="removeItem('${item.name}')">Eliminar</button>
                        </div>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(card);
        });
    }
});

function removeItem(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // Recargar la página para mostrar los cambios
}
