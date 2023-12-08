var jsonPath = '../json/accesorios_productos.json';
var productosArray = [];
var data; 
var totalCarrito = 0;


fetch(jsonPath)
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    return response.json();
  })
  .then(jsonData => {
    data = jsonData;
    console.log('Datos del archivo JSON:', data);
    mostrarProductos(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


//boton agregar producto al carrito
  function btnAgregar(idProducto) {
    const productoEnJSON = data.find(producto => producto.id_producto === idProducto);
    console.log(productoEnJSON.cantidad_produc);
    if (productoEnJSON && productoEnJSON.cantidad_produc > 0) {
      if (productoEnJSON.cantidad_produc > 0) {
        productosArray.push({
          ...productoEnJSON,
          cantidad_produc: 1
        });
        productoEnJSON.cantidad_produc -= 1;
        productoEnJSON.cantidad_produc -= 1;
  
        mostrarCarrito();
      } else {
        window.alert("Lo sentimos, no hay más stock disponible para este producto");
      }
    } else {
      window.alert("Lo sentimos, no tenemos más de este producto");
      return; 
    }
  }
  
//se muestra el carrito en un dropdown 
function mostrarCarrito() {
  const carritoContainer = document.getElementById('productsAgregados');

  carritoContainer.innerHTML = '';

  if (productosArray.length === 0) {
    carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
  } else {
    let totalCarrito = 0;
    productosArray.forEach(producto => {
      const divProductoEnCarrito = document.createElement('div');
      divProductoEnCarrito.innerHTML = `
        <div style="display: flex; flex-direction: row">
          <p style="margin-top: 15px">${producto.nombre_prod} - $${producto.precio_prod}</p>
          <button class="btn btn-danger" id="btnE" onclick="btnEliminar(${producto.id_producto})">Eliminar del carrito</button>
        </div>
      `;
      carritoContainer.appendChild(divProductoEnCarrito);

      totalCarrito += parseFloat(producto.precio_prod);
    });

    const divTotalCarrito = document.createElement('div');
    divTotalCarrito.innerHTML = `<p>Total del carrito: $${totalCarrito.toFixed(2)}</p>`;
    carritoContainer.appendChild(divTotalCarrito);
  }
}

//boton para eliminar producto del carrito
  function btnEliminar(productoId) {
    const index = productosArray.findIndex(producto => producto.id_producto === productoId);
    if (index !== -1) {
        const productoEliminado = productosArray[index];
        const productoEnJSON = data.find(producto => producto.id_producto === productoId);
        if (productoEnJSON) {
          productoEnJSON.cantidad_produc += productoEliminado.cantidad_produc;
        }
        window.alert("Está a punto de eliminar el producto del carrito!");
        productosArray.splice(index, 1);
        mostrarCarrito();
    } else {
        window.alert("Producto no encontrado en el carrito.");
    }
  }

//muestra los productos
function mostrarProductos(productos) {
  const productosContainer = document.getElementById('productos-container');
  productos.forEach(producto => {
    const divProducto = document.createElement('div');
    divProducto.innerHTML = `
      
        <div  id="producto_acc" class="card container-cont_accesorios-group-cards">
          <div>

            <img src="${producto.url_img_prod}" alt="${producto.nombre_prod}" class="card-img-top" id="fotos_accesorios">
            <div class="card-body">
                <h5 class="card-title cardtitle">${producto.categoria_prod}</h5>
                <p class="card-text parrafo_cards">${producto.descripcion_prod}</p><br>
                <p class="card-text parrafo_cards">$${producto.precio_prod}</p><br>
                <p class="card-text"><small class="text-muted">Cantidad: ${producto.cantidad_produc}</small></p>
            </div>
            <button class="btn btn-primary" id="btnA" onclick="btnAgregar(${producto.id_producto})">Agregar al carrito</button>
          </div>

        </div>
        <hr>
      `;
    productosContainer.appendChild(divProducto);
  });
}