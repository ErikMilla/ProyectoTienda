const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function mostrarCarrito() {
    // Obtener el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let carritoHTML = '';

    // Si el carrito está vacío
    if (carrito.length === 0) {
        carritoHTML = '<p>El carrito está vacío</p>';
    } else {
        // Mostrar los productos en el carrito
        carrito.forEach(producto => {
            carritoHTML += `<p>${producto.nombre} - S/ ${producto.precio.toFixed(2)}</p>`;
        });
    }

    // Insertar el HTML del carrito en el contenedor
    document.getElementById('carrito').innerHTML = carritoHTML;
}

// Llamar a la función para mostrar el carrito cuando se cargue la página del carrito
window.onload = mostrarCarrito;
