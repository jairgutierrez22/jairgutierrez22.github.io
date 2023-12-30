
// let productosArray = [];
let data; 
let totalCarrito = 0;

let productosArray = [];

async function cargarDatosDesdeJSON(jsonPath) {
  try {
    const response = await fetch(jsonPath);

    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }

    const jsonData = await response.json();
    data = jsonData;
    console.log('Datos del archivo JSON:', data);
    mostrarProductos(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

let jsonPath = '../json/accesorios_productos.json';
cargarDatosDesdeJSON(jsonPath);



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

        
       // window.alert("Está a punto de agregar este producto");
        Swal.fire(
          'Felicidades!',
          'Agregaste este producto al carrito!',
          'success'
        )
        
        mostrarCarrito();
        localStorage.setItem('productosArray', JSON.stringify(productosArray));
      } else {
        window.alert("Lo sentimos, no hay más stock disponible para este producto");
      }
    } else {
      window.alert("Lo sentimos, no tenemos más de este producto");
      return; 
    }
  }


function cargarCarritoDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem('productosArray'); 
  //const listaProductos = document.getElementById('listaProductos');
  
  const carritoContainer = document.getElementById('productsAgregados');

  
  carritoContainer.innerHTML = '';

  if (carritoGuardado) {
    productosArray = JSON.parse(carritoGuardado);

   
    productosArray.forEach(producto => {
      // const li = document.createElement('li');
      // li.textContent = `${producto.nombre_prod} - $${producto.precio_prod}`;
      // listaProductos.appendChild(li);

      const divProductoEnCarrito = document.createElement('div');
      divProductoEnCarrito.innerHTML = `
      <div style="display: flex; flex-direction: row; justify-content: space-around">
          <p style="margin-top: 15px">${producto.nombre_prod} - $${producto.precio_prod}</p>
          <button class="btn btn-danger" id="btnE" onclick="btnEliminar(${producto.id_producto})"><i class="fa-solid fa-trash"></i></button>
        </div>
        <br>
        `;
        carritoContainer.appendChild(divProductoEnCarrito);
  
        totalCarrito += parseFloat(producto.precio_prod);
  
        console.log(productosArray);
    });
  } else {
    
    const li = document.createElement('li');
    li.textContent = 'El carrito está vacío.';
    carritoContainer.appendChild(li);
  }
}

cargarCarritoDesdeLocalStorage();

  

  
//se muestra el carrito en un icono 

function mostrarCarrito() {
  const carritoContainer = document.getElementById('productsAgregados');
  carritoContainer.innerHTML = '';
  if (productosArray.length === null || productosArray.length === 0) {
    carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
  } else {
    let totalCarrito = 0;

    productosArray.forEach(producto => {
      const divProductoEnCarrito = document.createElement('div');

      let mensajeDescuento = '';
      if (producto.descuento_prod && (producto.categoria_prod === "Ropa" || producto.categoria_prod === "Accesorios")) {
        const porcentajeDescuento = 0.20;
        const descuento = producto.precio_prod * porcentajeDescuento;
        const totalFinal = producto.precio_prod - descuento;
        mensajeDescuento = `Con descuento: $${totalFinal.toFixed(2)}`;
        totalCarrito += totalFinal;
      } else {
        mensajeDescuento = 'Sin descuento';
        totalCarrito += parseFloat(producto.precio_prod);
      }

      divProductoEnCarrito.innerHTML = `
        <div style="display: flex; flex-direction: row; justify-content: space-around">
          <p style="margin-top: 15px">${producto.nombre_prod} - $${producto.precio_prod} - ${mensajeDescuento}</p>
          <button class="btn btn-danger" id="btnE" onclick="btnEliminar(${producto.id_producto})"><i class="fa-solid fa-trash"></i></button>
        </div>
        <br>
      `;
      carritoContainer.appendChild(divProductoEnCarrito);

      console.log(productosArray);
    });

    console.log(typeof totalCarrito);
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
        //window.alert("Está a punto de eliminar el producto del carrito!");
        Swal.fire(
          'Estás a punto de eliminar este producto!',
          'Seguro?',
          'question'
        )
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
                <p class="card-text"><small class="text-muted">Este producto tiene descuento?: ${producto.descuento_prod ? 'SÍ' : 'NO'}</small></p>
            </div>
            <button class="btn btn-primary" id="btnA" onclick="btnAgregar(${producto.id_producto})">Agregar al carrito</button>
          </div>

        </div>
        <hr>
      `;
    productosContainer.appendChild(divProducto);
  });
}





function realizarCompra() {
  alert('Compra realizada con éxito. Gracias por tu compra.');
  productosArray.length = 0;
  localStorage.setItem('productosArray', JSON.stringify(productosArray));
  mostrarCarrito();
}



function aborrarCarrito() {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Estás a punto de eliminar todos los productos del carrito.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, vaciar carrito',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
  }).then((result) => {
    if (result.isConfirmed) {
      productosArray.forEach(productoEnCarrito => {
        const productoEnJSON = data.find(producto => producto.id_producto === productoEnCarrito.id_producto);

        if (productoEnJSON) {
          productoEnJSON.cantidad_produc += productoEnCarrito.cantidad_produc;
        }
      });
      productosArray = [];
      mostrarCarrito();
      Swal.fire('Carrito vaciado', 'Todos los productos han sido eliminados del carrito.', 'success');
    }
  });
}
