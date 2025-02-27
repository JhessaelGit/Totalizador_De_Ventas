import precio_neto from "./Precio_Neto";
const cantidad_items = document.querySelector("#cantidad-item");
const formTotalizador=document.querySelector("#totalizador-form")
const mostrardiv=document.querySelector("#mostrar-items-div")
formTotalizador.addEventListener("submit", (event) => {
  event.preventDefault();

  const items = Number.parseInt(cantidad_items.value);
  mostrardiv.innerHTML = "<p>" + items + "</p>";
});
