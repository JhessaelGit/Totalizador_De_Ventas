import { descuento_correspondiente } from "./Descuentos"
describe("Test para la funcion de optener el descuento", () => {
    it("Al ingresar un 500 deve devolver un 0", () => {
        expect(descuento_correspondiente(500)).toEqual(0)
    })
})
