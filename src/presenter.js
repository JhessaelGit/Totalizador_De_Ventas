import precio_neto from "./Precio_Neto";
const cantidad_items = document.querySelector("#cantidad-item");
const precio_items = document.querySelector("#precio-item");
const formTotalizador=document.querySelector("#totalizador-form")
const mostrarcantidaddiv=document.querySelector("#mostrar-items-div")
const mostrarpreciodiv=document.querySelector("#mostrar-precio-items-div")
formTotalizador.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad_items_value = Number.parseInt(cantidad_items.value);
  const precio_items_value = Number.parseInt(precio_items.value);
  mostrarcantidaddiv.innerHTML = "<p>" + "Cantidad de Items: " + cantidad_items_value + "</p>";
  mostrarpreciodiv.innerHTML = "<p>" + "Precio por items: " + precio_items_value + "</p>";
});
