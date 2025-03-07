import calcular_precio_neto from "./Precio_Neto";
import {impuesto_correspondiente_al_estado,aplicar_impuesto,impuesto_correspondiente_a_la_categoria} from "./Impuestos_aplicados";
import { descuento_correspondiente, aplicar_descuento } from "./Descuentos";
const cantidad_items = document.querySelector("#cantidad-item");
const precio_items = document.querySelector("#precio-item");
const formTotalizador=document.querySelector("#totalizador-form")
const codigo_estado = document.querySelector("#codigo-estado");
const categoria_producto = document.querySelector("#categoria-producto")

const mostrarCantidadDiv=document.querySelector("#mostrar-cantidad-items-div")
const mostrarPrecioDiv=document.querySelector("#mostrar-precio-items-div")
const mostrarPrecioNetoDiv=document.querySelector("#mostrar-precio-neto-div")
const mostrarCodigoEstadoDiv=document.querySelector("#mostrar-codigo-estado-div")
const mostrarPrecioTotalDiv=document.querySelector("#mostrar-precio-total-div")
const mostrarDesuentoDiv = document.querySelector("#mostrar-categoria-div")
const mostrarCategoriaDiv = document.querySelector('#mostrar-categoria-div')


formTotalizador.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad_items_value = Number.parseInt(cantidad_items.value);
  const precio_items_value = Number.parseInt(precio_items.value);
  const codigo_estado_value = codigo_estado.value;
  const impuesto_correspondiente= impuesto_correspondiente_al_estado(codigo_estado_value);
  const precio_neto=calcular_precio_neto(cantidad_items_value,precio_items_value);
  const descuento_porcentaje = descuento_correspondiente(cantidad_items_value)
  const precio_total= aplicar_descuento(aplicar_impuesto(precio_neto,impuesto_correspondiente),descuento_porcentaje)
  const categoria_producto_value = categoria_producto.value;
  const porcentaje_impuesto_categoria = impuesto_correspondiente_a_la_categoria(categoria_producto_value)


  mostrarCantidadDiv.innerHTML = "<p>" + "Cantidad de Items: " + cantidad_items_value + "</p>";
  mostrarPrecioDiv.innerHTML = "<p>" + "Precio por items: $" + precio_items_value + "</p>";
  mostrarPrecioNetoDiv.innerHTML = "<p>" + "Precio Neto: $" + precio_neto + "</p>";
  mostrarDesuentoDiv.innerHTML = "<p>" + `Descuento (${descuento_porcentaje})%): ` + Math.round(precio_neto*(descuento_porcentaje/100)) +"</p>"
  mostrarCodigoEstadoDiv.innerHTML = "<p>" + "Impuesto para " + codigo_estado_value + ` (${impuesto_correspondiente}%): ` + ((precio_neto-aplicar_impuesto(precio_neto,impuesto_correspondiente))*-1) + "</p>";
  mostrarCategoriaDiv.innerHTML = "<p>" + `El impuesto adicional para la categoria ${categoria_producto_value} (${porcentaje_impuesto_categoria}%): ` + "</p>"
  mostrarPrecioTotalDiv.innerHTML = "<p>" + "Precio Total (impuesto y descuento): " + precio_total + "</p>";

});
