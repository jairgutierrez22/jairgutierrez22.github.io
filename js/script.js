// document.addEventListener('DOMContentLoaded', () => {
//     cargarProductos();
//   });
  
//   async function cargarProductos() {
//     try {
//       const respuesta = await fetch('.json/productos.json'); // Ajusta el nombre del archivo según tu caso
//       const datos = await respuesta.json();
//       mostrarProductos(datos.productos);
//     } catch (error) {
//       console.error('Error al cargar el archivo JSON:', error);
//     }
//   }
  
//   function mostrarProductos(productos) {
//     const contenedorProductos = document.getElementById('contenedor-productos');
  
//     productos.forEach(producto => {
//       const productoDiv = document.createElement('div');
//       productoDiv.innerHTML = `
//         <h2>${producto.nombre_prod}</h2>
//         <p>Precio: $${producto.descripcion_prod}</p>
//         <p>Categoría: ${producto.categoria_prod}</p>
//         <hr>
//       `;
//       contenedorProductos.appendChild(productoDiv);
//     });
//   }
  

// document.addEventListener('DOMContentLoaded', () => {
//     cargarProductos();
//   });
  
//   async function cargarProductos() {
//     try {
//       const respuesta = await fetch('json/productos.json'); // Ajusta la ruta del archivo según tu caso
//       const datosTexto = await respuesta.text();
//       console.log('Contenido del archivo JSON:', datosTexto);
//   debugger
//       const datos = JSON.parse(datosTexto);
//       mostrarProductos(datos.productos);
//     } catch (error) {
//       console.error('Error al cargar el archivo JSON:', error);
//     }
//   }
  
//   function mostrarProductos(productos) {
//     const contenedorProductos = document.getElementById('contenedor-productos');
  
//     productos.forEach(producto => {
//       const productoDiv = document.createElement('div');
//       productoDiv.innerHTML = `
//         <h2>${producto.nombre_prod}</h2>
//         <p>Precio: $${producto.descripcion_prod}</p>
//         <p>Categoría: ${producto.categoria_prod}</p>
//         <hr>
//       `;
//       contenedorProductos.appendChild(productoDiv);
//     });
//   }
  

// document.addEventListener('DOMContentLoaded', () => {
//     cargarProductos();
//   });
  
//   async function cargarProductos() {
//     try {
//       const respuesta = await fetch('json/productos.json'); // Ajusta la ruta del archivo según tu caso
//       const datosTexto = await respuesta.text();
//       console.log('Contenido del archivo JSON:', datosTexto);
  
//       const datos = JSON.parse(datosTexto);
//       mostrarProductos(datos);
//     } catch (error) {
//       console.error('Error al cargar el archivo JSON:', error);
//     }
//   }
  
//   function mostrarProductos(productos) {
//     const contenedorProductos = document.getElementById('contenedor-productos');
  
//     productos.forEach(producto => {
//       const productoDiv = document.createElement('div');
//       productoDiv.innerHTML = `
//         <h2>${producto.nombre_prod}</h2>
//         <p>${producto.descripcion_prod}</p>
//         <p>Precio: ${producto.precio_prod === "" ? "No disponible" : `$${producto.precio_prod}`}</p>
//         <p>Categoría: ${producto.categoria_prod}</p>
//         <p>Descuento: ${producto.descuento_prod ? "Sí" : "No"}</p>
//         <img src="${producto.url_img_prod}" alt="${producto.nombre_prod}">
//         <hr>
//       `;
//       contenedorProductos.appendChild(productoDiv);
//     });
//   }
  


    // Obtener el contenedor donde se mostrarán los productos
  //   var productosContainer = document.getElementById("contenedor-productos");

  //   // Cargar el archivo JSON de manera asíncrona
  //   fetch('../json/accesorios_productos.json')
  //       .then(response => response.json())
  //       .then(productos => {
  //           // Iterar sobre cada producto y agregarlo al contenedor
  //           productos.forEach(function(producto) {
  //               var productoHTML = `
  //                   <div class="card " id="producto_acc">
  //                       <img src="${producto.url_img_prod}" alt="${producto.nombre_prod}" class="card-img-top" id="fotos_accesorios">
  //                       <div class="card-body">
  //                           <h5 class="card-title cardtitle">${producto.categoria_prod}</h5>
  //                           <p class="card-text parrafo_cards">${producto.descripcion_prod}</p><br>
  //                           <p class="card-text"><small class="text-muted">Producto agregado hace 7 minutos</small></p>
  //                       </div>
  //                       <button class="btn btn-primary" onclick="agregarAlCarritoo();">Go somewhere</button>


                
  //                   </div>
  //                   <hr>
  //               `;
  //               productosContainer.innerHTML += productoHTML;
  //           });
  //       })
  //       .catch(error => console.error('Error al cargar el archivo JSON:', error));




  //   //agregar array

  //   var carrito = document.getElementById("carrito");


  //   // Función para manejar el evento de agregar al carrito
  //   function agregarAlCarrito(producto) {
  //     var itemCarrito = document.createElement('li');
  //     itemCarrito.textContent = `${producto.nombre_prod} - $${producto.precio_prod}`;
  //     carrito.appendChild(itemCarrito);
  // }

  // // // Mostrar productos al cargar la página
  // // mostrarProductos();

  // // Configurar evento de clic para el botón "Agregar al Carrito"
  // // var agregarAlCarritoBtn = document.getElementById("agregarAlCarrito");
  // // agregarAlCarritoBtn.addEventListener("click", function() {
      
  // // });

  // function agregarAlCarritoo(){
  //   // Aquí puedes obtener el producto actual (por ejemplo, el último producto mostrado)
  //   var productoActual = productos[productos.length - 1];
  //   // Agregar el producto al carrito
  //   agregarAlCarrito(productoActual);
  // }




  // var productosContainer = document.getElementById("contenedor-productos");
  //   var carrito = document.getElementById("carrito");

    

  //   // Cargar el archivo JSON de manera asíncrona
  //   fetch('../json/accesorios_productos.json')
  //       .then(response => response.json())
  //       .then(productos => {
  //           // Iterar sobre cada producto y agregarlo al contenedor
  //           productos.forEach(function(producto) {
  //               var productoHTML = `
  //                   <div class="card" id="producto_acc">
  //                       <img src="${producto.url_img_prod}" alt="${producto.nombre_prod}" class="card-img-top" id="fotos_accesorios">
  //                       <div class="card-body">
  //                           <h5 class="card-title cardtitle">${producto.categoria_prod}</h5>
  //                           <p class="card-text parrafo_cards">${producto.descripcion_prod}</p><br>
  //                           <p class="card-text"><small class="text-muted">Producto agregado hace 7 minutos</small></p>
  //                       </div>
  //                       <button class="btn btn-primary" onclick="agregarAlCarrito(${JSON.stringify(producto)});">Agregar al carrito</button>
  //                   </div>
  //                   <hr>
  //               `;
  //               productosContainer.innerHTML += productoHTML;
  //           });
  //       })
  //       .catch(error => console.error('Error al cargar el archivo JSON:', error));



  //       // Función para manejar el evento de agregar al carrito
  //   function agregarAlCarrito(producto) {
  //     var itemCarrito = document.createElement('li');
  //     itemCarrito.textContent = `${producto.nombre_prod} - $${producto.precio_prod}`;
  //     carrito.appendChild(itemCarrito);
  // }





