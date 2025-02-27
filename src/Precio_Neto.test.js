import precio_neto from "./Precio_Neto";
describe("Calcula el precio neto", () => {
  it("deberia multiplicar 2*3 y retornar un 6", () => {
    expect(precio_neto(2, 3)).toEqual(6);
  });
});


