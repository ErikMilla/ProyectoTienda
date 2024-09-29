function añadirAlCarrito(nombre, precio) {
    // Recuperar el carrito actual del localStorage
    let carrito = JSON.parse(localStorage.getItem('cart')) || [];

    // Verificar si el producto ya existe en el carrito
    const productoExistente = carrito.find(item => item.name === nombre);

    if (productoExistente) {
        // Si existe, aumentar la cantidad
        productoExistente.quantity += 1;
    } else {
        // Si no existe, añadirlo al carrito
        carrito.push({ name: nombre, price: precio, quantity: 1 });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(carrito));

    alert(`${nombre} añadido al carrito`);
}
