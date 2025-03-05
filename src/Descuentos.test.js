import { descuento_correspondiente } from "./Descuentos"
describe("Test para la funcion de optener el descuento", () => {
    it("Al ingresar un 500 deve devolver un 0", () => {
        expect(descuento_correspondiente(500)).toEqual(0)
    })
    it("Al ingresar un 1000 deve devolver un 3", () => {
        expect(descuento_correspondiente(1000)).toEqual(3)
    })
    it("Al ingresar un 1000 deve devolver un 3", () => {
        expect(descuento_correspondiente(3000)).toEqual(5)
    })
    it("Al ingresar un 1300 deve devolver un 3", () => {
        expect(descuento_correspondiente(1300)).toEqual(3)
    })
    it("Al ingresar un 3300 deve devolver un 5", () => {
        expect(descuento_correspondiente(3300)).toEqual(5)
    })
    it("Al ingresar un 7500 deve devolver un 5", () => {
        expect(descuento_correspondiente(7500)).toEqual(7)
    })
    
})
