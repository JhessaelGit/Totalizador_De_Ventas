import {impuesto_correspondiente_al_estado,aplicar_impuesto} from "./Impuestos_aplicados"

describe("Determinar los porsentajes aplicados de los impuestos",() => {
    it("Al ingresar el CA debe devolver un 8.25", () => {
        expect(impuesto_correspondiente_al_estado("CA")).toEqual(8.25)
    })
    it("al ingresar el UT debe devolver un 6.65", () => {
        expect(impuesto_correspondiente_al_estado("UT")).toEqual(6.65)
    })
    it("al ingresar el AL debe devolver un 4.00", () => {
        expect(impuesto_correspondiente_al_estado("AL")).toEqual(4.00)
    })
    it("al ingresar el NV debe devolver un 8.00", () => {
        expect(impuesto_correspondiente_al_estado("NV")).toEqual(8.00)
    })
    it("al ingresar el TX debe devolver un 4.00", () => {
        expect(impuesto_correspondiente_al_estado("TX")).toEqual(6.25)
    })
    
})
describe("Aplicar Impuesto",() => {
    it("Deveria devolver un 108 al ingresar un precio de 100 e impuesto de 8", () => {
        expect(aplicar_impuesto(100,8)).toEqual(108)
    })
    it("Deveria devolver un 216.5 al ingresar un precio de 200 e impuesto de 8.25", () => {
        expect(aplicar_impuesto(200,8.25)).toEqual(216.5)
    })
})
