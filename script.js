/*      El programa debería imprimir, por ejemplo:
      Lista de compras:
      Frutas: banana, tomate, manzana, uva, aguacate
      Lácteos: leche vegetal, leche de vaca, leche en polvo
      Congelados: 
      Dulces: chicle y gominola
*/

let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let cont = 0;
alert("Bienvenido, este programa esta diseñado para realizar una lista de compras")
while(true){
      let compra = prompt("Ingrese el articulo que desea comprar:");
      let categoria = parseInt(prompt(`${compra} en que categoria se encuentra:\n 1. Fruta.\n 2. Lacteos.\n 3. Congelados.\n 4. Dulces`));
      let confirmar = true;   
            while(confirmar){
                  if (categoria >= 1 && categoria <= 4){
                      if (categoria == 1){
                        frutas.push(compra);
                        alert(`${frutas.join(", ")}`);                        
                      }
                      else if (categoria == 2){
                        lacteos.push(compra);
                        alert(`${lacteos.join(", ")}`);                        
                      }
                      else if (categoria == 3){
                        congelados.push(compra);
                        alert(`${congelados.join(", ")}`);                        
                      }
                      else{
                        dulces.push(compra);
                        alert(`${dulces.join(", ")}`);                        
                      }
                  }
                  else{
                  alert('fin')                  
                  }
                  cont ++
                  console.log(cont);
                  let continuar = parseInt(prompt("Desea ingresar otro articulo:\n 1. Seguir ingresando'\n 2. Salir."));
                  if ( continuar != 1) {
                        alert(`LISTA DE COMPRAS:\n  Frutas: ${frutas.join(", ")}\n  Lácteos: ${lacteos.join(", ")}\n  Congelados: ${congelados.join(", ")}\n  Dulces: ${dulces.join(", ")}`)
                        confirmar = false;
                  }
            }
                                          
}
  

