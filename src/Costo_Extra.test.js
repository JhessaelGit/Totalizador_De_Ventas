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
    it("Al mandarle un numero entre 11 y 20 debe devolver un 3.5", () => {
        expect(obtener_costo_envio_por_peso_volumetrico(11)).toEqual(3.5);
        expect(obtener_costo_envio_por_peso_volumetrico(15)).toEqual(3.5);
        expect(obtener_costo_envio_por_peso_volumetrico(18)).toEqual(3.5);
        expect(obtener_costo_envio_por_peso_volumetrico(20)).toEqual(3.5);  
    })
    it("Al mandarle un numero entre 21 y 40 debe devolver un 5", () => {
        expect(obtener_costo_envio_por_peso_volumetrico(21)).toEqual(5);
        expect(obtener_costo_envio_por_peso_volumetrico(28)).toEqual(5);
        expect(obtener_costo_envio_por_peso_volumetrico(36)).toEqual(5);
        expect(obtener_costo_envio_por_peso_volumetrico(40)).toEqual(5);  
    })
    
    it("Al mandarle un numero entre 41 y 80 debe devolver un 6", () => {
        expect(obtener_costo_envio_por_peso_volumetrico(41)).toEqual(6);
        expect(obtener_costo_envio_por_peso_volumetrico(58)).toEqual(6);
        expect(obtener_costo_envio_por_peso_volumetrico(62)).toEqual(6);
        expect(obtener_costo_envio_por_peso_volumetrico(80)).toEqual(6);  
    })

    it("Al mandarle un numero entre 81 y 100 debe devolver un 6.5", () => {
        expect(obtener_costo_envio_por_peso_volumetrico(81)).toEqual(6.5);
        expect(obtener_costo_envio_por_peso_volumetrico(90)).toEqual(6.5);
        expect(obtener_costo_envio_por_peso_volumetrico(97)).toEqual(6.5);
        expect(obtener_costo_envio_por_peso_volumetrico(100)).toEqual(6.5);  
    })

    it("Al mandarle un numero entre 101 y 200 debe devolver un 8", () => {
        expect(obtener_costo_envio_por_peso_volumetrico(101)).toEqual(8);
        expect(obtener_costo_envio_por_peso_volumetrico(145)).toEqual(8);
        expect(obtener_costo_envio_por_peso_volumetrico(178)).toEqual(8);
        expect(obtener_costo_envio_por_peso_volumetrico(200)).toEqual(8);  
    })
})