import impuesto_correspondiente_al_estado from "./Impuestos_aplicados"

describe("Determinar los porsentajes aplicados de los impuestos",() => {
    it("Al ingresar el CA debe devolver un 8.25", () => {
        expect(impuesto_correspondiente_al_estado("CA")).toEqual(8.25)
    })
    it("al ingresar el UT debe devolver un 6.65", () => {
        expect(impuesto_correspondiente_al_estado("UT")).toEqual(6.65)
    })

})