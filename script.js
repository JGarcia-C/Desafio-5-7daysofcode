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
let cont = 1;
alert("Bienvenido, este programa esta diseñado para realizar una lista de compras")
while(true){
  let compra = prompt("Ingrese el articulo que desea comprar:");
  let categoria = parseInt(prompt(`${compra} en que categoria se encuentra:\n 1. Fruta.\n 2. Lacteos.\n 3. Congelados.\n 4. Dulces`));
  if (categoria >= 1 && categoria <= 4){
    if (categoria == 1){
      frutas.push(compra);
      alert(`${frutas.join(", ")}`);
      break
    }
    else if (categoria == 2){
      lacteos.push(compra);
      alert(`${lacteos.join(", ")}`);
      break
    }
    else if (categoria == 3){
      congelados.push(compra);
      alert(`${congelados.join(", ")}`);
      break
    }
    else{
      dulces.push(compra);
      alert(`${dulces.join(", ")}`);
      break
    }
  }
  else{
    alert('fin')
    break
  }
}
  

