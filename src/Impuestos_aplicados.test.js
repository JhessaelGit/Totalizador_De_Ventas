import {impuesto_correspondiente_al_estado,aplicar_impuesto} from "./Impuestos_aplicados"

describe("Determinar los porsentajes aplicados de los impuestos",() => {
    it("Al ingresar el CA debe devolver un 8.25", () => {
        expect(impuesto_correspondiente_al_estado("CA")).toEqual(8.25)
    })
    it("al ingresar el UT debe devolver un 6.65", () => {
        expect(impuesto_correspondiente_al_estado("UT")).toEqual(6.65)
    })

})
describe("Aplicar Impuesto",() => {
    it("Deveria devolver un 108 al ingresar un precio de 100 e impuesto de 8", () => {
        expect(aplicar_impuesto(100,8)).toEqual(108)
    })
})
