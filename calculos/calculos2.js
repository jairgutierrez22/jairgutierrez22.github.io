let nombre_user = prompt("Bienvenido. Queremos conocerte...cuál es tu nombre?");

let opt_user = prompt(nombre_user + " nos alegra tenerte con nosotros. Quieres agregar productos al stock?");



if(opt_user === "SI")   {

    let arrayObject = [];
    
        
        for (let i = 0; i < 3; i++) {
            let nombre = prompt("Ingrese el nombre del producto " + (i + 1) + ":");
            let precio = prompt("Ingrese el precio del producto " + (i + 1) + ":");
            let color = prompt("Ingrese el color del producto " + (i + 1) + ":");
    
        
            let productosObjeto = {
                nombre: nombre,
                precio: parseInt(precio),
                color: color
            };
    
            arrayObject.push(productosObjeto);
        }


        function mostrarInformacionProducto(producto) {
            alert("Nombre: " + producto.nombre + "\n" +
            "Precio: $" + producto.precio.toFixed(2)) + "\n" +
            "Color: " + producto.color;
        }

        
        function mostrarTodosLosProductos() {
            for (let i = 0; i < arrayObject.length; i++) {
                mostrarInformacionProducto(arrayObject[i]);
            }
        }
    
        
        mostrarTodosLosProductos();
}else{
    alert( opt_user + " gracias estar con nosotros, vuelve pronto");
}