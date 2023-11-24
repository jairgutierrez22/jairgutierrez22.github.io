let nombre_user = prompt("Bienvenido. Estás en la zona de compras, queremos conocerte...cuál es tu nombre?");

let edad_user = prompt(nombre_user + " nos alegra tenerte con nosotros. Queremos saber más de ti, cuántos años tienes?");

if(edad_user >= 18){
    let confirmar = prompt("Es importante para nosotros saber si eres mayor de edad y así puedes realizar compras vía internet. Escribe OK para continuar.");
    if(confirmar === "OK"){
    /*
        debugger
        let tipo_productos = prompt("TOP Productos en Promoción. \n 1.Hoodie Nike. \n2.Licra Adidas. \n3. Tenis Runner Rebook. \n\nEscribe OK para continuar. \n\nEscribe SALIR para salir.");
        // debugger
        if(tipo_productos === "OK"){
            let prod1 = "hoodie: $20";
            let prod2 = "licra: $13";
            let prod3 = "tenis: $120";
            let cont = 1;
            while(cont <=3){
                let nom_prod;
                if(cont === "1"){
                    nom_prod = prompt(prod1 + "entro"); 
                }else if(cont === "2"){
                    nom_prod = prompt(prod2 + "entro 2"); 
                }else if(cont === "3"){
                    nom_prod = prompt(prod3 + "entro 3"); 
                }else if(cont === "SALIR"){
                    prompt("Lo sentimos, vuelve pronto :)");
                }
                cont++;
            }
        }else if(tipo_productos === "SALIR"){
            prompt("Lo sentimos, vuelve pronto :)");
        }
    */
    /*
        let tipo_productos = prompt("TOP Productos en Promoción. \n 1.Hoodie Nike. \n2.Licra Adidas. \n3. Tenis Runner Rebook. \n\nEscribe OK para continuar. \n\nEscribe SALIR para salir.");

        if (tipo_productos === "OK") {
            let prod1 = "hoodie: $20";
            let prod2 = "licra: $13";
            let prod3 = "tenis: $120";
            let cont = 1;
            while (cont <= 3) {
                let nom_prod;
                if (cont === 1) {
                    nom_prod = prompt(prod1 + "\n Lo vas a comprar? Escribe cuántos quieres, si no, escribe 0 (cero) para pasar al siguiente");
                    nom_prod = parseInt(nom_prod);
                    if(nom_prod >= 1){
                        let total = 20 * nom_prod;
                        let compra = prompt("Vas a pagar " + total + " escribe OK para comprar este producto");
                        if(compra === "OK"){
                            totalCompra += total; 
                            alert("Felicidades, tu compra llegará pronto");
                        }else if(compra === "NO"){
                            alert("Lo sentimos, vuelve pronto :)");
                            break;
                        }
                    }
                } else if (cont === 2) {
                    nom_prod = prompt(prod2 + "\n Lo vas a comprar? Escribe cuántos quieres, si no, escribe 0 (cero) para pasar al siguiente");
                    if(nom_prod >= 1){
                        let total = 13 * nom_prod;
                        let compra = prompt("Vas a pagar " + total + " escribe OK para comprar este producto");
                        if(compra === "OK"){
                            totalCompra += total; 
                            alert("Felicidades, tu compra llegará pronto");
                        }else if(compra === "NO"){
                            alert("Lo sentimos, vuelve pronto :)");
                            break;
                        }
                    }
                } else if (cont === 3) {
                    nom_prod = prompt(prod3 + "\n Lo vas a comprar? Escribe cuántos quieres, si no, escribe 0 (cero) para pasar al siguiente");
                    if(nom_prod >= 1){
                        let total = 120 * nom_prod;
                        let compra = prompt("Vas a pagar " + total + " escribe OK para comprar este producto");
                        if(compra === "OK"){
                            totalCompra += total; 
                            alert("Felicidades, tu compra llegará pronto");
                        }else if(compra === "NO"){
                            alert("Lo sentimos, vuelve pronto :)");
                            break;
                        }
                    }
                } else if (nom_prod === "SALIR") {
                    alert("Lo sentimos, vuelve pronto :)");
                    break;
                } 
                
                
                if (nom_prod === 0) {
                    // El usuario no quiere comprar este producto, pasar al siguiente
                    cont++;
                } else if (nom_prod === "SALIR") {
                    alert("Lo sentimos, vuelve pronto :)");
                    break;
                }
                // prompt("total de la compra: " + total);
            }
            alert("Total de la compra: $" + totalCompra);
        } else if (tipo_productos === "SALIR") {
            alert("Lo sentimos, vuelve pronto :)");
        }
    */
        let tipo_productos = prompt("TOP Productos en Promoción. \n 1.Hoodie Nike. \n2.Licra Adidas. \n3. Tenis Runner Rebook. \n\nEscribe OK para continuar. \n\nEscribe SALIR para salir.");
        let totalCompra = 0;
        
        if (tipo_productos === "OK") {
            let prod1 = "hoodie: $20";
            let prod2 = "licra: $13";
            let prod3 = "tenis: $120";
            let cont = 1;
        
            while (cont <= 3) {
                let nom_prod = 0;
                if (cont === 1) {
                    nom_prod = prompt(prod1 + "\n Lo vas a comprar? Escribe cuántos quieres, si no, escribe 0 (cero) para pasar al siguiente");
                } else if (cont === 2) {
                    nom_prod = prompt(prod2 + "\n Lo vas a comprar? Escribe cuántos quieres, si no, escribe 0 (cero) para pasar al siguiente");
                } else if (cont === 3) {
                    nom_prod = prompt(prod3 + "\n Lo vas a comprar? Escribe cuántos quieres, si no, escribe 0 (cero) para pasar al siguiente");
                } else if (nom_prod === "SALIR") {
                    alert("Lo sentimos, vuelve pronto :)");
                    break;
                }
        
                nom_prod = parseInt(nom_prod);
            
                if (nom_prod >= 1) {
                    let total = 0;
                    if (cont === 1) {
                        total = 20 * nom_prod;
                    } else if (cont === 2) {
                        total = 13 * nom_prod;
                    } else if (cont === 3) {
                        total = 120 * nom_prod;
                    }
                
                    let compra = prompt(`Vas a pagar $${total}. Escribe OK para comprar este producto, o NO para pasar al siguiente.`);
                    if (compra === "OK") {
                        totalCompra += total; 
                        alert("Felicidades, tu compra llegará pronto");
                    } else if (compra === "NO") {
                        alert("Lo sentimos, vuelve pronto :)");
                    }
                } else if (nom_prod === 0) {
                cont++;
                }
                cont++;
          }
        
          alert("Total de la compra: $" + totalCompra);
        } else if (tipo_productos === "SALIR") {
          alert("Lo sentimos, vuelve pronto :)");
        }
        

    }else{
        alert("Lo sentimos, vuelve pronto :)");
    }

}else{
    alert("Lo sentimos, no podrás realizar compras por el momento.");
}




