function hacerPregunta(pregunta) {
  let respuesta = prompt(pregunta);
  return respuesta;
}

function calcularCostoTotal() {
  let costoTotal = 0;

  let respuesta = hacerPregunta("¿Deseas registrar un producto o servicio? (si/no)");
  while (respuesta.toLowerCase() === "si") {
    let costo = parseFloat(hacerPregunta("Ingresa el costo"));
    
    if (!isNaN(costo) && costo >= 0) {
      costoTotal += costo;
    } else {
      alert("Costo inválido. Inténtalo nuevamente.");
    }

    respuesta = hacerPregunta("¿Deseas registrar otro producto o servicio? (si/no)");
  }

  alert("El costo total de los productos y servicios es: $" + costoTotal.toFixed(2));
}

calcularCostoTotal();