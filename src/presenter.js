import calcular_precio_neto from "./Precio_Neto";
import {impuesto_correspondiente_al_estado,aplicar_impuesto,impuesto_correspondiente_a_la_categoria} from "./Impuestos_aplicados";
import { descuento_correspondiente_cantidad, aplicar_descuento, descuento_correspondiente_categoria } from "./Descuentos";
import { obtener_costo_envio_por_peso_volumetrico } from "./Costo_Extra";

const cantidad_items = document.querySelector("#cantidad-item");
const precio_items = document.querySelector("#precio-item");
const formTotalizador=document.querySelector("#totalizador-form")
const codigo_estado = document.querySelector("#codigo-estado");
const categoria_producto = document.querySelector("#categoria-producto")
const peso_volumetrico =document.querySelector("#peso-volumetrico")
const tipo_de_cliente = document.querySelector("#tipo-de-cliente")

const mostrarCantidadDiv = document.querySelector("#mostrar-cantidad-items-div")
const mostrarPrecioDiv = document.querySelector("#mostrar-precio-items-div")
const mostrarPrecioNetoDiv = document.querySelector("#mostrar-precio-neto-div")
const mostrarCodigoEstadoDiv = document.querySelector("#mostrar-codigo-estado-div")
const mostrarPrecioTotalDiv = document.querySelector("#mostrar-precio-total-div")
const mostrarDesuentoDiv = document.querySelector("#mostrar-descuento-div")
const mostrarImpuestoCategoriaDiv = document.querySelector('#mostrar-impuesto-categoria-div')
const mostrarDescuentoCategoriaDiv = document.querySelector('#mostrar-descuento-categoria-div')
const mostrarPesoVolumetricoDiv =document.querySelector("#mostrar-peso-volumetrico-y-costo-envio-div")
const mostrarTipoDeClienteDiv = document.querySelector("#mostrar-tipo-de-cliente-div")

formTotalizador.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad_items_value = Number.parseInt(cantidad_items.value);
  const precio_items_value = Number.parseInt(precio_items.value);
  const codigo_estado_value = codigo_estado.value;
  const categoria_producto_value = categoria_producto.value;
  const peso_volumetrico_value = peso_volumetrico.value;
  const tipo_de_cliente_value = tipo_de_cliente.value;

  const descuento_porcentaje = descuento_correspondiente_cantidad(cantidad_items_value)
  const porcentaje_impuesto_categoria = impuesto_correspondiente_a_la_categoria(categoria_producto_value)
  const porcentaje_descuento_categoria = descuento_correspondiente_categoria(categoria_producto_value)
  
  const impuesto_correspondiente_estado= impuesto_correspondiente_al_estado(codigo_estado_value);
  
  const precio_neto=calcular_precio_neto(cantidad_items_value,precio_items_value);
  const precio_total= aplicar_descuento(aplicar_impuesto(precio_neto,impuesto_correspondiente_estado),descuento_porcentaje)  

  const impuesto_codigo_estado_aplicado_al_total = (((precio_neto-aplicar_impuesto(precio_neto,impuesto_correspondiente_estado))*-1).toFixed(2))
  const impuesto_categoria_agregado_al_total = (((porcentaje_impuesto_categoria)/100)*precio_neto).toFixed(2)
  const descuento_categoria_agregado_al_total = ((descuento_correspondiente_categoria(categoria_producto_value)/100)*precio_neto).toFixed(2)
  const costo_envio_por_peso_volumetrico = obtener_costo_envio_por_peso_volumetrico(peso_volumetrico_value)
  const porcentaje_descuento_en_costo_envio_por_tipo_de_cliente = 0;

  mostrarCantidadDiv.innerHTML = "<p>" + "Cantidad de Items: " + cantidad_items_value + "</p>";
  mostrarPrecioDiv.innerHTML = "<p>" + "Precio por items: $" + precio_items_value + "</p>";
  mostrarPrecioNetoDiv.innerHTML = "<p>" + "Precio Neto: $" + precio_neto + "</p>";
  mostrarDesuentoDiv.innerHTML = "<p>" + `Descuento (${descuento_porcentaje})%): -` + Math.round(precio_neto*(descuento_porcentaje/100)) +"</p>"

  mostrarCodigoEstadoDiv.innerHTML = "<p>" + "Impuesto para " + codigo_estado_value + ` (${impuesto_correspondiente_estado}%): ` + impuesto_codigo_estado_aplicado_al_total + "</p>";
  mostrarImpuestoCategoriaDiv.innerHTML = "<p>" + `Impuesto adicional para la categoria ${categoria_producto_value} (${porcentaje_impuesto_categoria}%): ` + impuesto_categoria_agregado_al_total +"</p>"
  mostrarDescuentoCategoriaDiv.innerHTML = "<p>" + `Descuento adicional para la categoria ${categoria_producto_value} (${porcentaje_descuento_categoria}%): ` + descuento_categoria_agregado_al_total + "</p>"
  mostrarPesoVolumetricoDiv.innerHTML = "<p>" + `Costo de envio para el peso ${peso_volumetrico_value} : ` + costo_envio_por_peso_volumetrico + "</p>"
  mostrarTipoDeClienteDiv.innerHTML = "<p>" + "Beneficio de descuento para el tipo de cliente " + tipo_de_cliente_value + ": " + porcentaje_descuento_en_costo_envio_por_tipo_de_cliente + "</p>";

  mostrarPrecioTotalDiv.innerHTML = "<p>" + "Precio Total (impuesto y descuento): " + precio_total + "</p>";

});
