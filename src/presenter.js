import precio_neto from "./Precio_Neto";
const cantidad_items = document.querySelector("#cantidad-item");
const precio_items = document.querySelector("#precio-item");
const formTotalizador=document.querySelector("#totalizador-form")
const mostrarCantidadDiv=document.querySelector("#mostrar-cantidad-items-div")
const mostrarDrecioDiv=document.querySelector("#mostrar-precio-items-div")
const mostrarPrecioNetoDiv=document.querySelector("#mostrar-precio-neto-div")

formTotalizador.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad_items_value = Number.parseInt(cantidad_items.value);
  const precio_items_value = Number.parseInt(precio_items.value);
  mostrarCantidadDiv.innerHTML = "<p>" + "Cantidad de Items: " + cantidad_items_value + "</p>";
  mostrarDrecioDiv.innerHTML = "<p>" + "Precio por items: $" + precio_items_value + "</p>";
  mostrarPrecioNetoDiv.innerHTML = "<p>" + "Precio Neto: $" + precio_neto(cantidad_items_value,precio_items_value) + "</p>";
});
