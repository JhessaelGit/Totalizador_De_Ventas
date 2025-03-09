import { obtener_costo_envio_por_peso_volumetrico } from "./Costo_Extra";
describe("Pruebas para la Funcion para obtener el costo de envio", () => {
    it("Al mandarle 0 debe devolver un 0", () => {
        expect(obtener_costo_envio_por_peso_volumetrico(0)).toEqual(0);
    })
    it("Al mandarle un numero entre 0 y 10 debe devolver un 0", () => {
        expect(obtener_costo_envio_por_peso_volumetrico(0)).toEqual(0);
        expect(obtener_costo_envio_por_peso_volumetrico(4)).toEqual(0);
        expect(obtener_costo_envio_por_peso_volumetrico(7)).toEqual(0);
        expect(obtener_costo_envio_por_peso_volumetrico(10)).toEqual(0);  
    })
    
})