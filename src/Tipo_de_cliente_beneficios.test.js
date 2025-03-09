import { obtener_beneficio_segun_tipo_de_cliente } from "./Tipo_de_cliente_beneficios";

describe("prueba de la funcion de obtener beneficio segun el tipo de cliente", () => {
    it ("si la funcion obtiene el valor Normal debe devolver el dato de 0", () => {
        expect(obtener_beneficio_segun_tipo_de_cliente("Normal")).toEqual(0)
    })

    it ("si la funcion obtiene el valor Recurrente debe devolver el dato de 0,5", () => {
        expect(obtener_beneficio_segun_tipo_de_cliente("Recurrente")).toEqual(0.5)
    })

    it ("si la funcion obtiene el valor Antiguo recurrente debe devolver el dato de 1", () => {
        expect(obtener_beneficio_segun_tipo_de_cliente("Antiguo recurrente")).toEqual(1)
    })

    it ("si la funcion obtiene el valor especial debe devolver el dato de 1.5", () => {
        expect(obtener_beneficio_segun_tipo_de_cliente("Especial")).toEqual(1.5)
    })
})


