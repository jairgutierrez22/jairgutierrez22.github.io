document.addEventListener('DOMContentLoaded', function () {
    const productosDiv = document.getElementById('productos');
    const carritoDiv = document.getElementById('carrito');
    const totalP = document.getElementById('total');

    // Obtén el archivo JSON
    fetch('../json/accesorios_productos.json')
        .then(response => response.json())
        .then(productos => mostrarProductos(productos));

    function mostrarProductos(productos) {
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');

            const imagen = document.createElement('img');
            imagen.src = producto.url_img_prod;
            productoDiv.appendChild(imagen);

            const nombre = document.createElement('p');
            nombre.textContent = producto.nombre_prod;
            productoDiv.appendChild(nombre);

            const precio = document.createElement('p');
            precio.textContent = `$${producto.precio_prod}`;
            productoDiv.appendChild(precio);

            const agregarCarrito = document.createElement('button');
            agregarCarrito.textContent = 'Agregar al Carrito';
            agregarCarrito.addEventListener('click', () => agregarAlCarrito(producto));
            productoDiv.appendChild(agregarCarrito);

            productosDiv.appendChild(productoDiv);
        });
    }

    const carrito = [];

    function agregarAlCarrito(producto) {
        carrito.push(producto);
        actualizarCarrito();
    }

    function actualizarCarrito() {
        carritoDiv.innerHTML = '';

        let total = 0;

        carrito.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');

            const nombre = document.createElement('p');
            nombre.textContent = producto.nombre_prod;
            productoDiv.appendChild(nombre);

            const precio = document.createElement('p');
            precio.textContent = `$${producto.precio_prod}`;
            productoDiv.appendChild(precio);

            carritoDiv.appendChild(productoDiv);

            total += parseFloat(producto.precio_prod);
        });

        totalP.textContent = `Total: $${total.toFixed(2)}`;
    }
});
