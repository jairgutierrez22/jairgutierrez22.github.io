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
  

document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
  });
  
  async function cargarProductos() {
    try {
      const respuesta = await fetch('json/productos.json'); // Ajusta la ruta del archivo según tu caso
      const datosTexto = await respuesta.text();
      console.log('Contenido del archivo JSON:', datosTexto);
  
      const datos = JSON.parse(datosTexto);
      mostrarProductos(datos);
    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
    }
  }
  
  function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById('contenedor-productos');
  
    productos.forEach(producto => {
      const productoDiv = document.createElement('div');
      productoDiv.innerHTML = `
        <h2>${producto.nombre_prod}</h2>
        <p>${producto.descripcion_prod}</p>
        <p>Precio: ${producto.precio_prod === "" ? "No disponible" : `$${producto.precio_prod}`}</p>
        <p>Categoría: ${producto.categoria_prod}</p>
        <p>Descuento: ${producto.descuento_prod ? "Sí" : "No"}</p>
        <img src="${producto.url_img_prod}" alt="${producto.nombre_prod}">
        <hr>
      `;
      contenedorProductos.appendChild(productoDiv);
    });
  }
  