var carLi = document.getElementById("carrito");

const carrito = [];
var productos = [];

  // Función para cargar los productos desde el archivo JSON
  async function cargarProductos() {
    try {
      const response = await fetch('../json/accesorios_productos.json');
      const productos = await response.json();
      console.log(productos);
      mostrarProductos(productos);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }

  // Función para mostrar los productos en la página
  function mostrarProductos(productos) {
    const productosContainer = document.getElementById('productos-container');

    productos.forEach(producto => {
      const divProducto = document.createElement('div');
      divProducto.innerHTML = `
      
        <div class="card" id="producto_acc">
            <img src="${producto.url_img_prod}" alt="${producto.nombre_prod}" class="card-img-top" id="fotos_accesorios">
            <div class="card-body">
                <h5 class="card-title cardtitle">${producto.categoria_prod}</h5>
                <p class="card-text parrafo_cards">${producto.descripcion_prod}</p><br>
                <p class="card-text parrafo_cards">$${producto.precio_prod}</p><br>
                <p class="card-text"><small class="text-muted">Producto agregado hace 7 minutos</small></p>
            </div>
            <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id_producto})">Agregar al carrito</button>
        </div>
        <hr>
      `;
      productosContainer.appendChild(divProducto);
    });
  }

  // Función para agregar un producto al carrito
  // function agregarAlCarrito(productoId) {
  //   // Puedes implementar aquí la lógica para agregar el producto al carrito
  //   console.log(`Producto ${productoId} agregado al carrito`);
    
  //   var itemCarrito = document.createElement('li');
  //   itemCarrito.textContent = `${producto.nombre_prod} - $${producto.precio_prod}`;
  //   carrito.appendChild(itemCarrito);
  // }

  // function agregarAlCarrito(productoId) {
  //   const productoSeleccionado = obtenerProductoPorId(productoId);

  //   if (productoSeleccionado) {
  //     carrito.push(productoSeleccionado);
  //     actualizarCarrito();
  //     console.log(`Producto ${producto.id_producto} agregado al carrito`);
  //   } else {
  //     console.error(`No se encontró el producto con ID ${producto.id_producto}`);
  //   }
  // }
  function obtenerProductoPorId(id_producto) {
    // Implementa la lógica para buscar el producto en la lista de productos
    // (puedes cambiar esto según cómo estén estructurados tus datos)
    return productos.find(producto => producto.id_producto === id_producto);
  }

  function agregarAlCarrito(id_producto) {
    console.log(id_producto);
    const productoSeleccionado = obtenerProductoPorId(id_producto);
  
    if (productoSeleccionado) {
      carrito.push(productoSeleccionado);
      console.log(id_producto)
      actualizarCarrito();
      console.log(`Producto ${productoSeleccionado.id_producto} agregado al carrito`);
    } else {
      console.error(`No se encontró el producto con ID ${id_producto}`);
    }
  }
  
  // function obtenerProductoPorId(id_producto) {
  //   // Implementa la lógica para buscar el producto en la lista de productos
  //   // (puedes cambiar esto según cómo estén estructurados tus datos)
  //   return productos.find(producto => producto.id_producto === id_producto);
  // }

  function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');

    // Limpia la lista actual antes de agregar los productos
    carritoElement.innerHTML = '';

    carrito.forEach(producto => {
      const liProducto = document.createElement('li');
      liProducto.textContent = `${producto.nombre_prod} - $${producto.precio_prod.toFixed(2)}`;
      carritoElement.appendChild(liProducto);
    });
  }

  // Cargar productos al cargar la página
  cargarProductos();