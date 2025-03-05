import calcular_precio_neto from "./Precio_Neto";
import {impuesto_correspondiente_al_estado,aplicar_impuesto} from "./Impuestos_aplicados";
import { descuento_correspondiente, aplicar_descuento } from "./Descuentos";
const cantidad_items = document.querySelector("#cantidad-item");
const precio_items = document.querySelector("#precio-item");
const formTotalizador=document.querySelector("#totalizador-form")
const codigo_estado = document.querySelector("#codigo-estado");
const mostrarCantidadDiv=document.querySelector("#mostrar-cantidad-items-div")
const mostrarPrecioDiv=document.querySelector("#mostrar-precio-items-div")
const mostrarPrecioNetoDiv=document.querySelector("#mostrar-precio-neto-div")
const mostrarCodigoEstadoDiv=document.querySelector("#mostrar-codigo-estado-div")
const mostrarPrecioTotalDiv=document.querySelector("#mostrar-precio-total-div")
const mostrarDesuentoDiv = document.querySelector("#mostrar-descuento-div")



formTotalizador.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad_items_value = Number.parseInt(cantidad_items.value);
  const precio_items_value = Number.parseInt(precio_items.value);
  const codigo_estado_value = codigo_estado.value;
  const impuesto_correspondiente= impuesto_correspondiente_al_estado(codigo_estado_value);
  const precio_neto=precio_items_value*cantidad_items_value;
  const descuento_porcentaje = descuento_correspondiente(cantidad_items)
  

  mostrarCantidadDiv.innerHTML = "<p>" + "Cantidad de Items: " + cantidad_items_value + "</p>";
  mostrarPrecioDiv.innerHTML = "<p>" + "Precio por items: $" + precio_items_value + "</p>";
  mostrarPrecioNetoDiv.innerHTML = "<p>" + "Precio Neto: $" + calcular_precio_neto(cantidad_items_value,precio_items_value) + "</p>";

  mostrarCodigoEstadoDiv.innerHTML = "<p>" + "Impuesto para " + codigo_estado_value + ` (${impuesto_correspondiente}%): ` + aplicar_impuesto(precio_neto,impuesto_correspondiente) + "</p>";

  mostrarPrecioTotalDiv.innerHTML = "<p>" + "Precio Total (+impuesto): " + aplicar_impuesto(precio_neto,impuesto_correspondiente) + "</p>";

});
