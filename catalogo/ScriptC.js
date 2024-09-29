function añadirAlCarrito(nombre, precio) {
    // Recuperar el carrito actual del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Añadir el nuevo producto al carrito
    carrito.push({ nombre: nombre, precio: precio });

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(`${nombre} añadido al carrito`);
}
