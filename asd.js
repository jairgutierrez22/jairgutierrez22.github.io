// function verificar(){
//     const color_uno = document.getElementById("color_rojo").value;
//     const color_dos = document.getElementById("color_azul").value;
//     const color_tres = document.getElementById("color_blanco").value;
//     const color_cuatro = document.getElementById("color_cafe").value;

//     // if()
// }





// var list_talla = document.getElementById("list_talla");
//         list_talla.addEventListener("change", function() {
//         var seleccion = list_talla.options[list_talla.selectedIndex].value;
//         if (seleccion !== "") {
//             console.log("Se ha seleccionado la opción " + seleccion);
//         }
//     });


function verficar(){
    const boton_comprar = document.getElementById("btn_comprar");

    // const color_uno = document.getElementById("color_rojo").value;
    // const color_dos = document.getElementById("color_azul").value;
    // const color_tres = document.getElementById("color_blanco").value;
    // const color_cuatro = document.getElementById("color_cafe").value;
    // const list_color = document.getElementById("list_color");
    // const list_talla = document.getElementById("list_talla");

    // var seleccion = list_talla.options[list_talla.selectedIndex].value;
    // if (seleccion === "") {
    //     console.log("No seleccionó");
    // }else{
    //     console.log("Se ha seleccionado la opción " + seleccion);
    // }

    const list_color = document.getElementById("list_color");
    
    const list_talla = document.getElementById("list_talla");

    var seleccion_t = list_talla.options[list_talla.selectedIndex].value;
    var seleccion_c = list_color.options[list_color.selectedIndex].value;
    if(seleccion_t === "" || seleccion_c === ""){
        console.log("entro");
        window.alert("Seleccione un color")
    }else{
        window.alert("Está a punto de comprar este producto");
    }
}


var list_talla = document.getElementById('list_talla');
// URL del archivo JSON
// const url = '../datos.json';

// // Realizar una solicitud HTTP para obtener el archivo JSON
// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('No se pudo cargar el archivo JSON.');
//     }
//     return response.json();
//   })

//   .then(opciones => { 
//     opciones.forEach(item => {
//     // Crea un elemento <option> para cada opción
//     var option = document.createElement('option');
//     option.value = opcion.valor; // Asigna el valor de la opción
//     option.text = opcion.texto;  // Asigna el texto de la opción
  
//     // Agrega la opción al elemento <select>
//     list_talla.appendChild(option);
//     });
//   })

//   .catch(error => {
//     console.error('Error al cargar el archivo JSON:', error);
//   });

const url = '../datos.json';

// Obtén una referencia al elemento <select>
var list_talla = document.getElementById('list_talla');
var list_color = document.getElementById('list_color');

// Realizar una solicitud HTTP para obtener el archivo JSON
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON.');
    }
    return response.json();
  })

  .then(data => { // Cambia 'opciones' a 'data' para que coincida con el JSON
    data.tallas.forEach(item => { // Accede a 'data.opciones'
      // Crea un elemento <option> para cada opción
      var option = document.createElement('option');
      option.value = item.valor; // Asigna el valor de la opción
      option.text = item.texto;  // Asigna el texto de la opción
  
      // Agrega la opción al elemento <select>
      list_talla.appendChild(option);
    });

    data.colores.forEach(item => { // Accede a 'data.opciones'
        // Crea un elemento <option> para cada opción
        var option = document.createElement('option');
        option.value = item.valor; // Asigna el valor de la opción
        option.text = item.texto;  // Asigna el texto de la opción
    
        // Agrega la opción al elemento <select>
        list_color.appendChild(option);
    });

    // document.getElementById('loginForm').addEventListener('submit', function (e) {
    //     e.preventDefault(); // Evitar que el formulario se envíe
    //     var email_log = document.getElementById('email_log');
    //     var password_log = document.getElementById('password_log');
    
    
    //     var userFound = jsonData.login.find(function (user) {
    //         return user.user === email_log && user.password === password_log;
    //     });
    
    //     if (userFound) {
    //         window.alert('Inicio de sesión exitoso.');
    //     } else {
    //         window.alert('Credenciales incorrectas. Inténtalo de nuevo.');
    //         event.preventDefault();
    //     }
    
    // });
    
  })

  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });


function comprar(){
    const boton_comprar = document.getElementById("btn_comprar");

    var list_talla = document.getElementById('list_talla');
    var list_color = document.getElementById('list_color');
  
    // Verifica si se ha seleccionado una opción válida en ambos select
    if (list_talla.value !== '' && list_color.value !== '') {
        window.alert("Está a punto de comprar este producto")
    } else {
        window.alert("Para comprar, deberá seleccionar un color y una talla de su preferencia")
    }

    
}


function carrito(){
    const boton_comprar = document.getElementById("btn_carrito");

    var list_talla = document.getElementById('list_talla');
    var list_color = document.getElementById('list_color');
  
    // Verifica si se ha seleccionado una opción válida en ambos select
    if (list_talla.value !== '' && list_color.value !== '') {
        window.alert("Está a punto de comprar este producto")
    } else {
        window.alert("Para añadir al carrito, deberá seleccionar un color y una talla de su preferencia")
    }

    
}


document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe
  
    var email_log = document.getElementById('email_log').value;
    var password_log = document.getElementById('password_log').value;
  
    // Objeto con credenciales de usuario
    var usuarios = {
      "user@user.com": "0000"
    };
  
    // Verificar las credenciales ingresadas
    if (usuarios[email_log] && usuarios[email_log] === password_log) {
        console.log("Inicio de sesión exitoso.");
    } else {
        console.log("Credenciales incorrectas. Inténtalo de nuevo.");
        event.preventDefault();
    }
  });
  

  


{
    "tallas": [
      { "valor": "", "texto": "Seleccione la talla" },
      { "valor": "Talla_S", "texto": "Talla S" },
      { "valor": "Talla_M", "texto": "Talla M" },
      { "valor": "Talla_L", "texto": "Talla L" },
      { "valor": "Talla_XL", "texto": "Talla XL" }
    ],
    "colores": [
        { "valor": "", "texto": "Seleccione un color" },
        { "valor": "Color_Azul", "texto": "Color Azul" },
        { "valor": "Color_Cafe", "texto": "Color Cafe" },
        { "valor": "Color_Rojo", "texto": "Color Rojo" },
        { "valor": "Color_Gris", "texto": "Color Gris" }
    ],

    "login": [
        { "user": "user@user.com", "password": "0000" }
      ]
}

