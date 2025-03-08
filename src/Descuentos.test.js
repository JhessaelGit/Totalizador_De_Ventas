import { descuento_correspondiente_cantidad, aplicar_descuento, descuento_correspondiente_categoria } from "./Descuentos"
describe("Test para la funcion de optener el descuento segun la cantidad", () => {
    it("Al ingresar un 500 deve devolver un 0", () => {
        expect(descuento_correspondiente_cantidad(500)).toEqual(0)
    })
    it("Al ingresar un 1000 deve devolver un 3", () => {
        expect(descuento_correspondiente_cantidad(1000)).toEqual(3)
    })
    it("Al ingresar un 1000 deve devolver un 3", () => {
        expect(descuento_correspondiente_cantidad(3000)).toEqual(5)
    })
    it("Al ingresar un 1300 deve devolver un 3", () => {
        expect(descuento_correspondiente_cantidad(1300)).toEqual(3)
    })
    it("Al ingresar un 3300 deve devolver un 5", () => {
        expect(descuento_correspondiente_cantidad(3300)).toEqual(5)
    })
    it("Al ingresar un 7500 deve devolver un 5", () => {
        expect(descuento_correspondiente_cantidad(7500)).toEqual(7)
    })
    it("Al ingresar un 15300 deve devolver un 10", () => {
        expect(descuento_correspondiente_cantidad(15300)).toEqual(10)
    })
    it("Al ingresar un 45350 deve devolver un 15", () => {
        expect(descuento_correspondiente_cantidad(45350)).toEqual(15)
    })
})

describe("Test para la funcion aplicar descuento", () => {
    it("Al ingresar el precio de 100 y el porcentaje 10 deve devolver un 90", () => {
        expect(aplicar_descuento(100,10)).toEqual(90)
    })
    it("Al ingresar el precio de 200 y el porcentaje 33 deve devolver un 90", () => {
        expect(aplicar_descuento(200,33)).toEqual(134)
    })
})

describe("Test para la funcion obtener el descuento de categoria", () => {
    it("Al ingresar el Alimentos debe devolver un 2", () => {
        expect(descuento_correspondiente_categoria("Alimentos")).toEqual(2)
    })
    it("Al ingresar el Bebidas alcoholicas deveria devolver un 0", () => {
        expect(descuento_correspondiente_categoria("Bebidas alcoholicas")).toEqual(0)
    })
    it("Al ingresar el Material escritorio deveria devolver un 1.5", () => {
        expect(descuento_correspondiente_categoria("Material escritorio")).toEqual(1.5)
    })
    
})
